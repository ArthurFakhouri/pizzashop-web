import { api } from '@/lib/axios'

export type GetOrdersQuery = {
  orderId?: string | null
  customerName?: string | null
  status?: string | null
  pageIndex?: number | null
}

export type GetOrdersResponse = {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({
  orderId,
  customerName,
  status,
  pageIndex,
}: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      orderId,
      customerName,
      status,
      pageIndex,
    },
  })

  return response.data
}

type OrderStatusOptions =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

type OrderStatusProps = {
  status: OrderStatusOptions
}

const orderStatusMap: Record<OrderStatusOptions, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  processing: 'Em preparo',
  delivering: 'Em entrega',
  delivered: 'Entregue',
}

const orderStatusStyleMap: Record<OrderStatusOptions, string> = {
  pending: 'bg-slatel-400',
  canceled: 'bg-rose-500',
  delivered: 'bg-emerald-500',
  delivering: 'bg-amber-500',
  processing: 'bg-amber-500',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${orderStatusStyleMap[status]}`} />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}

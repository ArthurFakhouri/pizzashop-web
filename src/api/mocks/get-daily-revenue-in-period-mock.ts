import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      date: '12/03/2024',
      receipt: 2000,
    },
    {
      date: '13/03/2024',
      receipt: 1500,
    },
    {
      date: '14/03/2024',
      receipt: 2400,
    },
    {
      date: '15/03/2024',
      receipt: 1000,
    },
    {
      date: '16/03/2024',
      receipt: 3000,
    },
    {
      date: '17/03/2024',
      receipt: 2000,
    },
    {
      date: '18/03/2024',
      receipt: 1900,
    },
  ])
})

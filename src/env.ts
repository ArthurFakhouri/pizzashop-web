import { z } from 'zod'

const envSchema = z.object({
  VITE_PIZZASHOP_API_URL: z.string().min(1),
})

export const env = envSchema.parse(import.meta.env)

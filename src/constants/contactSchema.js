import { z } from 'zod'

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(200, 'Subject is too long'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message is too long'),
})

export const GOOGLE_SHEETS_ENDPOINT = import.meta.env.VITE_GOOGLE_SHEETS_ENDPOINT || ''

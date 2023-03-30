import * as zod from 'zod'

export const filterSchema = zod
  .object({
    name: zod
      .string()
      .regex(/^[a-zA-Z0-9 ]*$/, 'Only letters and numbers are allowed')
      .optional(),
    status: zod.string().optional(),
    gender: zod.string().optional(),
    species: zod.string().optional(),
  })
  .refine(
    (data) => {
      const values = Object.values(data).filter((value) => value !== undefined)
      return values.length >= 1
    },
    {
      message: 'At least one field is required',
    }
  )

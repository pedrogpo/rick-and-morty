import * as zod from 'zod'

export const filterSchema = zod.object({
  // accept only numbers and letters in name
  name: zod.string().regex(/^[a-zA-Z0-9 ]*$/, 'Only letters and numbers are allowed'),
  status: zod.string().optional(),
  gender: zod.string().optional(),
  species: zod.string().optional(),
  episode: zod.string().optional(),
})

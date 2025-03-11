import { publicProcedure, t } from '../lib/trpc'

export const todoRouter = t.router({
  say: publicProcedure.query(async ({ ctx }) => {
    return 'Hello World'
  }),
})

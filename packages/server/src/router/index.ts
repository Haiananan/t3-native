import { t } from '../lib/trpc'
import { todoRouter } from './todoRouter'

export const appRouter = t.router({
  todo: todoRouter,
})

export type AppRouter = typeof appRouter

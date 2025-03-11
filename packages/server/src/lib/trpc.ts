import { initTRPC } from '@trpc/server'
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'
import SuperJSON from 'superjson'
import { ZodError } from 'zod'

import { prisma } from '../lib/prismaClient'

export function createContext({ req, res }: CreateFastifyContextOptions) {
  const user = { name: req.headers.username ?? 'anonymous' }
  return { req, res, user, prisma }
}
export type Context = Awaited<ReturnType<typeof createContext>>

export const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})

export const publicProcedure = t.procedure

export const authProcedure = publicProcedure.use(async ({ ctx, next }) => {
  // if (!user) {
  //   throw new TRPCError({
  //     code: 'UNAUTHORIZED',
  //     message: 'User not found'
  //   })
  // }
  return next({
    ctx: {
      // uid,
      // user
    },
  })
})

export const router = t.router

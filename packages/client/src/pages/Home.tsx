import { IonPage } from '@ionic/react'
import React from 'react'
import { Link } from 'react-router-dom'

import { trpc } from '../utils/trpc'

export const Home: React.FC = () => {
  const hello = trpc.todo.say.useQuery()

  return (
    <IonPage>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50/50 p-6">
        <div className="w-full max-w-3xl">
          {/* 标题区域 */}
          <div className="mb-12 text-center">
            <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900">
              T3 Native
            </h1>
            <p className="text-base text-gray-500">现代全栈开发的最佳实践</p>
          </div>

          {/* 主卡片 */}
          <div className="mb-10 overflow-hidden rounded-3xl bg-white/80 p-7 shadow-sm ring-1 ring-gray-100 backdrop-blur-sm">
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              欢迎使用 T3 Stack
            </h2>
            <p className="mb-6 text-base text-gray-600">
              这是一个集成最新前端和后端技术的应用框架，为您提供极致的开发体验。
            </p>

            {hello.isLoading ? (
              <div className="my-5 rounded-2xl bg-gray-100/70 p-4 text-center text-gray-500">
                <div className="animate-pulse">加载中...</div>
              </div>
            ) : (
              <div className="my-5 rounded-2xl bg-blue-50/70 p-4 text-center font-medium text-blue-600">
                {hello.data}
              </div>
            )}

            <div className="mt-7 flex justify-center">
              <Link
                to="/about"
                className="inline-flex items-center rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none active:bg-blue-700"
              >
                了解更多
              </Link>
            </div>
          </div>

          {/* 特点展示 */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/80 p-5 text-center shadow-sm ring-1 ring-gray-100 backdrop-blur-sm">
              <h3 className="mb-2 text-base font-semibold text-gray-900">
                类型安全
              </h3>
              <p className="text-sm text-gray-600">端到端类型安全的 API 交互</p>
            </div>
            <div className="rounded-2xl bg-white/80 p-5 text-center shadow-sm ring-1 ring-gray-100 backdrop-blur-sm">
              <h3 className="mb-2 text-base font-semibold text-gray-900">
                现代组件
              </h3>
              <p className="text-sm text-gray-600">
                基于 React 与 Ionic 的 UI 设计
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-5 text-center shadow-sm ring-1 ring-gray-100 backdrop-blur-sm">
              <h3 className="mb-2 text-base font-semibold text-gray-900">
                高效开发
              </h3>
              <p className="text-sm text-gray-600">优秀的开发体验和工作流</p>
            </div>
          </div>
        </div>
      </div>
    </IonPage>
  )
}

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export const About: React.FC = () => {
  const history = useHistory()
  return (
    <IonPage>
      <IonContent>
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50/50 p-6">
          <div className="w-full max-w-3xl">
            {/* 标题区域 */}
            <div className="mb-8 text-center">
              <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900">
                关于本应用
              </h1>
              <p className="text-base text-gray-500">探索支持此应用的技术栈</p>
            </div>

            {/* 返回链接 */}
            <div className="mb-8 text-center">
              <div
                onClick={() => {
                  history.goBack()
                }}
                className="inline-flex items-center justify-center text-blue-500 hover:text-blue-600"
              >
                <span className="text-base font-medium">返回首页</span>
              </div>
            </div>

            {/* 主要内容 */}
            <div className="mb-10 overflow-hidden rounded-3xl bg-white/80 p-7 shadow-sm ring-1 ring-gray-100 backdrop-blur-sm">
              <div className="mb-6">
                <h2 className="mb-3 text-2xl font-semibold text-gray-900">
                  T3 技术栈
                </h2>
                <p className="text-base text-gray-600">
                  这是一个集成了最新全栈技术的应用框架，为开发者提供极致的开发体验。
                </p>
              </div>

              {/* 技术分类 */}
              <div className="space-y-8">
                {/* 前端技术 */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">
                    前端技术
                  </h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-2xl border border-gray-100 bg-white/70 p-5 shadow-sm">
                      <div className="mb-2 text-center text-base font-medium text-blue-500">
                        React
                      </div>
                      <p className="text-center text-sm text-gray-600">
                        用于构建用户界面的 JavaScript 库
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-100 bg-white/70 p-5 shadow-sm">
                      <div className="mb-2 text-center text-base font-medium text-blue-500">
                        Vite
                      </div>
                      <p className="text-center text-sm text-gray-600">
                        现代前端构建工具
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-100 bg-white/70 p-5 shadow-sm">
                      <div className="mb-2 text-center text-base font-medium text-blue-500">
                        Tailwind CSS
                      </div>
                      <p className="text-center text-sm text-gray-600">
                        实用优先的 CSS 框架
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-100 bg-white/70 p-5 shadow-sm">
                      <div className="mb-2 text-center text-base font-medium text-blue-500">
                        Ionic
                      </div>
                      <p className="text-center text-sm text-gray-600">
                        跨平台移动应用开发框架
                      </p>
                    </div>
                  </div>
                </div>

                {/* 后端技术 */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">
                    后端技术
                  </h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-2xl border border-gray-100 bg-white/70 p-5 shadow-sm">
                      <div className="mb-2 text-center text-base font-medium text-blue-500">
                        tRPC
                      </div>
                      <p className="text-center text-sm text-gray-600">
                        端到端类型安全的 API
                      </p>
                    </div>
                    <div className="rounded-2xl border border-gray-100 bg-white/70 p-5 shadow-sm">
                      <div className="mb-2 text-center text-base font-medium text-blue-500">
                        Prisma
                      </div>
                      <p className="text-center text-sm text-gray-600">
                        现代数据库 ORM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 技术标签 */}
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-500">
                  React
                </span>
                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-500">
                  Vite
                </span>
                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-500">
                  Tailwind
                </span>
                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-500">
                  tRPC
                </span>
                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-500">
                  Prisma
                </span>
                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-medium text-blue-500">
                  Ionic
                </span>
              </div>
            </div>

            {/* 底部 */}
            <div className="text-center text-xs text-gray-400">
              <p>使用 T3 Stack 构建 · MIT 许可证</p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

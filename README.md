# T3 Native 应用

<div align="center">

**iOS 风格的现代全栈应用**

[开始使用](#开始使用) •
[技术栈](#技术栈) •
[功能特点](#功能特点) •
[项目结构](#项目结构) •
[开发指南](#开发指南)

</div>

---

## 关于项目

T3 Native 是一个集成最新前端和后端技术的现代化应用框架，采用 iOS 设计风格，提供简洁直观的用户体验。它基于 T3 Stack 构建，为开发者提供极致的开发体验。

## 技术栈

<div align="center">

### 前端技术

</div>

| 技术             | 描述                             |
| ---------------- | -------------------------------- |
| **React**        | 用于构建用户界面的 JavaScript 库 |
| **Ionic**        | 跨平台移动应用开发框架           |
| **Tailwind CSS** | 实用优先的 CSS 框架              |
| **Vite**         | 现代前端构建工具                 |

<div align="center">

### 后端技术

</div>

| 技术           | 描述                       |
| -------------- | -------------------------- |
| **tRPC**       | 端到端类型安全的 API       |
| **Prisma**     | 现代数据库 ORM             |
| **TypeScript** | 类型安全的 JavaScript 超集 |

## 功能特点

- 🍎 **iOS 设计风格** - 简洁优雅的设计语言，包含磨砂玻璃效果和圆角元素
- 📱 **响应式布局** - 完美支持移动端和桌面端
- 🔒 **类型安全** - 端到端类型安全的前后端通信
- ⚡ **快速开发** - 高效的开发体验和工作流
- 🛠 **现代工具链** - 使用最新的前端和后端技术

## 开始使用

### 前置要求

- Node.js 16.x 或更高版本
- pnpm 包管理器

### 安装

```bash
# 克隆项目
git clone <your-repo-url>

# 进入项目目录
cd t3-native

# 安装依赖
pnpm install
```

### 开发

```bash
# 启动开发服务器
pnpm dev
```

应用将在 http://localhost:5173 启动

### 构建

```bash
# 构建生产版本
pnpm build
```

## 项目结构

```
t3-native/
├── packages/
│   ├── client/          # 前端应用
│   │   ├── src/
│   │   │   ├── components/  # React 组件
│   │   │   ├── pages/      # 页面组件
│   │   │   └── utils/      # 工具函数
│   │   └── package.json
│   └── server/          # 后端服务
│       ├── src/
│       │   ├── router/     # tRPC 路由
│       │   └── lib/        # 工具库
│       └── package.json
└── package.json
```

## 开发指南

### 添加新页面

1. 在 `packages/client/src/pages` 目录下创建新的页面组件
2. 在 `App.tsx` 中添加路由配置
3. 确保页面组件保持 iOS 设计风格的一致性

### API 开发

1. 在 `packages/server/src/router` 目录下添加新的 tRPC 路由
2. 在 `router/index.ts` 中注册路由
3. 在前端使用 `trpc.yourRouter.yourProcedure.useQuery()` 调用 API

## 贡献指南

欢迎提交 Pull Request 和 Issue！

## 许可证

MIT

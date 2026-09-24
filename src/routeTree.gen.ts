/* eslint-disable */

// @ts-nocheck

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as HowItWorksRouteImport } from './routes/how-it-works'
import { Route as WorkRouteImport } from './routes/work'
import { Route as ServicesRouteImport } from './routes/services'
import { Route as FoundersRouteImport } from './routes/founders'
import { Route as LegalRouteImport } from './routes/legal'
import { Route as SupportRouteImport } from './routes/support'
import { Route as AssistantRouteImport } from './routes/assistant'

const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)
const HowItWorksRoute = HowItWorksRouteImport.update({ id: '/how-it-works', path: '/how-it-works', getParentRoute: () => rootRouteImport } as any)
const WorkRoute = WorkRouteImport.update({ id: '/work', path: '/work', getParentRoute: () => rootRouteImport } as any)
const ServicesRoute = ServicesRouteImport.update({ id: '/services', path: '/services', getParentRoute: () => rootRouteImport } as any)
const FoundersRoute = FoundersRouteImport.update({ id: '/founders', path: '/founders', getParentRoute: () => rootRouteImport } as any)
const LegalRoute = LegalRouteImport.update({ id: '/legal', path: '/legal', getParentRoute: () => rootRouteImport } as any)
const SupportRoute = SupportRouteImport.update({ id: '/support', path: '/support', getParentRoute: () => rootRouteImport } as any)
const AssistantRoute = AssistantRouteImport.update({ id: '/assistant', path: '/assistant', getParentRoute: () => rootRouteImport } as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/how-it-works': typeof HowItWorksRoute
  '/work': typeof WorkRoute
  '/services': typeof ServicesRoute
  '/founders': typeof FoundersRoute
  '/legal': typeof LegalRoute
  '/support': typeof SupportRoute
  '/assistant': typeof AssistantRoute
}
export interface FileRoutesByTo extends FileRoutesByFullPath {}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/how-it-works': typeof HowItWorksRoute
  '/work': typeof WorkRoute
  '/services': typeof ServicesRoute
  '/founders': typeof FoundersRoute
  '/legal': typeof LegalRoute
  '/support': typeof SupportRoute
  '/assistant': typeof AssistantRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: keyof FileRoutesByFullPath
  fileRoutesByTo: FileRoutesByTo
  id: keyof FileRoutesById
  fileRoutesById: FileRoutesById
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': { id: '/'; path: '/'; fullPath: '/'; preLoaderRoute: typeof IndexRouteImport; parentRoute: typeof rootRouteImport }
    '/how-it-works': { id: '/how-it-works'; path: '/how-it-works'; fullPath: '/how-it-works'; preLoaderRoute: typeof HowItWorksRouteImport; parentRoute: typeof rootRouteImport }
    '/work': { id: '/work'; path: '/work'; fullPath: '/work'; preLoaderRoute: typeof WorkRouteImport; parentRoute: typeof rootRouteImport }
    '/services': { id: '/services'; path: '/services'; fullPath: '/services'; preLoaderRoute: typeof ServicesRouteImport; parentRoute: typeof rootRouteImport }
    '/founders': { id: '/founders'; path: '/founders'; fullPath: '/founders'; preLoaderRoute: typeof FoundersRouteImport; parentRoute: typeof rootRouteImport }
    '/legal': { id: '/legal'; path: '/legal'; fullPath: '/legal'; preLoaderRoute: typeof LegalRouteImport; parentRoute: typeof rootRouteImport }
    '/support': { id: '/support'; path: '/support'; fullPath: '/support'; preLoaderRoute: typeof SupportRouteImport; parentRoute: typeof rootRouteImport }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute,
  HowItWorksRoute,
  WorkRoute,
  ServicesRoute,
  FoundersRoute,
  LegalRoute,
  SupportRoute,
  AssistantRoute,
}
export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
    config: Awaited<ReturnType<typeof startInstance.getOptions>>
  }
}

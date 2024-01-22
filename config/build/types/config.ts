export type TBuildMode = 'development' | 'production';
export interface TBuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface IBuildOptions {
  mode: TBuildMode
  paths: TBuildPaths
  __IS_DEV__: boolean
  PORT: number
  project: 'storybook' | 'frontend' | 'jest'
}

export interface IBuildEnv {
  mode: TBuildMode
  PORT: number
}

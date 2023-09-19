export type TBuildMode = 'development' | 'production';
export interface TBuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface IBuildOptions {
    mode: TBuildMode;
    paths: TBuildPaths;
    isDev: boolean;
    PORT: number;
}

export interface IBuildEnv {
    mode: TBuildMode;
    PORT: number;
}
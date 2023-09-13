export type TBuildMode = 'development' | 'production';
export interface TBuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface IBuildOptions {
    mode: TBuildMode;
    paths: TBuildPaths;
    isDev: boolean;
}
declare module '*.scss';
declare module '*.svg' {
  const svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  export default svg;
}
declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.jpeg' {
  const value: string;
  export default value;
}
declare module '*.gif' {
  const value: string;
  export default value;
}

declare const __IS_DEV__: boolean;

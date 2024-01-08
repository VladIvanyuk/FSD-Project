import { FC, lazy } from 'react';
import { ILoginFormProps } from './LoginForm';

export const LoginFormLazy = lazy<FC<ILoginFormProps>>(async () => await import('./LoginForm').then(module => ({ default: module.LoginForm })));

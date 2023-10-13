import React, { ErrorInfo } from 'react';
import { PageError } from 'widgets/PageError';
import cls from './ErrorBoundary.module.scss';

interface ErrorBoundaryProps {
    children?: React.ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError (): ErrorBoundaryState {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render (): React.ReactNode {
        if (this.state.hasError) {
        // You can render any custom fallback UI
            return <div className={cls.errorWrapper}><PageError /></div>;
        }

        return this.props.children;
    }
}

export { ErrorBoundary };

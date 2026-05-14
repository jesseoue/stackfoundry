"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode; fallback?: ReactNode };
type State = { error?: Error };

export class StackFoundryErrorBoundary extends Component<Props, State> {
  state: State = {};

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("stackfoundry.error_boundary", { error, info });
  }

  render() {
    if (this.state.error) {
      return this.props.fallback ?? <div role="alert">Something went wrong.</div>;
    }

    return this.props.children;
  }
}

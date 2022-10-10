import React from 'react'
import Hero from './Hero';
import { ErrorBoundary } from './ErrorBoundary';

const ErrorDemo = () => {
  return (
   <>
    <ErrorBoundary>
    <Hero name="react" />
  </ErrorBoundary>
  <ErrorBoundary>
    <Hero name="angular" />
  </ErrorBoundary>
  <ErrorBoundary>
    <Hero name="joker" />
  </ErrorBoundary>
  <ErrorBoundary>
    <Hero name="javascript" />
  </ErrorBoundary>
   </>
  )
}

export default ErrorDemo
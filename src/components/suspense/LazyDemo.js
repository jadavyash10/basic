import React, { lazy, Suspense } from 'react'
const Overviewlazy = lazy(() => import("../other/Overview.js"));
const Detaillazy = lazy(() => import("../other/Detail"));


const LazyDemo = () => {
  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
      <Overviewlazy />
      <Detaillazy />
    </Suspense>
  </div>
  )
}

export default LazyDemo
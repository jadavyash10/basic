import React, { Suspense } from 'react'
import Profiledetaile from './Profiledetaile'
import Profilepost from './Profilepost'

const SuspenseDemo = () => {
  return (
    <div>
    <Suspense fallback={<p>Loading user ....</p>}>
      <Profiledetaile/>
    </Suspense>
    <Suspense fallback={<p>Loading post ....</p>}>
      <Profilepost/>
    </Suspense>
  </div>
  )
}

export default SuspenseDemo
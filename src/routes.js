import React from 'react'
// Base
const RelationalDatabse = React.lazy(() => import('./views/base/relational-database/RelationalDatabase'))
const CleanCode = React.lazy(() => import('./views/base/clean-code/clean-code'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/base/relational-database', name: 'Relational Database', element: RelationalDatabse },
  { path: '/base/clean-code', name: 'Clean Code', element: CleanCode },
]

export default routes

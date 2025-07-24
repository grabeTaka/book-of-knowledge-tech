import React from 'react'
// Base
const RelationalDatabse = React.lazy(() => import('./views/base/relational-database/RelationalDatabase'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/base/relational-database', name: 'Relational Database', element: RelationalDatabse },
]

export default routes

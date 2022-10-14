import React from 'react';
import { Route, Routes } from 'react-router-dom'

const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dragons">
        <Route index element={<DragonList />} />
        <Route path=":id" element={<DragonItem />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Routes



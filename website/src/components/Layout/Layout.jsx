import React from 'react'
import TopBar from '../TopBar/TopBar'

function Layout(props) {
  return (
    <>
      <TopBar />

      {props.page}
    </>
  )
}

export default Layout

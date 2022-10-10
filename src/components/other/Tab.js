import React from 'react'
import { useMatch,NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

export default function Tab() {
    const tab1Match = useMatch('/tab1')
    const tab2Match = useMatch('/tab2')
    const tabMatch = useMatch('/:tab')
  
    return (
      <>
        <pre>
          <code>{JSON.stringify(tab1Match, null, 2)}</code>
        </pre>
        <pre>
          <code>{JSON.stringify(tab2Match, null, 2)}</code>
        </pre>
        <pre>
          <code>{JSON.stringify(tabMatch, null, 2)}</code>
        </pre>
      </>
    )
  }


  export function Nav() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/tab1">Tab 1</NavLink>
            <NavLink to="/tab2">Tab 2</NavLink>
          </nav>
        </header>
        <Outlet />
      </>
    )
  }
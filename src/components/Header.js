import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">TodoList</Link>
      <ul className="navbar-nav mr-auto flex-row">
        <li className="nav-item">
          <Link className="nav-link p-2" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link p-2" to="/todos">Todos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link p-2" to="/add-todo">Add todo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link p-2" to="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
  )
}

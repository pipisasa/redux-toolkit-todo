import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { Button, ButtonGroup } from 'reactstrap'
import Search from './Search';

export default function Header() {

  const location = useLocation();
  const search = new URLSearchParams(location.search);
  
  const history = useHistory();

  const handleChangeFilter = (query)=>{
    history.replace( location.pathname + query );
  }
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

      <Search/>
      
      <ButtonGroup className="ml-3">
        
        <Button 
          onClick={()=>handleChangeFilter("")}
          active={search.get("status") == null}
          color="primary"
        >All</Button>

        <Button 
          onClick={()=>handleChangeFilter("?status=true")}
          active={search.get("status") === "true"}
          color="primary"
        >Completed</Button>

        <Button 
          onClick={()=>handleChangeFilter("?status=false")}
          active={search.get("status") === "false"}
          color="primary"
        >On Progress</Button>

      </ButtonGroup>

    </nav>
  )
}

import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div >
      
      <Link to="/">Home</Link> 
      <Link to="/2">second</Link> 
      <Link to="/3">third</Link> 
    </div>
  )
}

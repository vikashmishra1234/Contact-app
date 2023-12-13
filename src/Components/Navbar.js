import React from 'react'


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success navbar-dark">
        <div className="container-fluid d-flex">
          <h2 className="navbar-brand" >Navbar</h2>


          
          <form className="d-flex "  role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success  bg-dark" type="submit">Search</button>
          </form>
        
      </div>
    </nav >
    </>
  )
}

export default Navbar
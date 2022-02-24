import React from 'react'
import Add from './Add'

function Nav({addMovie, setSearch}) {
  return (
    <div className="nav">
        <div className="nav-left">
            <img src ={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"} alt=""/>
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>My List</li>
            </ul>
        </div>

        <div className="nav-right">
            <Add addMovie={addMovie} />
            <i class="fa-solid fa-magnifying-glass"></i>   
            <input className="search" type="text" placeholder="Search" onChange={(e)=> { setSearch(e.target.value)}} />      
            <i class="fa-solid fa-user"></i>
        </div>
    </div>
  )
}

export default Nav
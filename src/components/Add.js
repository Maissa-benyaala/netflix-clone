import React, { useState } from 'react'

function Add({addMovie}) {
    const [show, setShow] = useState(false);
    const [movie, setMovie] = useState({
        name:"",
        description:"",
        posterurl:"",
        rate:0
    });

  return (
    <div className="Add-movie">
        <i class="fa-solid fa-plus" onClick={()=> setShow(true)} ></i>
            {show ? (
                <div className="add-movie-details">
                    <i class="fa-solid fa-xmark icon-2x" onClick={()=> setShow(false)} ></i>
                    <input type="text" placeholder="Add Movie Name" onChange={(e)=> setMovie({...movie, name:e.target.value})} />
                    <input type="text" placeholder="Add Movie Description" onChange={(e)=> setMovie({...movie, description:e.target.value})} />
                    <input type="text" placeholder="Add Movie Image" onChange={(e)=> setMovie({...movie, posterurl:e.target.value})} />
                    <input type="number" placeholder="Add Movie Rate" onChange={(e)=> setMovie({...movie, rate:e.target.value})} />
                    <button onClick={()=> addMovie(movie)}>Add Movie</button>
                </div>
            ): null}

    </div>
  )
}

export default Add
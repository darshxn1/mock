import React from 'react'
import './SearchStyle.css'
import Rating from "@mui/material/Rating";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

const Search = ({searchData, search}) => {
    // console.log(searchData)
  
    return (
        <div className="container ">

            {
                searchData && searchData.filter(e => e.state.toLowerCase().includes(search.toLowerCase()) || e.city.toLowerCase().includes(search.toLowerCase())).map((value, index)=>{
                    return(
                            <Link to={`/profile/${value.username}`} className="search-page-card" key={index}>
                            <img src="https://pixy.org/src/487/4870083.jpg" alt="Card Image" />
                            
                            <div className="search-page-card-body">
                                <h2>{value.name}</h2>
                                <p>{value.bio}</p>
                                <p>{value.city}, {value.state}</p>
                                <Rating
                                    name="half-rating-read"
                                    precision={0.5}
                                    value={value.rating}
                                    readOnly
                                    size="large"
                                />
                            </div>

                            </Link>
                    )
                })
            }
            
        </div>
    )
}

export default Search
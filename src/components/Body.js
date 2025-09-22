import RestaurantCard from "./RestaurantCard";
import swigywork from "../data/Swigywork.json";
import { useState } from "react";

const Body = () => {

    const[listOfRestaurants, setListOfRestaurants] = useState(swigywork);

    return (
        <div className="body">
            <div className="search">
                <input type="text" className="form-control" placeholder="Search..." />
                <button className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.avgRating > 4 
                    );
                    setListOfRestaurants(filteredList);
                }} 
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((item, index) => (
                        <RestaurantCard key={item.id} swigywork={item} />
                    ))
                }
               {/* <RestaurantCard swigywork={swigywork[0]} /> */}
            </div>
        </div>
    )
}

export default Body;
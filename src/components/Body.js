import RestaurantCard from "./RestaurantCard"; 
import swigywork from "../data/Swigywork.json"; 
import { useState } from "react"; 
import Shimmer from "./Shimmer"; 

const Body = () => { 
    // Load restaurants from local JSON file 
    
    const [listOfRestaurants, setListOfRestaurants] = useState(swigywork); 
    
    // Search input text 
    const [searchText, setSearchText] = useState(""); 
    
    return listOfRestaurants.length === 0 ? ( 
        <Shimmer /> ) : ( 
        <div className="body"> 
            <div className="search"> 
                <div> 
                    <input type="text" className="form-control" value={searchText} placeholder="Search..." onChange={(e) => setSearchText(e.target.value)} /> 
                    {/* Search Button */} 
                    <button onClick={() => { 
                        const filteredRestaurant = swigywork.filter((res) => 
                            res.name .toLowerCase() .includes(searchText.toLowerCase()) ); 
                        setListOfRestaurants(filteredRestaurant); }} 
                        >Search</button> 
                </div> 
                        
                {/* Top Rated Filter */} 
                <button className="filter-btn" onClick={() => { 
                    const filteredList = swigywork.filter( (res) => 
                        res.avgRating > 4 ); setListOfRestaurants(filteredList); }} 
                    > Top Rated Restaurants </button> 
            </div> 
            {/* Restaurant List */} 
            <div className="res-container"> 
                {listOfRestaurants.map((item) => ( 
                    <RestaurantCard key={item.id} swigywork={item} /> ))} 
            </div> 
        </div> 
    ); 
}; 
        
export default Body;
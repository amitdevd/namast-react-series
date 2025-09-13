import RestaurantCard from "./RestaurantCard";
import swigywork from "../data/Swigywork.json";

const Body = () => {

    

    return (
        <div className="body">
            <div className="search">
                <input type="text" className="form-control" placeholder="Search..." />
                <button className="filter-btn" 
                onClick={() => {
                    // console.log("button clicked")
                    swigywork = swigywork.filter(
                        (res) => res.avgRating > 4 
                    );
                    console.log(swigywork);
                }} 
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    swigywork.map((item, index) => (
                        <RestaurantCard key={item.id} swigywork={item} />
                    ))
                }
               {/* <RestaurantCard swigywork={swigywork[0]} /> */}
            </div>
        </div>
    )
}

export default Body;
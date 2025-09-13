
const RestaurantCard = (props) => {
    const { swigywork } = props;

    const { name, cuisines, avgRating, deliveryTime } = swigywork;

    return (
        <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
            <div className="res-img-container">
            <img src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg" alt="Restaurant" className="res-img img-fluid" />
            </div>    
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <span>{avgRating} ⭐</span>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    );
};

export default RestaurantCard;
import { RATING_ICON } from "../utils/constant";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, costForTwo, name, avgRating, cuisines, locality } = resData?.info;
  const { slaString } = resData?.info.sla;

  return (
    <div className="restaurant-card">
      <div className="res-img">
        <img
          alt={name}
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <div className="price">{costForTwo}</div>
      </div>

      <div className="resname">{name}</div>

      <div className="rating">
        {avgRating}
        <div className="rating-icon">
          <img
            alt="ratings"
            src={RATING_ICON}          />
        </div>
        <div className="time">{slaString}</div>
      </div>
      <div className="cuisines">{cuisines.join(", ")}</div>
      <div className="location">{locality}</div>
    </div>
  );
};
export default RestaurantCard;
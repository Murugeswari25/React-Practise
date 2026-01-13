import { CDN_URL } from "../utils/constant";

const FilterCuisines = (props) => {
  const { items } = props;
  return (
    <div>
        <div  className="filtered-cuis">
            <img alt="Briyani" src={CDN_URL + items?.imageId} />
        </div>
        <div></div>
    </div>
  );
};

export default FilterCuisines;

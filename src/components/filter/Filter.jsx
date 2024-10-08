import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Search results for <b>London</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option defaultChecked value="rent">
              Rent{" "}
            </option>
            <option value="buy">Buy</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option defaultChecked value="apartment">
              Apartment
            </option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">$Min Price</label>
          <input
            type="number"
            name="minPrice"
            min={500}
            max={10000000}
            placeholder="$500"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">$Max Price</label>
          <input
            type="number"
            name="maxPrice"
            min={500}
            max={10000000}
            placeholder="$10000000"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="number"
            id="bedroom"
            name="bedroom"
            min={0}
            max={6}
            placeholder="Any"
          />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;

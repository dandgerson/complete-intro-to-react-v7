import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState();
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location {location}
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

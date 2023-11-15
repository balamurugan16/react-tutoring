import { useEffect, useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function Searchbar() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");

  useEffect(() => {
    console.log("This component is rendered");
  }, []); // dependency array

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal:
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            {ANIMALS.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Searchbar;

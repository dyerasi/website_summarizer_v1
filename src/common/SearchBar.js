import { useState } from "react";

function SearchBar({onSubmit}){
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    /*
    default behavior for form submit is create network request to host with form labels and values attached as params
    -we do not want this reload
    */
    onSubmit(searchTerm);
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Url to Summarize</label>
        <input value={searchTerm} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
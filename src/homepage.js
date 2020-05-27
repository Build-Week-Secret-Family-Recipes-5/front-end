import React from "react";
import './App.css';

import Header from "./Header";
import SearchForm from "./SearchForm";

function HomePage(){

    const [search, setSearch] = useState("");
  
    const handleChange = event => {
    setSearch(event.target.value);
  };

    const result = /*"variable luke chose that filters the api"*/.filter(names => {
    return names.name.toLowerCase().includes(search);
  })
    return(
        <SearchForm value={search} onChange={handleChange} />
        {result.map((recipes) => {
            return <
        })}
        
        <Header />
        
    )
}

export default HomePage;
  
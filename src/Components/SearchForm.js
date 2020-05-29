import React from "react";

const SearchForm = props => {
    return (
    <section className="search-form">
        <input value={props.value} onChange={props.onChange} />
    </section>
    );
}

export default SearchForm;
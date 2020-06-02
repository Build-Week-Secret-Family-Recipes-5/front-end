import React from "react";
import styled from "styled-components";

const SearchBar = styled.input `
    background-color: #7681A5;
    text: #20C8DD;
    padding: 1%;
`;





const SearchForm = props => {
    return (
    <section className="search-form">
        <SearchBar value={props.value} placeHolder="Search" onChange={props.onChange} />
    </section>
    );
}

export default SearchForm;
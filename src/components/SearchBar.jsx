import React from "react";


export default function SearchBar(props) {
    const { onSearch } = props;
    return (
        <div>
            <input type="text" placeholder='Search' onChange={(elem) => onSearch(elem.target.value )} />
        </div>
    )
}
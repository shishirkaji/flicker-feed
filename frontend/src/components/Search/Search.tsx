import React, { useState } from "react";
import "./search.css";
interface SearchProps {
    onSearchTermChange: (value: string) => void;
}

const Search = (props: SearchProps) => {
    const [searchText, setSearchText] = useState("");

    const handleSearchTermUpdate = (
        event: React.FormEvent<HTMLInputElement>
    ) => {
        const newSearchTerm = event.currentTarget.value;
        props.onSearchTermChange(newSearchTerm);
        setSearchText(newSearchTerm);
    };
    return (
        <div className="input-contain">
            <input
                className="input-res"
                data-testid="search"
                name="searchTerm"
                placeholder="Search flixer"
                onChange={handleSearchTermUpdate}
                value={searchText}
            />
        </div>
    );
};

export default Search;

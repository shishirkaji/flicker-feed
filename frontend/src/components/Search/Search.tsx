import React, { useState } from "react";
import "./search.css";
interface SearchProps {
    onSearchTermChange: (value: string) => void;
    search?: string;
}

const Search = (props: SearchProps) => {
    const [searchText, setSearchText] = useState(props.search || "");

    const handleSearchTermUpdate = (
        event: React.FormEvent<HTMLInputElement>
    ) => {
        const newSearchTerm = event.currentTarget.value;
        props.onSearchTermChange(newSearchTerm);
        setSearchText(newSearchTerm);
    };
    return (
        <div className="search_wrapper">
            <div className="input-contain">
                <input
                    autoFocus
                    className="input-res"
                    data-testid="search"
                    name="searchTerm"
                    placeholder="Search flixer"
                    onChange={handleSearchTermUpdate}
                    value={searchText}
                />
            </div>
        </div>
    );
};

export default Search;

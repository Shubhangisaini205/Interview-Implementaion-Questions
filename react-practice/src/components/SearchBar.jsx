//  Throttling
import React, { useState } from "react";
import { useThrottle } from "../Hooks/useThrottle";
const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const throttledSearch = useThrottle(handleSearch, 1000);
    const [Tdata, setTData]= useState("")

    function handleSearch() {
        // Perform your search logic here using the searchQuery state
        console.log("Searching for:", searchQuery);
        setTData(searchQuery)
    }
    function handleChange(event) {
        setSearchQuery(event.target.value);
        throttledSearch(); // Throttle the search function
    }
    return (
        <>
            <h1>Throtling</h1>
            <input
                type="text"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Search..."
            />
            <h2>Throttling--{Tdata}</h2>

        </>
    );
};
export default SearchBar;
 
// Debouncing
// import React, { useState } from "react";
// import { useDebounce } from "../Hooks/useDebounce";
// const SearchBar = () => {
//     const [searchQuery, setSearchQuery] = useState("");
//     const DebounceddSearch = useDebounce(handleSearch, 1000);
//     const [Ddata, setDData]= useState("")

//     function handleSearch() {
//         // Perform your search logic here using the searchQuery state
//         console.log("Searching for:", searchQuery);
//         setDData(searchQuery)
//     }
//     function handleChange(event) {
//         setSearchQuery(event.target.value);
//         DebounceddSearch(); // Debounced the search function
//     }
//     return (
//         <>
//             <h1>Debouncing</h1>
//             <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={handleChange}
//                 placeholder="Search..."
//             />
//             <h2>Debouncing--{Ddata}</h2>

//         </>
//     );
// };
// export default SearchBar;
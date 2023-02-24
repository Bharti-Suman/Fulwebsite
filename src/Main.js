import React from 'react'

const Main = () => {
    const [searchInput, setSearchInput] = React.useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
  return (
    
   <>
        <h2 text-align="center">What Is The Web Built On? </h2>
        <p> Uncover the technology stack behind any website.
Use our tools for lead generation, market analysis and competitor research</p>
<div className="searchbar">
<div className="search"><input
   type="search"
   placeholder="Search here"
   onChange={handleChange} />
    </div>
    <div className="search button">
    <input type="submit" value="Search" />
      </div>
      </div>
      </>
    
    
  )
}

export default Main

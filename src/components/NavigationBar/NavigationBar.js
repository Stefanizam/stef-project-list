import React from "react";

export const NavigationBar = (props) => {

  return (
    <div className="input-group flex-nowrap">
      <input
        name="search"
        onChange={(e) => props.onSearch(e.target.value)}
        autoComplete="false"
        placeholder="Search..."
        className="w-100 px-2 form-control" />
      <button className="btn btn-secondary btn-sm flex-shrink-0">Search</button>
    </div>
  )
}
import React from "react";

export const NavigationBar = () => {
  return (
    <div className="input-group w-25 flex-nowrap">
      <input name="search" placeholder="Search..." className="w-100 px-2 form-control " />
      <button className="btn btn-secondary btn-sm flex-shrink-0">Search</button>
    </div>
  )
}
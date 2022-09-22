import React from "react";
import { search } from "../../../redux/apiCalling/action";
import { useDispatch } from "react-redux";
import { Input } from '@chakra-ui/react'
function Header() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <Input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              dispatch(search(event.target.value));
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Header;

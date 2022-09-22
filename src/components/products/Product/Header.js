import React from "react";
import { search } from "../../../redux/apiCalling/action";
import { useDispatch } from "react-redux";

function Header({ currentPosts }) {
  // const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
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

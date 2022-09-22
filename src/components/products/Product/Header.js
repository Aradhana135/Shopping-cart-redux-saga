import React from "react";
import { search } from "../../../redux/apiCalling/action";
import styles from "../../products/Product/Pagination.module.css";
import { useDispatch } from "react-redux";
import { Input } from '@chakra-ui/react'
function Header() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="templateContainer">
        <div >
          <Input className={styles.Search}
            id="SearchInput"
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

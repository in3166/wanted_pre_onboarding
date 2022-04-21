import React, { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  const [Items, setItems] = useState([
    "All Symbols",
    "BTCUSD.PERP",
    "ETHUSD.PERP",
    "BCHUSD.PERP",
    "10000DOEF.PERP",
  ]);

  const [FilteredItems, setFilteredItems] = useState(Items);
  const [selectedSymbol, setselectedSymbol] = useState(Items[0]);
  const [SearchText, setSearchText] = useState("");
  const [OpenList, setOpenList] = useState(false);

  const selectHandler = (value) => {
    setselectedSymbol(value);
    setSearchText("");
    setOpenList(false);
  };

  const changeOpenListHandler = () => {
    setOpenList((prev) => !prev);
    setSearchText("");
    setFilteredItems(Items);
  };

  const changeSearchTextHandler = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);
    setFilteredItems(
      Items.filter((value) => {
        if (value.toUpperCase().indexOf(inputText.toUpperCase()) === -1)
          return false;
        else return true;
      })
    );
  };

  return (
    <div>
      <div onClick={changeOpenListHandler} className={styles.symbol}>
        <label>{selectedSymbol}</label>
        <label>
          <i class="fa fa-caret-down icon"></i>
        </label>
      </div>
      {OpenList && (
        <>
          <ul className={styles.list}>
            <li className={styles.searchInput}>
              <label htmlFor="search">
                <i class="fa fa-search icon"></i>
              </label>
              <input
                type="text"
                id="search"
                value={SearchText}
                onChange={(e) => changeSearchTextHandler(e)}
                placeholder="Search Symbol"
              />
            </li>
            {FilteredItems.map((value, index) => (
              <li key={value} onClick={() => selectHandler(value)}>
                {value}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Dropdown;

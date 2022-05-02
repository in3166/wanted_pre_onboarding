import React, { useState } from "react";
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import styles from "./Dropdown.module.css";

const ITEMS = [
  "All Symbols",
  "BTCUSD.PERP",
  "ETHUSD.PERP",
  "BCHUSD.PERP",
  "10000DOEF.PERP",
];

const Dropdown = () => {
  const [FilteredItems, setFilteredItems] = useState(ITEMS);
  const [selectedSymbol, setselectedSymbol] = useState(ITEMS[0]);
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
    setFilteredItems(ITEMS);
  };

  const changeSearchTextHandler = (e) => {
    const inputText = e.currentTarget.value;
    setSearchText(inputText);
    setFilteredItems(
      ITEMS.filter((value) => {
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
          <AiFillCaretDown />
        </label>
      </div>

      <ul
        className={
          OpenList ? `${styles.list} ${styles.listActive}` : `${styles.list}`
        }
      >
        <li className={styles.searchInput}>
          <label htmlFor="search">
            <AiOutlineSearch size={22} />
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
    </div>
  );
};

export default Dropdown;

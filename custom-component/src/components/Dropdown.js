import { useEffect, useRef, useState } from 'react'
import { AiFillCaretDown, AiOutlineSearch } from 'react-icons/ai'
import styles from './Dropdown.module.scss'

const ITEMS = ['All Symbols', 'BTCUSD.PERP', 'ETHUSD.PERP', 'BCHUSD.PERP', '10000DOEF.PERP']

function useOutsideAlerter(ref, handleEvent) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleEvent(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, handleEvent])
}

function Dropdown() {
  const [FilteredItems, setFilteredItems] = useState(ITEMS)
  const [selectedSymbol, setselectedSymbol] = useState(ITEMS[0])
  const [SearchText, setSearchText] = useState('')
  const [OpenList, setOpenList] = useState(false)

  const dropdownRef = useRef(null)

  const selectHandler = (value) => {
    setselectedSymbol(value)
    setSearchText('')
    setOpenList(false)
  }

  const changeOpenListHandler = () => {
    setOpenList((prev) => !prev)
    setSearchText('')
    setFilteredItems(ITEMS)
  }

  const changeSearchTextHandler = (e) => {
    const inputText = e.currentTarget.value
    setSearchText(inputText)
    setFilteredItems(
      ITEMS.filter((value) => {
        if (value.toUpperCase().indexOf(inputText.toUpperCase()) === -1) return false
        return true
      })
    )
  }

  useOutsideAlerter(dropdownRef, setOpenList)

  return (
    <div ref={dropdownRef}>
      <button type='button' onClick={changeOpenListHandler} className={styles.symbol}>
        <label>{selectedSymbol}</label>
        <AiFillCaretDown />
      </button>

      <ul className={OpenList ? `${styles.list} ${styles.listActive}` : `${styles.list}`}>
        <li className={styles.searchInput}>
          <label htmlFor='search'>
            <AiOutlineSearch size={22} />
          </label>
          <input
            type='text'
            id='search'
            value={SearchText}
            onChange={changeSearchTextHandler}
            placeholder='Search Symbol'
          />
        </li>
        {FilteredItems.map((value, index) => (
          <li key={`itmes-${index}`}>
            <button type='button' className={styles.listButton} onClick={() => selectHandler(value)}>
              {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown

import { useState } from 'react'
import styles from './Tab.module.scss'
import Input from './Input'
import Toggle from './Toggle'
import Dropdown from './Dropdown'
import Slider from './Slider'
import { cx } from '../styles/index'

const MENU_LISTS = [
  ['Toggle', <Toggle />],
  ['Slider', <Slider />],
  ['Input', <Input />],
  ['Dropdown', <Dropdown />],
]

function Tab(props) {
  const [value, setValue] = useState(0)
  const [SlideStyle, setSlideStyle] = useState({})

  const changeTabHandler = (tabNumber) => {
    setValue(tabNumber)
    setSlideStyle({
      left: `${25 * tabNumber}%`,
    })
  }

  return (
    <section className={styles.wrapper}>
      <header>Tab Menu</header>
      <hr />
      <nav>
        <ul className={styles.tabMenu}>
          {MENU_LISTS.map((menu, index) => (
            <li key={`menu-${index + 1}`} className={cx({ [styles.tabMenuActive]: value === index })}>
              <button type='button' onClick={() => changeTabHandler(index)}>
                {menu[0]}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.slider}>
          <div className={styles.indicator} style={SlideStyle} />
        </div>
      </nav>

      <article className={styles.contentConatainer}>
        {MENU_LISTS.map((menu, index) => (
          <div
            key={`content-${index + 1}`}
            className={cx(styles.tabContents, { [styles.tabContentsHidden]: value !== index })}
          >
            {menu[1]}
          </div>
        ))}
      </article>
    </section>
  )
}

export default Tab

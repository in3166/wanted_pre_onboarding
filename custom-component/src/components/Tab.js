import React, { useState } from 'react'
import styles from './Tab.module.scss'
import Input from './Input'
import Toggle from './Toggle'
import Dropdown from './Dropdown'
import Slider from './Slider'
import { cx } from '../styles/index'

const menuList = [
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
          {menuList.map((content, index) => (
            <li key={`menu-${index}`} className={cx({ [styles.tabMenuActive]: value === index })}>
              <button type='button' onClick={() => changeTabHandler(index)}>
                {content[0]}
              </button>
            </li>
          ))}
        </ul>

        <div className={styles.slider}>
          <div className={styles.indicator} style={SlideStyle} />
        </div>
      </nav>
      <article className={styles.contentConatainer}>
        {menuList.map((content, index) => (
          <div
            key={`content-${index}`}
            className={cx(styles.tabContents, { [styles.tabContentsHidden]: value !== index })}
          >
            {content[1]}
          </div>
        ))}
      </article>
    </section>
  )
}

export default Tab

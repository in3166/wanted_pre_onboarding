import React, { useState } from 'react'
import styles from './Tab.module.scss'
import Input from './Input'
import Toggle from './Toggle'
import Dropdown from './Dropdown'
import Slider from './Slider'
import { cx } from '../styles/index'

const menuList = [<Toggle />, <Slider />, <Input />, <Dropdown />]

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
          <li className={value === 0 ? `${styles.tabMenuActive}` : ''}>
            <button type='button' onClick={() => changeTabHandler(0)}>
              Toggle
            </button>
          </li>
          <li className={value === 1 ? `${styles.tabMenuActive}` : ''}>
            <button type='button' onClick={() => changeTabHandler(1)}>
              Slider
            </button>
          </li>
          <li className={value === 2 ? `${styles.tabMenuActive}` : ''}>
            <button type='button' onClick={() => changeTabHandler(2)}>
              Input
            </button>
          </li>
          <li className={value === 3 ? `${styles.tabMenuActive}` : ''}>
            <button type='button' onClick={() => changeTabHandler(3)}>
              Dropdwon
            </button>
          </li>
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
            {content}
          </div>
        ))}
      </article>
    </section>
  )
}

export default Tab

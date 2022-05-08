import { LogoImage } from '../assets/svgs'
import Tab from '../components/Tab'
import styles from './Routes.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <header className='App-header'>
        <h3 />
      </header>

      <main className='App-main'>
        <Tab />
      </main>
    </div>
  )
}

export default App

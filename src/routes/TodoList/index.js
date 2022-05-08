import styles from './TodoList.module.scss'

function TodoList() {
  const handleAddClick = () => {}
  return (
    <div className={styles.todoList}>
      <div className={styles.centering}>
        <header>Hi.</header>
        <ul className={styles.task}>
          <li className={styles.task}>
            <input type='checkbox' />
            <p className={styles.title}>계란사기</p>
          </li>
        </ul>
        <button type='button' className={styles.add} onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  )
}

export default TodoList

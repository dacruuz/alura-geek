import styles from './Menu.module.css'
import logo from '../../assets/logo-alura-geek.svg'
import { Link } from 'react-router-dom'

export function Menu() {
  return (
    <header className={styles.container}>
      <Link to='/'>
        <img 
          src={logo} 
          alt="Logo Alura Geek" 
          className={styles.logo}
        />
      </Link>

      <input 
        type="text"
        placeholder='O que deseja encontrar?'
        className={styles.input}
      />

      <Link to='/login'>
        <button className={styles.button}>
          Login
        </button>
      </Link>
    </header>
  )
}
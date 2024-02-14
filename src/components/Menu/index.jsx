import styles from './Menu.module.css'
import logo from '../../assets/logo-alura-geek.svg'

export function Menu() {
  return (
    <header className={styles.container}>
      <img 
        src={logo} 
        alt="Logo Alura Geek" 
        className={styles.logo}
      />

      <input 
        type="text"
        placeholder='O que deseja encontrar?'
        className={styles.input}
      />

      <button className={styles.button}>Login</button>
    </header>
  )
}
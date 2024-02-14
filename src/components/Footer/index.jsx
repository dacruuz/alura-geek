import styles from './Footer.module.css'
import logo from '../../assets/logo-alura-geek.svg'
import { TextField, ThemeProvider, createTheme } from '@mui/material'

const Theme = createTheme({
  palette: {
    background: {
      default: "#ffffff"
    },
    overrides: {
      MuiTextField: {
        root: {
          backgroundColor: "#ffffff"
        }
      }
    }
    
  }
})

export function Footer() {
  const links = [
    "Quem somos nós",
    "Política de privacidade",
    "Programa fidelidade",
    "Nossas lojas",
    "Quero ser franqueado",
    "Anuncie aqui"
  ]

  return (
    <footer className={styles.container}>
      <section className={styles.section_form}>
        <img 
          src={logo} 
          alt="Logo Alura Geek"
          className={styles.logo}
        />

        <div className={styles.links}>
          {links.map(link => <p>{link}</p>)}
        </div>

        <ThemeProvider theme={Theme}>
          <form className={styles.form}>
            <h3>Fale conosco</h3>

            <TextField 
              id='filled-basic'
              label='Nome'
              backgroundColor='#ffffff'
            />

            <TextField 
              id='outlined-basic'
              label='Escreva uma mensagem'
              multiline
              rows={3}
            />

            <button>Enviar mensagem</button>
          </form>
        </ThemeProvider>
      </section>
      <section>
        <p>Desenvolvido por Gustavo Paulino</p>
        <p>2024</p>
      </section>
    </footer>
  )
}
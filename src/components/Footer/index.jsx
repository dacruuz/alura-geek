import styles from './Footer.module.css'
import logo from '../../assets/logo-alura-geek.svg'
import { Button, TextField } from '@mui/material'

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
      <section>
        <img 
          src={logo} 
          alt="Logo Alura Geek"
          className={styles.logo}
        />

        <div className={styles.links}>
          {links.map(link => <p>{link}</p>)}
        </div>

        <form className={styles.form}>
          <h3>Fale conosco</h3>

          <TextField 
            id='filled-basic'
            label='Nome'
            variant='filled'
            sx={{
              width: 560,
            }}
          />

          <TextField 
            id='filled-basic'
            label='Escreva uma mensagem'
            variant='filled'
            multiline
            rows={3}
          />

          <Button 
            variant='contained'
            sx={{
              height: '52px',
              width: '184px',
              borderRadius: '0',
              fontFamily: 'Raleway, sans-serif'
            }}
          >
            Enviar mensagem
          </Button>
        </form>
      </section>
      <section>
        <p>Desenvolvido por Gustavo Paulino</p>
        <p>2024</p>
      </section>
    </footer>
  )
}
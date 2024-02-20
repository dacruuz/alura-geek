import styles from './Banner.module.css'
import { Button } from "@mui/material"

export function Banner() {
  return (
    <section className={styles.container}>
      <h1>Dezembro Promocional</h1>
      <p>Produtos selecionados com 33% de desconto</p>
      <Button 
            variant='contained'
            sx={{
              height: '52px',
              width: '184px',
              borderRadius: '0',
              fontFamily: 'Raleway, sans-serif'
            }}
          >
        Ver consoles
      </Button>
    </section>
  )
}
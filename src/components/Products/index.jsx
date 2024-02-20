import { Link } from 'react-router-dom'
import styles from './Products.module.css'
import products from '../../../db.json'
import { ArrowForward } from '@mui/icons-material'

export function Products() {

  const themes = ["Star Wars", "Consoles", "Diversos"]

  return (
    <section className={styles.container}>
      {
        themes.map(theme => (
          <>
            <div>
              <h2>{theme}</h2>
              <Link className={styles.link}>
                Ver tudo
                <ArrowForward />
              </Link>
            </div>
            <section className={styles.produtos}>
              {
                products.map(product => {
                  if(product.theme === theme) {
                    return (

                      <figure key={product.id} className={styles.produto_infor}>
                        <img src={product.image} alt="" />
                        <span>{product.name}</span>
                        <span>R$ {product.price}</span>
                        <Link className={styles.link}>Ver produto</Link>
                      </figure>
                    )
                  }
                })
              }
            </section>
          </>
        ))
      }
    </section>
  )
}
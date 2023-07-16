import Image from "next/image"
import Link from "next/link"
import styles from '../../styles/guitarras.module.css'
import { useRouter } from "next/router"
import Layout from "../../components/layout"
import { useState } from "react"


export default function Producto({ guitarra, agregarCarrito }) {

  const [cantidad, setCantidad] = useState(0)
  
   
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert('Cantidad no valida');
      return
      
    }
    //Construir un objeto para almacenar la guitarra en el Localstorage
    const guitarraSeleccionada = {
        id: guitarra[0].id,
        imagen: imagen.data.attributes.url,
        nombre,
        precio,
        cantidad
    }
    //Le paso la guitarra seleccionada al context. agregarCarrito esta en _app.js
        agregarCarrito(guitarraSeleccionada)
  }

  return (
    <Layout
      title={`Guitarra ${nombre}`}
      description={`${descripcion}`}
      >
      <div>
        <div className={styles.guitarra} >
            <Image src={imagen.data.attributes.url} width={200} height={500} alt={`Imagen Guitarra ${nombre}`} />

            <div className={styles.contenido} >
                <h3>{ nombre }</h3>
                <p className={styles.descripcion} > { descripcion } </p>
                <p className={styles.precio} >$ {precio}</p>
                
                <form className={styles.formulario}
                  onSubmit={handleSubmit}
                >
                  <label htmlFor="cantidad">Cantidad: </label>

                  <select id="cantidad" 
                    onChange={e => setCantidad(+e.target.value)}
                    // El + convierte en numero el value
                  >
                    <option value='0'>-- Seleccione --</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                  </select>
                  <input
                    type="submit"
                    value='Agregar al Carrito'
                  />
                </form>
            </div>
        </div>
      </div>
    </Layout>
  )
};

export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json()
    
    const paths = data.map(guitarra => ({
      params: {
        url: guitarra.attributes.url
      }
    }))

    return {
    
        paths,
        fallback: false
    
    }
}

export async function getStaticProps({ params: { url }}) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const { data: guitarra } = await respuesta.json()
    console.log(guitarra)
    return {
        props: {
            guitarra
        }
    }
    
}
// export async function getServerSideProps({ query: { url }}) {
//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const { data: guitarra } = await respuesta.json()
//     console.log(guitarra)
//     return {
//         props: {
//             guitarra
//         }
//     }
    
// }

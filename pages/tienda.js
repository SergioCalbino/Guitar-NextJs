
import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import styles from '../styles/grid.module.css'

export default function Tienda({ guitarras }) {
  // console.log(guitarras)
  return (
    <>
      <Layout
        title={'Tienda Virtual'}
        description={'Tienda Virtual, venta de guitarras'}
      >
        <main className='contenedor' >
          <h2 className='heading'> Nuestra Coleccion </h2>

          <div className={styles.grid} >
          { guitarras?.map( guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ) ) }

          </div>

        </main>
      </Layout>

    </>

  )
};

// export async function getStaticProps() {
//     const resp =  await fetch(`${process.env.API_URL}/guitarras?populate=*`);
//     const { data: guitarras } = await resp.json();
//     console.log(guitarras)
 
//     return {
//         props: {
//           guitarras
//         },
//     }
// }
export async function getServerSideProps() {
    const resp =  await fetch(`${process.env.API_URL}/guitarras?populate=*`);
    const { data: guitarras } = await resp.json();
 
    return {
        props: {
          guitarras
        },
    }
}

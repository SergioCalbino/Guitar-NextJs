
import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/nosotros.module.css'


export default function nosotros() {
  return (
    <>
      <Layout
        title={'Nosotros'}
        description={'Sobre nosortos'}
      >
          <main className='contenedor' >
              <h2 className='heading' >Nosotros</h2>
              <div className={styles.contenido} >
                  <Image src='https://res.cloudinary.com/sergio-developer/image/upload/v1688841230/cursos_bg_75d366d33f.jpg' width={1000} height={800}  alt='Imagen sobre nosotros' />
                  <div>
                    <p>Bienvenido a nuestra página web especializada en la venta de guitarras. Aquí encontrarás una amplia selección de guitarras de alta calidad, diseñadas para satisfacer las necesidades de músicos de todos los niveles, desde principiantes hasta profesionales experimentados. Nuestra pasión por la música y nuestro compromiso con la excelencia se reflejan en cada guitarra que ofrecemos. Trabajamos con los principales fabricantes y marcas reconocidas para asegurarnos de proporcionar instrumentos duraderos y con un sonido excepcional. Explora nuestro catálogo en línea y descubre una variedad de estilos, desde clásicas y acústicas hasta eléctricas y de jazz. Con nuestro enfoque en la calidad, el servicio al cliente y la satisfacción, nos esforzamos por convertirnos en tu destino preferido para adquirir la guitarra de tus sueños.</p>
                    
                    <p>En nuestra página web, te ofrecemos más que solo guitarras. También contamos con una amplia gama de accesorios y equipos complementarios para ayudarte a llevar tu experiencia musical al siguiente nivel. Desde amplificadores y pedales de efectos hasta cuerdas, púas y estuches protectores, tenemos todo lo que necesitas para garantizar un sonido y un rendimiento óptimos. Además, nuestro equipo de expertos en música está listo para brindarte asesoramiento personalizado y recomendaciones basadas en tus preferencias y necesidades específicas. Ya sea que estés buscando la guitarra perfecta para tu primer concierto o deseas mejorar tu instrumento actual, estamos aquí para ayudarte a encontrar la opción adecuada. Explora nuestro sitio web, realiza tu pedido en línea y disfruta de la comodidad de recibir tu nueva guitarra directamente en tu puerta. ¡Prepárate para desatar tu pasión musical y deleitar a tus oídos con el sonido inconfundible de una guitarra excepcional!</p>
                  </div>

              </div>
          </main>
      </Layout>

    </>

  )
}

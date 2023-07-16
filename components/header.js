import Image from "next/image";
import Link from "next/link";
import styles from '../styles/header.module.css'
import { useRouter } from "next/router";

export default function Header() {

    const router = useRouter()
    // console.log(router)

    return (
      <>
        <header className={styles.header} >
            <div className={`contenedor ${styles.barra}`} >
                <Link href={'/'} >
                    <a>
                        <Image src='https://res.cloudinary.com/sergio-developer/image/upload/v1689035327/logo_sr4euy.svg' width={300} height={40} alt="Imagen Logotipo" />
                    </a>
                </Link>
                <nav className={styles.navegacion} >
                    <Link href='/'>
                        <a className={ router.pathname === '/' ? styles.active : '' } >
                            Ir a Inicio
                        </a>
                    </Link>
                    
                    <Link href='/nosotros'  >
                        <a className={ router.pathname === '/nosotros' ? styles.active : '' } >
                           Nosotros
                        </a>
                    </Link>
                    
                    <Link href='/blog'  >
                        <a className={ router.pathname === '/blog' ? styles.active : '' } >
                            Blog
                        </a>
                    </Link>
                    
                    <Link href='/tienda'  >
                        <a className={ router.pathname === '/tienda' ? styles.active : '' } >
                            Tienda
                        </a>
                    </Link>
                    <Link href='/carrito'  >
                        <a className={ router.pathname === '/carrito' ? styles.active : '' } >
                           <Image width={30} height={25} src='/img/carrito.png' alt="#"/>
                        </a>
                    </Link>
                </nav>
            </div>
        </header>
  
      </>
  
    )
  }
  
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import { useScrollPosition } from '../Hooks/scroolPosition';

const Navbar = () => {
    const [NavbarOpen, setNavbarOpen]= useState(false);
    const[windowDimension, setWindowDimension]=useState({
        width:window.innerWidth,
        heigth: window.innerHeight,
    });

    const detectDimension=()=>{
        setWindowDimension({
        width: window.innerWidth,
        heigth: window.innerHeight
        })
    }

    useEffect(() =>{
        window.addEventListener('resize', detectDimension)
        windowDimension.width> 800 && setNavbarOpen(false) 
       return()=>{
        removeEventListener('resize', detectDimension)
       }
    }, [windowDimension])


  const links=[
    {
        id:1,
        link: "Inicio",
        
    },
    {
        id:2,
        link:"Cursos",
    },
    {
        id:3,
        link:"Eventos",
    },
   
    
  ];
  
    const scrollPosition= useScrollPosition();
    return (
    <div 
        className={
            NavbarOpen 
            ? styles.NavOpen 
            : scrollPosition>0
            ? styles.navOnScroll
            : styles.Navbar
        }
    >
        {!NavbarOpen && <p className={styles.logo}>Wujuballons</p>}
        {!NavbarOpen && windowDimension.width <800 ? (
        <AiOutlineMenu  onClick={() => setNavbarOpen(!NavbarOpen)} size={25} />
         ): (windowDimension.width <800 &&(
         <AiOutlineClose 
         onClick={() => setNavbarOpen(!NavbarOpen)} 
         color='#ffffff'
         size={25}
         />
         )
        )}
        { NavbarOpen && (
            <ul className={styles.linksContainer}>
            {links.map((x) =>(
                <div>
                    <Link 
                    onClick={() => setNavbarOpen(false)}
                    to={x.link}
                    smooth
                    duration={500}
                    className={styles.navLink}
                    >
                        {x.link==="Eventos" ? "Eventos": x.link}
                        </Link>
                        <div className={styles.border}></div>
                </div>

            ))}
        </ul>
        )}
        {
            windowDimension.width > 800 && (
            <ul className={styles.linksContainer}>
            {links.map((x) =>(
                <div>
                    <Link 
                    onClick={() => setNavbarOpen(false)}
                    to={x.link}
                    smooth
                    duration={500}
                    className={styles.navLink}
                    >
                        {x.link==="Eventos" ? "Eventos": x.link}
                        </Link>
                        <div className={styles.border}></div>
                </div>

            ))}
            <Link onClick={() => setNavbarOpen(false)}
                    to="Usuario"
                    smooth
                    duration={500}
                    className={styles.usuarioLink}>Usuario</Link>
        </ul>
        )}
    </div>
  );
};

export default Navbar

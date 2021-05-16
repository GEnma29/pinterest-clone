import React from 'react'
import * as  StylesNavbar from './Navbar.module.css'
import { FaPinterest } from "@react-icons/all-files/fa/FaPinterest";
const Navbar = () => {
    return (
        <div className={StylesNavbar.container}>
            <div className={StylesNavbar.ContainerTitle}>
                <FaPinterest className={StylesNavbar.Logo}/>
                <h3 className={StylesNavbar.Title} >Pinterest</h3>
            </div>
            <div className={StylesNavbar.Navbar}>
                <div className={StylesNavbar.Items}>
                    <p className={StylesNavbar.Items}>Info</p>
                    <p className={StylesNavbar.Items}>Empresa</p>
                    <p className={StylesNavbar.Items}>Blog</p>
                </div>
                <div  >
                    <button className={StylesNavbar.Buttonesred}>Iniciar Sección</button>
                    <button className={StylesNavbar.Buttones}>Registarse</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar

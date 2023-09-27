import React from 'react'
import logo from '../../images/printlogo.svg'
import { FiShoppingCart } from "react-icons/Fi";
import { BsSearch } from "react-icons/Bs";
import hand from '../.././/images/hand.webp'

import styles from '../Printivo/Printivo.module.css'
import PrintivoCard from './PrintivoCard';
import Printshop from './Printshop';
import { Printivoimg } from './Printivoimg';
import Printivofeedback from './Printivofeedback';

function Printivo() {
    return (
        <>
            
            <div>
            <div style={{ backgroundColor: "#ece8d9" }}>
                <div className=''>
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container ">
                            <img src={logo} alt="" />
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end me-2" id="navbarSupportedContent" >
                                <ul className="navbar-nav   mb-2 mb-lg-0 p-3 " style={{ alignItems: "center" }}>
                                    <li className="nav-item text-end ">
                                        <a className="nav-link fw-bold" style={{ color: "#384a62" }} href="#">All Product </a>
                                    </li>

                                    <li className="nav-item ms-3">
                                        <a className="nav-link fw-bold" style={{ color: "#384a62" }} href="#">Become a Reseller </a>
                                    </li>

                                    <li className="nav-item ms-3">
                                        <a className="nav-link fw-bold" style={{ color: "#384a62" }} href="#">Merch Store </a>
                                    </li>

                                    <li className="nav-item ms-3">
                                        <a className="nav-link fw-bold" style={{ color: "#384a62" }} href="#">Market Place </a>
                                    </li>

                                    <li className="nav-item ms-3">
                                        <a className="nav-link fw-bold" style={{ color: "#db9693" }} href="#">Sign in</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link fw-bold" style={{ color: "#384a62" }} href="#">Create Account</a>
                                    </li>

                                    <li className="nav-item ms-3">
                                        < FiShoppingCart />
                                    </li>





                                </ul>

                            </div>
                        </div>
                    </nav>

                    <div className='container'>
                    <div className='row mt-5 '>
                        <div className='col-7'>
                            <h1 className={styles.quality}>Quality Prints</h1>
                            <h3 className={styles.shipped}>Shipped to your doorstep</h3>
                            <p className={styles.whatis}>What will you like to print today? </p>
                            
                            <div className={styles.bgd}>
                                <form action="" className={styles.form}>
                                    <input type="text"placeholder='Search for Business cards, T-shirts, Mugs, etc' className={styles.inputt} />
                                    <button className={styles.inpbut}><BsSearch/></button> 
                                </form>
                            </div>
                            

                        </div>

                        <div className='col-5'>
                            <div className=''>
                                {/* <img src={hand} alt="" className={styles.handcard} /> */}
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
                      
            </div>
            </div>
            <div className={styles.pkn}>
                       <h4 className={styles.stk}>
                        Stickers Promo <span className={styles.stkp}>Shop Now</span>
                        </h4>     
                </div>
                <PrintivoCard/>
                <Printshop/>
                <Printivoimg/>
                <Printivofeedback/>
        </>

        
    )
    
}


export default Printivo
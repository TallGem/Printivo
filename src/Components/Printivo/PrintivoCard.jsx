import React from 'react'
import Bizcard from '../../images/businesscard.png'
import styles from '../Printivo/PrintivoCard.module.css'
import flyers from '../../images/flyers.png'
import roundsticker from '../../images/roundsticker.png'
import mug from '../../images/mug.png'
import postcard from '../../images/postcard.jpg'
import rollup from '../../images/big rollup banner.png'
import a2poster from '..//../images/A2 poster.png'
import trifold from '../../images/trifold.png'
import idcard from '../../images/Idcards.png'
import tshirt from '../../images/tshirt.png'
import paperbag from '../../images/paperbag.png'
import courierbag from '../../images/courierbag.jpeg'
import greetingcard from '..//../images/greetingscard.png'
import sticker from '../../images/stickers.png'


function PrintivoCard() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h3 className={styles.allprod} >Popular Products </h3>
                    </div>

                    <div className='col-6'>
                        <h3 className={styles.seeall}>See All Products </h3>
                    </div>
                </div>
            </div>

            <div className='container mb-4'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6  col-lg-3 col-xl-3 col-xxl-3' style={{height: '27rem',}}>
                        <div className="card" style={{height: '100%'}}>
                            <img src={Bizcard} className="card-img-top h-50" alt="..." />
                            <div className="card-body mt-2">
                                <h5 className={styles.cardtitle}>Two sided Business Cards</h5>
                                <p className={styles.cardtext}>STARTING AT</p>
                                <p className={styles.cardpg}>₦9700 <span className={styles.cardpg2}>per 100</span></p>

                                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#d77f81", border: "none" }}>Browse Two Sided Bu..</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12  col-md-6 col-lg-3 col-xl-3 col-xxl-3'style={{height: '27rem',}}  >
                        <div className="card " style={{ height: "100%" }}>
                            <img src={flyers} className="card-img-top h-50" alt="..." />
                            <div className="card-body">
                                <h5 className={styles.cardtitle}>A5 Flyers(Single Sided)</h5>
                                <p className={styles.cardtext}>STARTING AT</p>
                                <p className={styles.cardpg}>₦16500 <span className={styles.cardpg2}>per 100</span></p>

                                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#d77f81", border: "none" }}>Browse A5 Flyers (S..)</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3'style={{height: '27rem',}} >
                        <div className="card" style={{ height: "100%" }}>
                            <img src={roundsticker} className="card-img-top h-50" alt="..." />
                            <div className="card-body">
                                <h5 className={styles.cardtitle}>Round Stickers (3.5" Diameter)</h5>
                                <p className={styles.cardtext}>STARTING AT</p>
                                <p className={styles.cardpg}>₦10900 <span className={styles.cardpg2}>per 100</span></p>

                                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#d77f81", border: "none" }}>Browse Round Sticke..</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12  col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                        <div className="card" style={{ height: "100%" }}>
                            <img src={mug} className="card-img-top h-50"  alt="..." />
                            <div className="card-body">
                                <h5 className={styles.cardtitle}>Simple Mugs</h5>
                                <p className={styles.cardtext}>STARTING AT</p>
                                <p className={styles.cardpg}>₦3000<span className={styles.cardpg2}>per 1</span></p>

                                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#d77f81", border: "none" }}>Browse Simple Mugs </a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            <div className='container mb-4'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6  col-lg-3 col-xl-3 col-xxl-3' style={{height: '27rem',}}>
                        <div className="card" style={{height: '100%'}}>
                            <img src={postcard} className="card-img-top h-50" alt="..." />
                            <div className="card-body mt-2">
                                <h5 className={styles.cardtitle}>Postcards(A6)</h5>
                                <p className={styles.cardtext}>STARTING AT</p>
                                <p className={styles.cardpg}>₦14200 <span className={styles.cardpg2}>per 50</span></p>

                                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#d77f81", border: "none" }}>Browse Postcards(A..)</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12  col-md-6 col-lg-3 col-xl-3 col-xxl-3'style={{height: '27rem',}}  >
                        <div className="card " style={{ height: "100%" }}>
                            <img src={rollup} className="card-img-top h-50" alt="..." />
                            <div className="card-body">
                                <h5 className={styles.cardtitle}>Rollup Banners (Big Case)</h5>
                                <p className={styles.cardtext}>STARTING AT</p>
                                <p className={styles.cardpg}>₦35200 <span className={styles.cardpg2}>per 1</span></p>

                                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#d77f81", border: "none" }}>Browse Rollup Ban..</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3'style={{height: '27rem',}} >
                        <div className="card" style={{ height: "100%" }}>
                            <img src={a2poster} className="card-img-top h-50" alt="..." />
                            <div className="card-body">
                                <h5 className={styles.cardtitle}>A2 Posters</h5>
                                <p className={styles.cardtext}>STARTING AT</p>
                                <p className={styles.cardpg}>₦45000 <span className={styles.cardpg2}>per 100</span></p>

                                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#d77f81", border: "none" }}>Browse A2 Posters</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12  col-md-6 col-lg-3 col-xl-3 col-xxl-3'>
                        <div className="card" style={{ height: "100%" }}>
                            <img src={trifold} className="card-img-top h-50"  alt="..." />
                            <div className="card-body">
                                <h5 className={styles.cardtitle}>Trifold Brochures</h5>
                                <p className={styles.cardtext}>STARTING AT</p>
                                <p className={styles.cardpg}>₦30400 <span className={styles.cardpg2}>per 100</span></p>

                                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#d77f81", border: "none" }}>Browse Trifol Broc..</a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6  col-lg-3 col-xl-3 col-xxl-3' style={{height: '27rem',}}>
                        <div className="card" style={{height: '100%'}}>
                            <img src={idcard} className="card-img-top h-50" alt="..." />
                            <div className="card-body mt-2">
                                <h5 className={styles.cardtitle}>Landscapes ID Cards</h5>
                                <p className={styles.cardtext}>STARTING AT</p>
                                <p className={styles.cardpg}>₦2000 <span className={styles.cardpg2}>per 1</span></p>

                                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#d77f81", border: "none" }}>Browse Landsape ID...</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12  col-md-6 col-lg-3 col-xl-3 col-xxl-3'style={{height: '27rem',}}  >
                        <div className="card " style={{ height: "100%" }}>
                            <img src={tshirt} className="card-img-top h-50" alt="..." />
                            <div className="card-body">
                                <h5 className={styles.cardtitle}>Off White Tshirts</h5>
                                <p className={styles.cardtext}>STARTING AT</p>
                                <p className={styles.cardpg}>₦3800<span className={styles.cardpg2}>per 1</span></p>

                                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#d77f81", border: "none" }}>Browse Off White T-...</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3'style={{height: '27rem',}} >
                        <div className="card" style={{ height: "100%" }}>
                            <img src={paperbag} className="card-img-top h-50" alt="..." />
                            <div className="card-body">
                                <h5 className={styles.cardtitle}>A4 Branded Paper Bags</h5>
                                <p className={styles.cardtext}>STARTING AT</p>
                                <p className={styles.cardpg}>₦67000 <span className={styles.cardpg2}>per 100</span></p>

                                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#d77f81", border: "none" }}>Browse A4 Branded P...</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12  col-md-6 col-lg-3 col-xl-3 col-xxl-3'style={{height: '27rem',}} >
                        <div className="card" style={{ height: "100%" }}>
                            <img src={courierbag} className="card-img-top h-50"  alt="..." />
                            <div className="card-body">
                                <h5 className={styles.cardtitle}>A4 Courier Bags...</h5>
                                <p className={styles.cardtext}>STARTING AT</p>
                                <p className={styles.cardpg}>₦17600 <span className={styles.cardpg2}>per 100</span></p>

                                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#d77f81", border: "none" }}>Browse A4 Courier B..</a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            <div className='container mt-5 pt-5'>
                <div className='row'>
                    <div className='col-6'>
                        <h3 className={styles.allprod} >Popular Categories </h3>
                    </div>

                    <div className='col-6'>
                        <h3 className={styles.seeall}>See All Categories </h3>
                    </div>
                </div>
            </div>

            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-6  col-lg-3 col-xl-3 col-xxl-3' style={{height: '27rem',}}>
                        <div className="card" style={{height: '100%'}}>
                            <img src={greetingcard} className="card-img-top h-50" alt="..." />
                            <div className="card-body mt-2">
                                <h5 className={styles.cardtitle}>Greeting Cards</h5>
                                <p className={styles.cardtext}>STARTING AT</p>
                                <p className={styles.cardpg}>₦19000 <span className={styles.cardpg2}>per 50</span></p>

                                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#d77f81", border: "none" }}>Browse Greeting Car...</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12  col-md-6 col-lg-3 col-xl-3 col-xxl-3'style={{height: '27rem',}}  >
                        <div className="card " style={{ height: "100%" }}>
                            <img src={sticker} className="card-img-top h-50" alt="..." />
                            <div className="card-body">
                                <h5 className={styles.cardtitle}>Stickers</h5>
                                <p className={styles.cardtext}>STARTING AT</p>
                                <p className={styles.cardpg}>₦5400<span className={styles.cardpg2}>per 75</span></p>

                                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#d77f81", border: "none" }}>Browse Stickers</a>
                            </div>
                        </div>
                    </div>

                  
                    

                </div>

            </div>
        </>



    )
}

export default PrintivoCard
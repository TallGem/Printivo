import React from 'react'
import styles from '../Printivo/PrintivoCard.module.css'
import bird from '../../images/bird.svg'

const Printivofeedback = () => {
    return (
        <>
            <section className={styles.bgbird}>
                <div className='container '>
                    <h1 className={styles.wbg}>What Customers Say About Us 🙌🏾</h1>
                    <div className='row pb-5'>

                        <div className='col-4'>
                            <div class="card" style={{ width: "22rem" }}>
                                <div class="card-body">
                                    <div className='row'>
                                        <div className='col-1'>
                                            <img src={bird} alt="" style={{ width: "18px" }} />
                                        </div>
                                        <div className='col-11'>
                                            <p className='fw-bold'>
                                                Amina Ebele <span className={styles.spa}>@DeliciousAmina</span>
                                            </p>
                                            <p style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                                                I am now the unofficial <span className={styles.spa}> @Printivo </span>ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='col-4'>
                            <div class="card" style={{ width: "22rem" }}>
                                <div class="card-body">
                                    <div className='row'>
                                        <div className='col-1'>
                                            <img src={bird} alt="" style={{ width: "18px" }} />
                                        </div>
                                        <div className='col-11'>
                                            <p className='fw-bold'>
                                                Oluwatosin <span className={styles.spa}>@tosingirlfx</span>
                                            </p>
                                            <p style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                                                <span className={styles.spa}> @Printivo </span>delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-4'>
                            <div class="card" style={{ width: "22rem" }}>
                                <div class="card-body">
                                    <div className='row'>
                                        <div className='col-1'>
                                            <img src={bird} alt="" style={{ width: "18px" }} />
                                        </div>
                                        <div className='col-11'>
                                            <p className='fw-bold'>
                                                Oluwatosin <span className={styles.spa}>@</span>olgablark
                                            </p>
                                            <p style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                                                These guys <span className={styles.spa}> @Printivo </span>are really awesome and affordable. Excellent customer service and delivery too. Thank you.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Printivofeedback
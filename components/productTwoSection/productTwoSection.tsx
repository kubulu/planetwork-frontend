import React from "react";
import styles from './productTwoSection.module.scss'
export default function ProductTwoSection() {
    return (
        <div className={`${styles.productTwoSection}`}>
            <div className={`container`}>
                <div className={`row justify-content-center align-items-center`}>
                    <div className={`col-md-6`}>
                        <div className={`${styles.image}`}>
                            <img src={`/images/about.png`} />
                        </div>

                    </div>
                    <div className={`col-md-6`}>
                        <div className={`${styles.content}`}>
                            <h2>HD Wi-Fi Home Camera</h2>
                            <h5>Model Number - HR2 3293</h5>
                            <p>We pride ourselves on going above and beyond for the customer on every project we take on. Whether you’re looking for a surveillance camera installation or an access control system installation, it’s important that the security system installer you choose has the experience and vision to help you achieve your security goals. Our commercial security services are about more than surveillance system installation or alarm system</p>

                            <div className="d-grid gap-4 d-md-block">
                                <button className="btn btn-primary me-3" type="button" >Enquire Now</button>
                                <button className="btn btn-primary" type="button">Download Broucher</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
import React from "react";
import styles from './productTwoAlternateSection.module.scss'
export default function ProductTwoAlternateSection() {
    return (
        <div className={`${styles.productTwoAlternateSection}`}>
            <div className={`container`}>
                <div className={`row mb-5 align-items-center justify-content-center`}>
                    <div className={`col-md-6`}>
                      <p>We pride ourselves on going above and beyond for the customer on every project we take on. Whether you’re looking for a surveillance camera installation or an access control system installation, it’s important that the security system installer you choose has the experience and vision to help you achieve your security goals. Our commercial security services are about more than surveillance system installation or alarm system</p>
                    </div>
                    <div className={`col-md-6`}>
                        <img src={`/images/img-1.png`} />
                    </div>
                </div>
                <div className={`row align-items-center justify-content-center`}>
                    <div className={`col-md-6`}>
                        <img src={`/images/img-2.png`} />
                    </div>
                    <div className={`col-md-6`}>
                        <p>We pride ourselves on going above and beyond for the customer on every project we take on. Whether you’re looking for a surveillance camera installation or an access control system installation, it’s important that the security system installer you choose has the experience and vision to help you achieve your security goals. Our commercial security services are about more than surveillance system installation or alarm system</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
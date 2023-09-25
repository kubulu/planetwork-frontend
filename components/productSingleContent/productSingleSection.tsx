import React from "react";
import styles from './productSingleSection.module.scss'
export default function ProductSingleSection() {
    return (
        <div className={`${styles.productSingleSection}`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-8 mx-auto`}>
                        <h2>Re-deployable camera solutions for the CCTV industry</h2>
                        <p> iC2 Distribution is a value-added manufacturer of cost effective, enhanced functionality RDC units. Low-cost POD cameras support rapid relocation and 4G/Wi-Fi make them highly versatile</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
import React from "react";
import styles from './relatedProducts.module.scss'
export default function RelatedProducts() {
    return (
        <div className={`${styles.relatedProduct}`}>
            <div className={`container`}>
                <div className={`row mb-5 align-items-center justify-content-center`}>
                    <h2>Related Products</h2>
                </div>
                <div className={`row pb-4`}>
                    <div className={`col-md-2`}>
                        <div className={`${styles.img}`}>
                            <img src={`../../images/cctv.png`} />
                        </div>
                        <div>
                            <div className={`${styles.content}`}>
                                <h2>HD Wi-Fi Home Camera</h2>
                                <p>Rs. 1389</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-2`}>
                        <div className={`${styles.img}`}>
                            <img src={`../../images/cctv.png`} />
                        </div>
                        <div>
                            <div className={`${styles.content}`}>
                                <h2>HD Wi-Fi Home Camera</h2>
                                <p>Rs. 1389</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-2`}>
                        <div className={`${styles.img}`}>
                            <img src={`../../images/cctv.png`} />
                        </div>
                        <div>
                            <div className={`${styles.content}`}>
                                <h2>HD Wi-Fi Home Camera</h2>
                                <p>Rs. 1389</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-2`}>
                        <div className={`${styles.img}`}>
                            <img src={`../../images/cctv.png`} />
                        </div>
                        <div>
                            <div className={`${styles.content}`}>
                                <h2>HD Wi-Fi Home Camera</h2>
                                <p>Rs. 1389</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-2`}>
                        <div className={`${styles.img}`}>
                            <img src={`../../images/cctv.png`} />
                        </div>
                        <div>
                            <div className={`${styles.content}`}>
                                <h2>HD Wi-Fi Home Camera</h2>
                                <p>Rs. 1389</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-2`}>
                        <div className={`${styles.img}`}>
                            <img src={`../../images/cctv.png`} />
                        </div>
                        <div>
                            <div className={`${styles.content}`}>
                                <h2>HD Wi-Fi Home Camera</h2>
                                <p>Rs. 1389</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
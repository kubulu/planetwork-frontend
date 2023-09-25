import React from "react";
import styles from './breadcrumb.module.scss'
export default function Breadcrumb() {
    return (
        <div>
            <div className={`${styles.breadcrumb}`}>
               <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-md-12`}>
                            <p>Home / Products / CCTV / HD Wi-Fi Home Camera</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}
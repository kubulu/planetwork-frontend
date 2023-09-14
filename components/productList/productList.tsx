import React from "react";
import styles from './productList.module.scss'
import Filter from "../filter/filter";
import ProductContent from "../productContent/productContent";


export default function ProductList() {

    return (
        <div className={`${styles.productContainer}`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-md-3`}>
                        <Filter/>
                    </div>
                    <div className={`col-md-9`}>
                        <ProductContent/>
                    </div>
                </div>
            </div>

        </div>
    )
}
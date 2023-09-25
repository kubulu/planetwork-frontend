import '../styles/global.scss'
import MainNav from "../components/mainNav/mainNav";
import FooterSection from "../components/footerSection/footerSection";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
import ProductTwoSection from "../components/productTwoSection/productTwoSection";
import ProductSingleSection from "../components/productSingleContent/productSingleSection";
import ProductTwoAlternateSection from "../components/productTwoAlternateSection/productTwoAlternateSection";
import RelatedProducts from "../components/relaterProducts/relatedProducts";

export default function Products() {
    return (
        <div>
            <MainNav/>
            <Breadcrumb/>
            <ProductTwoSection/>
            <ProductSingleSection/>
            <ProductTwoAlternateSection/>
            <RelatedProducts/>
            <FooterSection/>
        </div>
    )
}

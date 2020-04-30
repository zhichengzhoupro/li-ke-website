import React from "react";
import ProductHero from "../../onepirate/modules/views/ProductHero";
import ProductValues from "../../onepirate/modules/views/ProductValues";
import ProductCategories from "../../onepirate/modules/views/ProductCategories";
import ProductHowItWorks from "../../onepirate/modules/views/ProductHowItWorks";
import ProductCTA from "../../onepirate/modules/views/ProductCTA";
import ProductSmokingHero from "../../onepirate/modules/views/ProductSmokingHero";

const Home = () => {
    return(
        <React.Fragment>
            <ProductHero />
            <ProductValues />
            <ProductCategories />
            <ProductHowItWorks />
            <ProductCTA />
            <ProductSmokingHero />
        </React.Fragment>
    )
};

export default Home;
import React from "react";
import AppAppBar from "../../onepirate/modules/views/AppAppBar";
import ProductHero from "../../onepirate/modules/views/ProductHero";
import ProductValues from "../../onepirate/modules/views/ProductValues";
import ProductCategories from "../../onepirate/modules/views/ProductCategories";
import ProductHowItWorks from "../../onepirate/modules/views/ProductHowItWorks";
import ProductCTA from "../../onepirate/modules/views/ProductCTA";
import ProductSmokingHero from "../../onepirate/modules/views/ProductSmokingHero";
import AppFooter from "../../onepirate/modules/views/AppFooter";

const Home = () => {
    return(
        <React.Fragment>
            <AppAppBar />
            <ProductHero />
            <ProductValues />
            <ProductCategories />
            <ProductHowItWorks />
            <ProductCTA />
            <ProductSmokingHero />
            <AppFooter />
        </React.Fragment>
    )
};

export default Home;
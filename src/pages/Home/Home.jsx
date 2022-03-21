import React from "react";
import Carrossel from "../../Components/Carrossel/Carrossel";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Homecards from "../../Components/Homecards/Homecards";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Homenumeros from "../../Components/Homenumeros/Homenumeros";


export default () => {
    return(
        <Header />,
        <h1>home page</h1>,
        <Carrossel />,
        <Homecards />,
        <Homenumeros />,
        <Newsletter />,
        <Footer />
    );
}
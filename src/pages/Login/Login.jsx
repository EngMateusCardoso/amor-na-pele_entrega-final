import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Loginform from "../../Components/Loginform/Loginform";

export default () => {
    return(
        <Header />,
        <Loginform />,
        <Newsletter />,
        <Footer />
    );
}
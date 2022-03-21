import React from "react";
import Carrossel from "../../Components/Carrossel/Carrossel";
import Homecards from "../../Components/Homecards/Homecards";
import Homenumeros from "../../Components/Homenumeros/Homenumeros";


export default () => {
    return(
        <>
            <h1>home page</h1>
            <Carrossel />
            <Homecards />
            <Homenumeros />
        </>
    );
}
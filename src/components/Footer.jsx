import React from "react";
function Footer(){
    var date=new Date();
    var year=date.getFullYear();
    return(
        <footer>copyright@{year}</footer>
    )
}
export default Footer;
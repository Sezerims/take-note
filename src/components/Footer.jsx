import React from "react";

const Footer = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    return (
        <footer>
            <p>İsmail Sezer Bullalıoğlu &copy; {currentYear}</p>
        </footer>
    );
}

export default Footer;
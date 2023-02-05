import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";


function Footer () {
    return (
        <footer className="footer">
            <p className="copyright">Copyright 2023</p>
            <p>
                <a href="https://www.chingu.io/">
                    <img className="img-one" src="https://pbs.twimg.com/profile_images/873856169017843712/Ue26CONG_400x400.jpg" alt="Chingu logo" target="_blank"></img>
                </a>
                <a href="https://github.com/chingu-voyages/v42-geckos-team-12">
                    <img className="img-two" src="https://cdn-icons-png.flaticon.com/512/2111/2111612.png" alt="GitHub logo" target="_blank"></img>
                </a>
            </p>
        </footer>
    )
}

export default Footer();
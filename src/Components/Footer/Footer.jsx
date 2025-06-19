import React from "react";
import "./Footer.css";
import FooterLogoAndSocialNetworks from "./FooterLogoAndSocialNetworks/FooterLogoAndSocialNetworks";
import FooterExplore from "./FooterExplore/FooterExplore";
import FooterContact from "./FooterContact/FooterContact";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="contentContainer">
        <FooterLogoAndSocialNetworks />
        <FooterExplore />
        <FooterContact />
      </div>
      <div className="copyright">
        <span>Copyright</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
            stroke="#FDFBF8"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.0001 7C11.5201 6.4 10.9301 6 10.0001 6C5.82809 6 5.82809 14 10.0001 14C10.9301 14 11.5201 13.6 12.0001 13"
            stroke="#FDFBF8"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>2025</span>
      </div>
    </div>
  );
}

export default Footer;

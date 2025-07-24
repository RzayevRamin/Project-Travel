import React from "react";
import "./Contact.css";
import foundersPhoto from "../../../assets/Teams/RaminAndGoychek.jpg";
import managerPhoto from "../../../assets/Teams/JavidanMehtiyev.jpg";
import lawyerPhoto from "../../../assets/Teams/ZaurAbdullayev.jpg";
import dogPhoto from "../../../assets/Teams/Lilith.jpg";
import transportManagerPhoto from "../../../assets/Teams/SamedSheikhzade.jpg";


function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactsAndLocation">
        <div className="contacts">
          <h2>Contact</h2>
          <ul className="contactList">
            <li>
              <svg
                className="phoneIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="23"
                viewBox="0 0 17 23"
                fill="none"
              >
                <path
                  d="M12.2664 1H4.9624C3.1006 1 1.59131 2.50929 1.59131 4.37109V18.4173C1.59131 20.2791 3.1006 21.7884 4.9624 21.7884H12.2664C14.1282 21.7884 15.6375 20.2791 15.6375 18.4173V4.37109C15.6375 2.50929 14.1282 1 12.2664 1Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.49072 17.8555H9.73812"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a href="tel:+994506815551" target="blank">
                +994 77 440 48 61
              </a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
              >
                <path
                  d="M6.81689 5.33332C6.99805 5.33827 7.19901 5.34817 7.39006 5.77186C7.51677 6.05398 7.7296 6.57369 7.90383 6.99738C8.03945 7.32703 8.15032 7.59827 8.17804 7.6537C8.2414 7.78041 8.28099 7.92593 8.19784 8.09719L8.17012 8.1546C8.11381 8.28783 8.03698 8.41141 7.94244 8.52087L7.80088 8.68916C7.71674 8.79211 7.63259 8.89309 7.56132 8.96436C7.43362 9.09107 7.30196 9.22768 7.44847 9.4811C7.59498 9.73452 8.10974 10.568 8.86901 11.2402C9.42434 11.7411 10.0615 12.1429 10.7528 12.4281C10.8221 12.4578 10.8782 12.4829 10.9211 12.5033C11.1755 12.6301 11.327 12.6103 11.4735 12.44C11.621 12.2687 12.11 11.6985 12.2823 11.4451C12.4486 11.1917 12.6188 11.2313 12.8544 11.3184C13.09 11.4065 14.3433 12.0212 14.5977 12.147L14.7393 12.2163C14.9165 12.3004 15.0362 12.3588 15.0877 12.4439C15.1511 12.5518 15.1511 13.0577 14.9412 13.6536C14.7254 14.2476 13.687 14.8178 13.2168 14.8613L13.0831 14.8772C12.6515 14.9287 12.1051 14.996 10.1569 14.2288C7.75534 13.2844 6.17047 10.9422 5.85073 10.4681L5.79826 10.3928L5.79232 10.3849C5.6468 10.1899 4.75488 8.99703 4.75488 7.76556C4.75488 6.58755 5.33597 5.9738 5.60028 5.69464L5.6468 5.64515C5.73236 5.5485 5.83689 5.4705 5.95389 5.416C6.07089 5.36151 6.19785 5.33167 6.32688 5.32837C6.49814 5.32837 6.67039 5.32837 6.81689 5.33332Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.10438 20.5599C0.0847116 20.6306 0.0840566 20.7053 0.102481 20.7764C0.120906 20.8475 0.157759 20.9125 0.20932 20.9648C0.260881 21.0171 0.325326 21.0549 0.396152 21.0743C0.466977 21.0938 0.541677 21.0942 0.612712 21.0755L5.42151 19.8188C6.94722 20.6452 8.65487 21.0782 10.39 21.0786H10.3942C16.1205 21.0786 20.7884 16.4379 20.7884 10.7325C20.7919 9.37193 20.5248 8.02427 20.0026 6.76791C19.4804 5.51156 18.7136 4.3716 17.7467 3.41437C16.7815 2.44929 15.635 1.68456 14.3732 1.16417C13.1114 0.643783 11.7591 0.378006 10.3942 0.382127C4.66789 0.382127 0 5.02287 0 10.7273C0 12.5424 0.478062 14.3252 1.38826 15.8983L0.10438 20.5599ZM2.89864 16.3137C2.95383 16.1134 2.96859 15.9041 2.94207 15.698C2.91555 15.4919 2.84827 15.2931 2.74416 15.1133C1.97294 13.7802 1.56648 12.2674 1.5657 10.7273C1.5657 5.89445 5.52485 1.94783 10.3942 1.94783C12.7636 1.94783 14.9744 2.86325 16.6424 4.52394C17.4631 5.33571 18.1139 6.30277 18.5569 7.36871C18.9999 8.43466 19.2262 9.57814 19.2227 10.7325C19.2227 15.5653 15.2635 19.5129 10.3942 19.5129H10.389C8.9148 19.5122 7.46406 19.1441 6.16783 18.442C5.81846 18.2529 5.41024 18.2036 5.02591 18.3042L2.14293 19.0568L2.89864 16.3137Z"
                  fill="currentColor"
                />
              </svg>
              <a
                href="https://api.whatsapp.com/send?phone=+994774404861&text=Hello"
                target="blank"
              >
                +994 77 440 48 61
              </a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
              >
                <path
                  d="M3.49921 0.498047H17.5314C18.3942 0.49799 19.2244 0.828119 19.8516 1.42071C20.4788 2.0133 20.8555 2.82343 20.9043 3.68491L20.9095 3.87616V13.7507C20.9096 14.6135 20.5794 15.4437 19.9868 16.0709C19.3942 16.6981 18.5841 17.0747 17.7226 17.1236L17.5314 17.1288H3.49921C2.63635 17.1288 1.80617 16.7987 1.17898 16.2061C0.551795 15.6135 0.175142 14.8034 0.126291 13.9419L0.121094 13.7507V3.87616C0.121037 3.0133 0.451166 2.18313 1.04376 1.55594C1.63635 0.928748 2.44648 0.552095 3.30796 0.503244L3.49921 0.498047ZM19.3504 6.08285L10.8791 10.542C10.7834 10.5925 10.6783 10.6226 10.5704 10.6303C10.4625 10.638 10.3542 10.6231 10.2523 10.5867L10.1525 10.543L1.68022 6.08389V13.7507C1.68024 14.2072 1.85191 14.647 2.16114 14.9828C2.47038 15.3186 2.89458 15.5258 3.34953 15.5634L3.49921 15.5696H17.5314C17.9881 15.5696 18.428 15.3978 18.7638 15.0883C19.0997 14.7789 19.3068 14.3544 19.3441 13.8993L19.3504 13.7507V6.08285ZM17.5314 2.05718H3.49921C3.04271 2.05719 2.6029 2.22886 2.26709 2.5381C1.93128 2.84733 1.72402 3.27153 1.68646 3.72649L1.68022 3.87616V4.32207L10.5153 8.97244L19.3504 4.32103V3.87616C19.3503 3.41949 19.1785 2.97955 18.8691 2.64371C18.5596 2.30788 18.1352 2.10073 17.68 2.06341L17.5314 2.05718Z"
                  fill="currentColor"
                />
              </svg>
              <a href="mailto:raminrzayev1990@gmail.com" target="blank">
                raminrzayev1990@gmail.com
              </a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
              >
                <path
                  d="M9.89941 2.49066C12.3744 2.49066 14.3994 4.25457 14.3994 6.41046C14.3994 8.46836 12.0369 11.8002 9.89941 14.1521C7.76191 11.7022 5.39941 8.46836 5.39941 6.41046C5.39941 4.25457 7.42441 2.49066 9.89941 2.49066ZM9.89941 0.530762C6.18691 0.530762 3.14941 3.17663 3.14941 6.41046C3.14941 10.8202 9.89941 17.1899 9.89941 17.1899C9.89941 17.1899 16.6494 10.7222 16.6494 6.41046C16.6494 3.17663 13.6119 0.530762 9.89941 0.530762ZM9.89941 4.45056C8.66191 4.45056 7.64941 5.33252 7.64941 6.41046C7.64941 7.48841 8.66191 8.37036 9.89941 8.37036C11.1369 8.37036 12.1494 7.48841 12.1494 6.41046C12.1494 5.33252 11.1369 4.45056 9.89941 4.45056ZM18.8994 17.1899C18.8994 19.3458 14.8494 21.1097 9.89941 21.1097C4.94941 21.1097 0.899414 19.3458 0.899414 17.1899C0.899414 15.916 2.24941 14.838 4.38691 14.0541L5.06191 14.936C3.93691 15.426 3.14941 16.014 3.14941 16.6999C3.14941 18.0719 6.18691 19.1498 9.89941 19.1498C13.6119 19.1498 16.6494 18.0719 16.6494 16.6999C16.6494 16.014 15.8619 15.426 14.6244 14.936L15.2994 14.0541C17.5494 14.838 18.8994 15.916 18.8994 17.1899Z"
                  fill="currentColor"
                />
              </svg>
              <a
                href="https://maps.app.goo.gl/USHYxtFgzHTDShYs7"
                target="blank"
              >
                Baku, Azerbaijan
              </a>
            </li>
          </ul>
        </div>
        <div
          className="contactsLocation"
          style={{ width: "60vw", height: "30rem" }}
        >
          <iframe
            style={{ border: "none" }}
            src="https://maps.google.com/maps?q=40.449861,49.819556&z=15&output=embed"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
      <div className="aboutUsBox">
        <div className="aboutCompany">
          <h2>About Us</h2>
          <p>
            TripWithUs is an international tourism and travel company
            established in 2015. The main goal of the company is to provide
            professional travel services to clients at both individual and
            corporate levels. TripWithUs is engaged in organizing both domestic
            and international tours. It provides clients with services such as
            air tickets, hotels, transfers, visa support and travel insurance.
            The company is also distinguished by its special tour packages and
            seasonal discount campaigns. TripWithUs is known for preparing
            individual travel plans according to the client's wishes. For
            corporate clients, MICE events (corporate meetings, incentive trips,
            conferences and exhibitions) are organized. These events include
            meetings, incentive trips, conferences and exhibitions. The company
            offers travel not only as transportation and accommodation, but also
            as a cultural and emotional experience. TripWithUs provides
            high-quality service with its professional staff. The company's
            activities are carried out both online platforms and through the
            office. TripWithUs uses modern technologies to make the booking
            process fast and convenient. Customer satisfaction is one of the
            company's main priorities. Over the years of its service, TripWithUs
            has gained thousands of loyal customers. The company is an ideal
            choice for those who make travel a lifestyle.
          </p>
        </div>
        <div className="aboutTeam">
          <h3>About the team</h3>
          <div className="teamPhotosBox">
            <div className="foundersPhoto">
                <img src={foundersPhoto} alt="Founders" />
                <div className="foundersInfo">
                    <h4>Ramin Rzayev and Goychek Qaloyeva Rzayeva</h4>
                    <p>Company founders, Senior Developer and designer</p>
                </div>
            </div>
            <div className="managerPhoto">
                <img src={managerPhoto} alt="Manager" />
                <div className="managerInfo">
                    <h4>Javidan Mehtiyev</h4>
                    <p>Company manager</p>
                </div>
            </div>
            <div className="lawyerAndDogPhoto">
                <img src={lawyerPhoto} alt="Lawyer" />
                <h4>lawyer <b> Zaur Abdullayev </b> <br></br> special guide assistant <b> Lilith </b></h4>
                <img src={dogPhoto} alt="Dog" />
            </div>
            <div className="transportManagerPhoto">
                <div className="transportManagerInfo">
                    <h4>Samad Sheikhzadeh</h4>
                    <p>Transport manager</p>
                </div>
                <img src={transportManagerPhoto} alt="Transport manager" />
            </div>
          </div>
          <p>
            The TripWithUs team is built on the principles of professionalism,
            innovation and sincerity. One of the company's founders, Ramin
            Rzayev, acts as both a manager and a senior developer responsible
            for technological developments. He personally programmed the
            company's reservation system, web platform and internal management
            tools. Another founder, Goychek Galoyeva Rzayeva, is a talented
            designer who shaped the entire visual identity of TripWithUs. She
            oversees all design work, from interfaces to printed materials. The
            company's legal affairs are headed by Zaur Abdullayev, who is
            responsible for ensuring that contracts, permits and legal
            procedures are carried out within the legal framework. The team is
            managed by Javidan Mehtiyev, who is involved in the coordination of
            daily activities and tour planning. Samad Sheikhzadeh works in the
            transport sector, who manages transfers, driver service and car
            fleet management. All TripWithUs tours are carried out by
            professional and licensed guides. A special member of the team, a
            trained dog named Lilith, also participates during the tours. Lilith
            performs safety and orientation functions and is also a source of
            emotional support for children and elderly tourists. She is equipped
            with a special GPS collar and is able to work with trained teams.
            Lilith is also popular among social media followers as the company's
            mascot. Ramin and Goycek have taken special care of her, making her
            an indispensable part of the tours. Together, these team members
            provide customers with a high-quality and memorable travel
            experience. TripWithUs is a professional and creative travel company
            based on family values.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

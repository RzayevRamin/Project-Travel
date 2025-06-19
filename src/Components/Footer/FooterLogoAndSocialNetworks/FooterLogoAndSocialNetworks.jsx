import React from "react";
import Logo from "../../Header/Logo/Logo";
import "./FooterLogoAndSocialNetworks.css";

function FooterLogoAndSocialNetworks() {
  return (
    <div className="footerLogoAndSocialNetworksContainer">
      <Logo className="logoForFooter" />
      <div className="socialNetworksContainer">
        <h3>Follow us on social networks</h3>
        <div className="socialNetworksLogo">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 7C16 6.73478 16.1054 6.48043 16.2929 6.29289C16.4804 6.10536 16.7348 6 17 6C17.2652 6 17.5196 6.10536 17.7071 6.29289C17.8946 6.48043 18 6.73478 18 7C18 7.26522 17.8946 7.51957 17.7071 7.70711C17.5196 7.89464 17.2652 8 17 8C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 7.25C10.7402 7.25 9.53204 7.75045 8.64124 8.64124C7.75045 9.53204 7.25 10.7402 7.25 12C7.25 13.2598 7.75045 14.468 8.64124 15.3588C9.53204 16.2496 10.7402 16.75 12 16.75C13.2598 16.75 14.468 16.2496 15.3588 15.3588C16.2496 14.468 16.75 13.2598 16.75 12C16.75 10.7402 16.2496 9.53204 15.3588 8.64124C14.468 7.75045 13.2598 7.25 12 7.25ZM8.75 12C8.75 11.138 9.09241 10.3114 9.7019 9.7019C10.3114 9.09241 11.138 8.75 12 8.75C12.862 8.75 13.6886 9.09241 14.2981 9.7019C14.9076 10.3114 15.25 11.138 15.25 12C15.25 12.862 14.9076 13.6886 14.2981 14.2981C13.6886 14.9076 12.862 15.25 12 15.25C11.138 15.25 10.3114 14.9076 9.7019 14.2981C9.09241 13.6886 8.75 12.862 8.75 12Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.258 2.83292C13.7634 2.44534 10.2366 2.44534 6.74201 2.83292C4.73001 3.05792 3.10501 4.64292 2.86901 6.66492C2.45512 10.2095 2.45512 13.7903 2.86901 17.3349C3.10501 19.3569 4.72901 20.9419 6.74201 21.1669C10.2367 21.5537 13.7633 21.5537 17.258 21.1669C19.27 20.9419 20.895 19.3569 21.131 17.3349C21.5449 13.7903 21.5449 10.2095 21.131 6.66492C20.895 4.64292 19.271 3.05792 17.258 2.83292ZM6.90801 4.32292C10.2923 3.94763 13.7077 3.94763 17.092 4.32292C18.422 4.47292 19.487 5.52192 19.642 6.83992C20.0432 10.2682 20.0432 13.7316 19.642 17.1599C19.5618 17.805 19.2666 18.4041 18.8039 18.8607C18.3412 19.3172 17.7381 19.6044 17.092 19.6759C13.7077 20.0512 10.2923 20.0512 6.90801 19.6759C6.26195 19.6044 5.65886 19.3172 5.19617 18.8607C4.73347 18.4041 4.43819 17.805 4.35801 17.1599C3.95687 13.7316 3.95687 10.2682 4.35801 6.83992C4.43819 6.19488 4.73347 5.5957 5.19617 5.13917C5.65886 4.68264 6.26195 4.39443 6.90801 4.32292Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.29395 6.928L14.357 1H13.157L8.76195 6.147L5.24995 1H1.19995L6.50995 8.784L1.19995 15H2.39995L7.04195 9.564L10.751 15H14.801L9.29395 6.928ZM7.65095 8.852L7.11295 8.077L2.83195 1.91H4.67495L8.12895 6.887L8.66695 7.662L13.158 14.132H11.315L7.65095 8.852Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8ZM2 9H6V21H2V9Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterLogoAndSocialNetworks;

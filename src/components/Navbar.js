import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <svg
            width="81"
            height="60"
            viewBox="0 0 81 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path
                d="M80.4347 58.1016C80.4347 58.9759 79.7965 59.5627 79.0411 59.5627V59.5574C78.2642 59.5627 77.6377 58.9759 77.6377 58.1018C77.6377 57.228 78.2642 56.6428 79.0411 56.6428C79.7968 56.6425 80.4347 57.2277 80.4347 58.1016ZM81 58.1016C81 56.9018 80.0736 56.2053 79.0411 56.2053C78.0014 56.2053 77.075 56.9018 77.075 58.1016C77.075 59.3007 78.0017 60 79.0411 60C80.0738 60 81 59.3007 81 58.1016ZM78.7161 58.262H78.9258L79.4119 59.1206H79.9456L79.4073 58.2259C79.6855 58.2059 79.9143 58.0726 79.9143 57.6958C79.9143 57.2277 79.5935 57.0773 79.0501 57.0773H78.2639V59.1206H78.7159V58.262H78.7161ZM78.7161 57.9161V57.4241H79.0305C79.2015 57.4241 79.4345 57.438 79.4345 57.6479C79.4345 57.8762 79.3139 57.9161 79.1123 57.9161H78.7161Z"
                fill="white"
              />
              <path
                d="M67.8076 47.6492L70.2501 54.3713H65.2895L67.8076 47.6492ZM65.1918 45.0318L59.5631 59.3789H63.5377L64.428 56.8438H71.0892L71.9318 59.3789H76.2466L70.576 45.03L65.1918 45.0318ZM53.8913 59.3842H57.9238V45.0274L53.8906 45.0265L53.8913 59.3842ZM25.8971 45.0265L22.5328 56.4054L19.3099 45.0274L14.9589 45.0265L19.5618 59.3842H25.3712L30.0112 45.0265H25.8971ZM42.1969 48.1528H43.93C46.4444 48.1528 48.0706 49.2884 48.0706 52.2355C48.0706 55.1833 46.4444 56.3191 43.93 56.3191H42.1969V48.1528ZM38.1983 45.0265V59.3842H44.7358C48.2188 59.3842 49.3562 58.8018 50.5859 57.4951C51.4546 56.5776 52.0164 54.5642 52.0164 52.3632C52.0164 50.3445 51.541 48.5451 50.712 47.4238C49.2183 45.4186 47.0667 45.0265 43.8556 45.0265H38.1983ZM0 45.0066V59.3842H4.06659V48.4672L7.21754 48.4681C8.26087 48.4681 9.00458 48.7296 9.507 49.2696C10.1442 49.9524 10.4044 51.0547 10.4044 53.0709V59.3842H14.345V51.4405C14.345 45.771 10.7529 45.0066 7.23828 45.0066H0ZM31.7084 45.0265L31.71 59.3842H35.7406V45.0265H31.7084Z"
                fill="white"
              />
              <path
                d="M10.8373 16.4388C10.8373 16.4388 16.0238 8.74061 26.3794 7.9442V5.1513C14.9092 6.07802 4.97656 15.8511 4.97656 15.8511C4.97656 15.8511 10.6023 32.2118 26.3794 33.7098V30.7411C14.8014 29.2758 10.8373 16.4388 10.8373 16.4388ZM26.3794 24.8372V27.5559C17.629 25.9865 15.2001 16.8357 15.2001 16.8357C15.2001 16.8357 19.4015 12.1535 26.3794 11.3942V14.3774C26.3741 14.3774 26.3704 14.3758 26.366 14.3758C22.7036 13.9337 19.8426 17.3755 19.8426 17.3755C19.8426 17.3755 21.4462 23.1697 26.3794 24.8372ZM26.3794 -9.53674e-07V5.1513C26.7161 5.12533 27.0528 5.10331 27.3913 5.09172C40.4316 4.64957 48.9283 15.8511 48.9283 15.8511C48.9283 15.8511 39.1696 27.7887 29.0028 27.7887C28.071 27.7887 27.1987 27.7018 26.3794 27.5557V30.7411C27.08 30.8306 27.8064 30.8832 28.5644 30.8832C38.0253 30.8832 44.8672 26.0224 51.4922 20.2695C52.5906 21.1545 57.0875 23.3075 58.0119 24.2499C51.7128 29.5554 37.0322 33.8322 28.7094 33.8322C27.9071 33.8322 27.1367 33.7833 26.3794 33.7098V38.1859H62.3396V-9.53674e-07H26.3794ZM26.3794 11.3942V7.94443C26.7126 7.92101 27.0484 7.90293 27.3913 7.89203C36.7686 7.59573 42.9207 15.9988 42.9207 15.9988C42.9207 15.9988 36.2759 25.2828 29.1512 25.2828C28.1258 25.2828 27.2065 25.1171 26.3791 24.8372V14.3774C30.0297 14.8212 30.7645 16.4435 32.9592 20.1241L37.8405 15.9835C37.8405 15.9835 34.2772 11.2822 28.2706 11.2822C27.6177 11.2819 26.9929 11.3281 26.3794 11.3942Z"
                fill="#77B900"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="81" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

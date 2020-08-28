import React from "react";

import "./style.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-title">
        <h1>Where in the world?</h1>
      </div>
      <div className="header-theme">
        <label htmlFor="switch" id="switch-label">
          <input type="checkbox" id="switch" />
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="moon-icon"
          >
            <path d="M9.15826 2.04325C9.3408 1.93937 9.43896 1.73249 9.40398 1.5254C9.36899 1.31831 9.20831 1.15516 9.00178 1.11701C8.58704 1.0404 8.15965 1 7.72296 1C3.85698 1 0.722961 4.13401 0.722961 8C0.722961 11.866 3.85698 15 7.72296 15C9.91851 15 11.8778 13.9884 13.1604 12.4081C13.2927 12.2451 13.3091 12.0168 13.2014 11.8365C13.0937 11.6563 12.8849 11.5625 12.6786 11.6018C9.49776 12.2076 6.54556 9.77519 6.54556 6.53225C6.54556 4.60952 7.59681 2.93185 9.15826 2.04325Z" />
          </svg>
          <p>Dark Theme</p>
        </label>
      </div>
    </div>
  );
};

export default Header;

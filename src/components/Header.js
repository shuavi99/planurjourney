import { useCallback } from "react";
import "./Header.css";

const Header = () => {
  const onAboutUsText1Click = useCallback(() => {
    // Please sync "ABOUT US" to the project
  }, []);

  const onMediaTextClick = useCallback(() => {
    // Please sync "MEDIA" to the project
  }, []);

  return (
    <div className="rectangle-parent16">
      <div className="frame-child31" />
      <div className="frame-child32" />
      <div className="about-us-parent">
        <b className="about-us1" onClick={onAboutUsText1Click}>
          About us
        </b>
        <b className="plan-journey">Plan journey</b>
        <b className="type-of-travel">Type of travel</b>
        <b className="media" onClick={onMediaTextClick}>
          Media
        </b>
      </div>
      <img className="frame-icon" alt="" src="/frame-197@2x.png" />
      <div className="group-parent">
        <img className="frame-child33" alt="" src="/group-177.svg" />
        <div className="login">Login</div>
        <img className="frame-child34" alt="" src="/group-179.svg" />
        <div className="login">Hindi</div>
      </div>
      <div className="search-parent">
        <div className="search1">Search</div>
        <img
          className="iconactionsearch-24px"
          alt=""
          src="/iconactionsearch-24px.svg"
        />
      </div>
    </div>
  );
};

export default Header;

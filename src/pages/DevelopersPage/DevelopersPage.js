import React from "react";
import Nav from "../../components/Nav";
import "../../css/developers-page.scss";
import { ReactComponent as InstagramLogo } from "../../images/LandingPage/instagram_logo.svg";
import { ReactComponent as HomepageLogo } from "../../images/LandingPage/likelion_logo.svg";

const DeveloperPage = () => {
  return (
    <div className="container">
      <Nav location="developers" />
      <img
        className="likelion-swu-logo"
        src={require("../../images/DevelopersPage/likelion_swu_logo.png")}
        alt="likelion_swu_logo"
      />
      <div className="contents-container">
        <span className="title">
          서울여자대학교 개발동아리
          <br />
          멋쟁이사자처럼
        </span>
        <div className="likelion-swu-desc">
          <img
            className="double-quote"
            src={require("../../images/DevelopersPage/open_quote.png")}
            alt="quote"
          />
          <p className="simple-description">
            POSSIBILITY
            <br />
            TO
            <br />
            REALITY
          </p>
          <img
            className="double-quote"
            src={require("../../images/DevelopersPage/end_quote.png")}
            alt="quote"
          />
        </div>
        <section className="team-introduction">
          <img
            className="depart-img design"
            src={require("../../images/DevelopersPage/design_team.png")}
            alt="DESIGN"
          />
          <div className="members-container">
            <div>
              <p className="member-name">박채연</p>
            </div>
            <div>
              <p className="member-name">허지윤</p>
            </div>
          </div>
        </section>
        <section className="team-introduction">
          <img
            className="depart-img frontend"
            src={require("../../images/DevelopersPage/frontend_team.png")}
            alt="FRONTEND"
          />
          <div className="members-container backend">
            <div>
              <p className="member-name">채유빈</p>
            </div>
            <div>
              <p className="member-name">황윤희</p>
            </div>
          </div>
        </section>
        <section className="team-introduction">
          <img
            className="depart-img"
            src={require("../../images/DevelopersPage/backend_team.png")}
            alt="BACKEND"
          />
          <div className="members-container">
            <div>
              <p className="member-name">장효선</p>
            </div>
            <div>
              <p className="member-name">홍정민</p>
            </div>
          </div>
        </section>
        <section className="contact-us-container">
          <img
            className="depart-img contact"
            src={require("../../images/DevelopersPage/contact_us.png")}
            alt="CONTACT US"
          />

          <div className="developers-footer">
            <div className="item-container">
              <a href="https://www.instagram.com/likelion_swu/">
                <InstagramLogo className="item" />
              </a>
              <p className="footer-text">
                멋쟁이사자처럼 <br />
                Instagram
              </p>
            </div>
            <div className="item-container">
              <a
                href="https://swulikelion.oopy.io/"
                target="_blank"
                rel="noreferrer"
              >
                <HomepageLogo className="item" />
              </a>
              <p className="footer-text">
                멋쟁이사자처럼 <br />
                Homepage
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DeveloperPage;

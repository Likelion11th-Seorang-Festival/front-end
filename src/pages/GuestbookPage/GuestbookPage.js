import React, { useState, useEffect } from "react";
import "../../css/guestbook-page.scss";
import ContentList from "./ContentList";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import PlusBtn from "../../images/GuestbookPage/plus_btn.png";
import API from "../../utils/API";

export function handleAddContent() {}
const GuestbookPage = () => {
  const [content, setContent] = useState();
  const [visitNum, setVisitNum] = useState();

  useEffect(() => {
    API.get("/letter").then((res) => {
      setContent(res.data.letters);
      setVisitNum(res.data.total);
    });
  }, []);

  return (
    <div className="container">
      <Nav location="guestbook" />
      {content ? (
        <div className="guestbook-container">
          <p className="guest-title">
            지금까지 {visitNum}개의 발자국이 찍혔어요!
          </p>
          <div className="content-container">
            <div className="plusbtn-container">
              <Link to="/writing">
                <PlusBtn />
              </Link>
            </div>
            <div className="memo">
              <div>
                <ContentList contents={content} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GuestbookPage;

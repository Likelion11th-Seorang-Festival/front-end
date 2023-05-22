import React, { useState } from "react";
import WritingNav from "../../components/WritingNav";
import ".//../../css/guestbook-page.scss";
import { Link } from "react-router-dom";
import { ReactComponent as PostBtn } from "../../images/GuestbookPage/postbutton.svg";
import { ReactComponent as Backbtn } from "../../images/GuestbookPage/backbutton.svg";
import { ReactComponent as WritingTitle } from "../../images/GuestbookPage/writingtitle.svg";
import axios from "axios";

const GreenMemoPage = () => {
  const [inputCount, setInputCount] = useState(0);
  const [inputText, setInputText] = useState("");

  const handleAddContent = () => {
    const request = { content: inputText, background: 2 };

    const client = axios.create({
      method: "post",
      headers: {
        "Access-Control-Allow-Origin": `http://localhost:3000/`,
      },
    });

    client
      .post("/api/letter/write", request)
      .then((res) => console.log(res.data));

    setInputText("");
  };

  const onChangeHandler = (e) => {
    setInputCount(e.target.value.length);
    setInputText(e.target.value);
  };

  return (
    <div className="container">
      <div className="backbtn-container">
        <Link to="/guest">
          <Backbtn />
        </Link>
      </div>
      <div>
        <WritingTitle />
      </div>
      <WritingNav location="greenmemo" />
      <div className="green-memo-container">
        <textarea
          onChange={onChangeHandler}
          className="textbox"
          maxLength={100}
          id="inputText"
          value={inputText}
        ></textarea>

        <div className="textlength middle-cat">
          <p className="contentlength">
            <span>{inputCount}</span>
            <span>/100</span>
          </p>
        </div>
      </div>

      <div className="btn-container">
        <button onClick={handleAddContent}>
          <Link to="/guest">
            <PostBtn />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default GreenMemoPage;

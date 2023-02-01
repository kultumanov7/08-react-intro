import { useState, useEffect } from "react";
import avatar from "./img/avatar.png";

const MainContent = (props) => {
  
  return (
    <>
      <div className="element">
        <div className="elementContent">
          <div className="information">
            <img src={avatar} />
            <p className="content-header">
              {props.data.per_facet[0]}
              <span className="gray-text"> in </span> {props.data.section}
              &nbsp; · &nbsp;
              <span className="gray-text">{props.data.published_date}</span>
            </p>
          </div>
          <div className="textContent">
            <h1 id={`id-${props.index}`} className="links content-topic">
              {props.data.title}
            </h1>
            <p className="content-paragraph">{props.data.abstract}</p>
          </div>
          <div className="content-footer">
            <div className="content-footer-left">
              <div className="language">{props.data.item_type}</div>
              <p>
                <span className="gray-text">12 min read</span> &nbsp; · &nbsp;
                <span className="gray-text">{props.data.byline}</span>
              </p>
            </div>
            <div className="squares">
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>
          </div>
        </div>
        <div>
          <img src={props.data.multimedia[0].url} className="imgContent" />
        </div>
      </div>
    </>
  );
};

export default MainContent;

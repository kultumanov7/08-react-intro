import avatar from "./img/avatar.png";

const MainContent = ({data}) => {
  let currentNumber = 0;

  return (
    <>
      <h1 className="header">Hello, World!</h1>
      {data.map((element) => {
        return (
          <>
            <div className="element">
              <div className="elementContent">
                <div className="information">
                  <img src={avatar} />
                  <p className="content-header">
                    {element.per_facet[0]}
                    <span className="gray-text"> in </span> {element.section}
                    &nbsp; · &nbsp;
                    <span className="gray-text">{element.published_date}</span>
                  </p>
                </div>
                <div className="textContent">
                  <h1
                    id={`id-${currentNumber++}`}
                    className="links content-topic"
                  >
                    {element.title}
                  </h1>
                  <p className="content-paragraph">{element.abstract}</p>
                </div>
                <div className="content-footer">
                  <div className="content-footer-left">
                    <div className="language">{element.item_type}</div>
                    <p>
                      <span className="gray-text">12 min read</span> &nbsp; ·
                      &nbsp;
                      <span className="gray-text">{element.byline}</span>
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
                <img src={element.multimedia[0].url} className="imgContent" />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default MainContent;

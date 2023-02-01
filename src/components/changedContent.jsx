import arrowBack from './img/arrow-left.png';
import avatarChanged from './img/avatar-changed.png';
import linkedin from './img/linkedin.png';
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import likes from './img/likes.png';
import bookmark from './img/bookmark.png';


const ChangedContent = ({data, number}) => {

  return (
    <>
      <img className="arrow-right" src={arrowBack} />
      <div className="content-header changed-content">
        <div className="content-left-header">
          <img width="64" height="64" src={avatarChanged} />
          <div className="content-left-info">
            <h3>{data[number].per_facet[0]}</h3>
            <p className="gray-text">
              {data[number].published_date} · 12 min read · Member-only
            </p>
          </div>
        </div>
        <div className="content-right-header">
          <img src={linkedin} />
          <img src={facebook} />
          <img src={twitter} />
        </div>
      </div>
      <div className="content-main">
        <h1 className="changed-text">{data[number].title}</h1>
        <p className="changed-p">{data[number].abstract}</p>
        <img className="changed-img" src={data[number].multimedia[0].url} />
        <div className="changed-subheader">{data[number].title}</div>
        <p className="changed-subparagraph">{data[number].abstract}</p>
      </div>
      <div className="content-likes">
        <img src={likes} />
        <img height="20" src={bookmark} />
      </div>
    </>
  );
};

export default ChangedContent;

import arrowBack from './img/arrow-left.png';
import avatarChanged from './img/avatar-changed.png';
import linkedin from './img/linkedin.png';
import facebook from './img/facebook.png';
import twitter from './img/twitter.png';
import likes from './img/likes.png';
import bookmark from './img/bookmark.png';


const ChangedContent = ({ data, number }) => {
  return (
    <>
      <img class="arrow-right" src={arrowBack} />
      <div class="content-header changed-content">
        <div class="content-left-header">
          <img width="64" height="64" src={avatarChanged} />
          <div class="content-left-info">
            <h3>{data[number].per_facet[0]}</h3>
            <p class="gray-text">
              {data[number].published_date} · 12 min read · Member-only
            </p>
          </div>
        </div>
        <div class="content-right-header">
          <img src={linkedin} />
          <img src={facebook} />
          <img src={twitter} />
        </div>
      </div>
      <div class="content-main">
        <h1 class="changed-text">{data[number].title}</h1>
        <p class="changed-p">{data[number].abstract}</p>
        <img class="changed-img" src={data[number].multimedia[0].url} />
        <div class="changed-subheader">{data[number].title}</div>
        <p class="changed-subparagraph">{data[number].abstract}</p>
      </div>
      <div class="content-likes">
        <img src={likes} />
        <img height="20" src={bookmark} />
      </div>
    </>
  );
};

export default ChangedContent;

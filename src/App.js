import { useEffect, useState } from "react";
import "./App.css";
import ChangedContent from "./components/changedContent";
import MainContent from "./components/mainContent";

function App() {

  const [data, setData] = useState([]);
  const [bool, setBool] = useState(true);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=YOqCzCWfxklRKYI8PdRbwxtm2GUpYuwh')
    .then(response => response.json())
    .then(item => setData(item.results))
  }, [])

  const handleClick = (event) => {
    if (event.target.classList.contains("links")) {
      setBool(false)
      setNumber(+(event.target.id.slice(3)));
    } else if (event.target.classList.contains("arrow-right")) {
      setBool(true);
    }
  }

  return (
    <div className="App">
      <h4 class="logo">Medium alike</h4>
      <div id="main" onClick={handleClick}>
        {(bool) ? <MainContent data={data}/> : <ChangedContent data={data} number={number}/>}
      </div>

      <div>
        <p class="credits">
          Credits: photos from&#160;
          <a href="unsplash.com" target="_blank">
            Unsplash.com
          </a>
          , icons from&#160;{" "}
          <a href="https://icons8.com/" target="_blank">
            Icons8
          </a>
          , graphics from&#160;
          <a href="https://craftwork.design/" target="_blank">
            craftwork.design
          </a>
          , font Kanit from&#160;
          <a href="https://fonts.google.com/" target="_blank">
            fonts.google
          </a>
          .
        </p>

        <div class="end-footer">Made with ✨❤️ at nFactorial in 2022.</div>
      </div>
    </div>
  );
}

export default App;

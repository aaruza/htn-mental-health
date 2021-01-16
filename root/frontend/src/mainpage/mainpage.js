import './mainpage.css';
import Intro from './Intro';
import title_bg_img from "./resources/titlebg.jpg"

function Mainpage() {
  return (
    <div className="Mainpage">
        <div className="Mainpage-title-div">
            <img className="Mainpage-bg-img" src={title_bg_img} alt="some text"></img>
            <h1>Mental Health App</h1>
            <Intro />
        </div>
    </div>
  );
}

export default Mainpage;
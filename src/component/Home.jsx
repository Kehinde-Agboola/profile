import React, { useState} from "react";
import profile from "../img/profile.png";
import git from "../img/git.svg"
import slack from "../img/slack.svg"
import zuri from "../img/v.png"
import v2 from "../img/I4G.svg"
import text from "../img/text.png"
const Home = () => {
  const [mode, setMode] = useState();
  const [toggle, setToggle] = useState(`LightMode <i class="fa fa-sun"></i> `);
  const toggleDarkMode = () => {
    if (mode) {
      document.documentElement.classList.add("dark");
      setToggle(`DarkMode <i class="fa fa-moon"></i>`);
      setMode((current) => (current = !current));
    }
    if (!mode) {
      document.documentElement.classList.remove("dark");
      setToggle(`LightMode <i class="fa fa-sun"></i> `);
      setMode((current) => (current = !current));
    }
}
  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
      <div className="w-screen shadow-md py-6 md:px-10 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
        <div className=" max-w-full w-full flex mx-auto">
          <h1 className="font-bold text-xl text-gray-700 dark:text-white">
            Kehinde Agboola
          </h1>
          <div className="ml-auto font-medium">
            <button
              className="text-gray-400"
              onClick={() => toggleDarkMode()}
              dangerouslySetInnerHTML={{ __html: toggle }}
            ></button>
          </div>
        </div>
      </div>
      <section className="max-w-lg mx-auto">
        <div className="profile text-center pb-10">
        <div className="profile-img" id="profile-img">
            <img src={profile} alt="profile-img" className="block w-30 mx-auto pb-3" />
            </div>
            <div className="twitter" id="twitter"><h1>@Keyinde18</h1></div>
            <div className="slack" id="slack"><p></p></div>
        </div>
        <div className="links">
            <ul className="flex gap-3 flex-col max-w-lg w-full px-10 md:px-0">
                <button className="block bg-gray-200 dark:bg-gray-700 rounded-lg w-full p-4 shadow-md" id="btn__zuri"><li><a href="https://trainig.zuri.team/" >Twitter Link</a></li></button>
                <button className="block bg-gray-200 dark:bg-gray-700 rounded-lg w-full p-4 shadow-md" id="btn__zuri"><li><a href="https://trainig.zuri.team">Zuri Team</a></li></button>
                <button className="block bg-gray-200 dark:bg-gray-700 rounded-lg w-full p-4 shadow-md" id="books"><li><a href="http://books.zuri.team">Zuri Books</a></li></button>
                <button className="block bg-gray-200 dark:bg-gray-700 rounded-lg w-full p-4 shadow-md" id="book__python"><li><a href="http://books.zuri.teampython-for-beginners?ref_id">Python Books</a></li></button>
                <button className="block bg-gray-200 dark:bg-gray-700 rounded-lg w-full p-4 shadow-md" id="pitch"><li><a href="http://backgroun.zuri.team">Background Check for Code</a></li></button>
                <button className="block bg-gray-200 dark:bg-gray-700 rounded-lg w-full p-4 shadow-md" id="book__design"><li><a href="https://books.zuri.team/design-rules">Design Book</a></li></button>
            </ul>
        </div>
      </section>
      <section>
        <div className="img__social">
          <img src={git} alt="" />
          <img src={slack} alt="" />
        </div>
      </section>
      <div className="footer">
        <div className="footer__img">
          <img src={zuri} alt="" className=""/>
          <img src={text} alt="" />
          <img src={v2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

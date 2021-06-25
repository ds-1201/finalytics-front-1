import "./Slideshow.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const colors = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
];
const delay = 5000;

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const [newsFeed, setNewsFeed] = useState([]);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    let unmount = false;

    axios
      .get(process.env.REACT_APP_URL_STATS, {
        auth: {
          username: process.env.REACT_APP_URL_USERNAME,
          password: process.env.REACT_APP_URL_PASSWORD,
        },
      })
      .then((res) => {
        if (!unmount) {
          const urls = res.data["URL1"].concat(res.data["URL3"]);
          const headlines = res.data["HEADLINES1"].concat(
            res.data["HEADLINES3"]
          );
          const imgs = res.data["IMAGE_LINK1"].concat(res.data["IMAGE_LINK3"]);
          // console.log(urls, headlines, imgs);
          const randomHeadLines = getRandom(headlines, 15);
          const randomNews = randomHeadLines.map((headLine) => {
            const index = headlines.indexOf(headLine);
            return {
              id: index,
              headline: headLine,
              image: imgs[index],
              url: urls[index],
            };
          });
          setNewsFeed(randomNews);
        }
        return res;
      });
    return () => {
      unmount = true;
    };
  }, []);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {newsFeed.map((news, index) => {
          return (
            <div className="card" id={`card${index + 1}`} key={news.id}>
              <div className="innerdata">
                <div className="myimage">
                  {/* <img className="news-img" src={news.image} alt="news-img" /> */}
                </div>
                <div className="news1">
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    <h2>{news.headline}</h2>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx + 1 ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
// ReactDOM.render(<Slideshow />, document.getElementById("App"));
export default Slideshow;

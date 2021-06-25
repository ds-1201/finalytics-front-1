import './Slideshow.css';
import React from "react";


const colors = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];
const delay = 5000;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
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
        <div className="card" id="card1" >
            <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
              <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2>
              </a>
                </div>
            </div>
        </div>
        <div className="card" id="card2" >
            <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
              <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2>
              </a>
                </div>
            </div>
        </div>
        <div className="card" id="card3" >
            <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
              <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2>
              </a>
                </div>
            </div>
        </div>
        <div className="card" id="card4" >
            <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
              <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2>
              </a>
                </div>
            </div>
        </div>
        <div className="card" id="card5" >
            <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
              <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2>
              </a>
                </div>
            </div>
        </div>
        <div className="card" id="card6" >
            <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
              <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2>
              </a>
                </div>
            </div>
        </div>
        <div className="card" id="card7" >
            <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
              <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2>
              </a>
                </div>
            </div>
        </div>
        <div className="card" id="card8" >
            <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
              <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2>
              </a>
                </div>
            </div>
        </div>
        <div className="card" id="card9" >
            <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
              <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2>
              </a>
                </div>
            </div>
        </div>
        <div className="card" id="card10" >
            <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
              <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2>
              </a>
                </div>
            </div>
        </div>
        <div className="card" id="card11" >
            <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
              <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2>
              </a>
                </div>
            </div>
        </div>
        <div className="card" id="card12" >
            <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
              <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2>
              </a>
                </div>
            </div>
        </div>
        <div className="card" id="card13" >
            <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
              <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2>
              </a>
                </div>
            </div>
        </div>
        <div className="card" id="card14" >
            <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
              <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2>
              </a>
                </div>
            </div>
        </div>
        <div className="card" id="card15" >
            <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
              <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2>
              </a>
                </div>
            </div>
        </div>
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
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
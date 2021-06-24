import './Slideshow.css';
import React from "react";


const colors = ["one","TWO","THREE","FOUR","FIVE"];
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
        <div className="card1">
            <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
              <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2> Shares of Adani Green Energy Ltd. traded 2.14 per cent down in Thursday's trade at 02:11PM (IST).Around 10,477 shares changed hands on the counter.
              </a>
                </div>
            </div>
        </div>
        <div className="card2"><div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
                <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2> Shares of Adani Green Energy Ltd. traded 2.14 per cent down in Thursday's trade at 02:11PM (IST).Around 10,477 shares changed hands on the counter.
              </a>
                </div>
            </div>
            </div>
        <div className="card3">
        <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
                <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2> Shares of Adani Green Energy Ltd. traded 2.14 per cent down in Thursday's trade at 02:11PM (IST).Around 10,477 shares changed hands on the counter.
              </a>
                </div>
            </div>
        </div>
        <div className="card4"><div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
                <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2> Shares of Adani Green Energy Ltd. traded 2.14 per cent down in Thursday's trade at 02:11PM (IST).Around 10,477 shares changed hands on the counter.
              </a>
                </div>
            </div>
            </div>
        <div className="card5">
        <div className="innerdata">
                <div className="myimage"></div>
                <div className="news1">
                <a href="https://economictimes.indiatimes.com/markets/stocks/stock-watch/adani-green-shares-down-2-14-as-nifty-gains/articleshow/83805047.cms" target="_blank"><h2>Adani Green shares down 2.14% as Nifty gains </h2> Shares of Adani Green Energy Ltd. traded 2.14 per cent down in Thursday's trade at 02:11PM (IST).Around 10,477 shares changed hands on the counter.
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
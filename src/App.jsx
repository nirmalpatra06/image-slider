import { useState } from "react";

const data = [
  { img: `./data/img-1.jpg`, alt: "img-1" },
  { img: `./data/img-2.jpg`, alt: "img-2" },
  { img: `./data/img-3.jpg`, alt: "img-3" },
];
function App() {
  const [showImage, setShowImage] = useState(0);
  return (
    <div className="container">
      <div className="box">
        <span
          className="arrow left-arrow"
          onClick={() =>
            setShowImage(showImage === 0 ? data.length-1 : showImage - 1)
          }
        >
          👈🏻
        </span>
        {data.map((d, idx) => (
          <img
            src={d.img}
            alt={d.alt}
            key={d.alt}
            className={showImage === idx ? "" : "show-hide"}
          />
        ))}
        <span
          className="arrow right-arrow"
          onClick={() =>
            setShowImage(showImage === data.length-1 ? 0 : showImage + 1)
          }
        >
          👉🏻
        </span>
        <span className="indicators">
          {data.map((_, idx) => (
            <button
              key={idx}
              className={
                showImage === idx ? "indicator" : "indicator indicator-inactive"
              } onClick={()=>setShowImage(idx)}
            ></button>
          ))}
        </span>
      </div>
    </div>
  );
}

export default App;

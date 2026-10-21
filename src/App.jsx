import { useState } from "react";
import { sculptureList } from "./data/gallery";
import "./App.css";

const App = () => {
  const [index, setIndex] = useState(0); //index=0
  const [show, setShow] = useState(false);

  const nextSculture = () => {
    if (index + 1 < sculptureList.length) {
      setIndex(index + 1);
    }
  };

  const prevSculture = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="container">
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          className="button"
          onClick={prevSculture}
          disabled={index === 0}
        >
          {"<<"}
        </button>
        <button
          className="button"
          onClick={nextSculture}
          disabled={index + 1 === sculptureList.length}
        >
          {">>"}
        </button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <h1>{sculptureList[index].name}</h1>
        <span>
          {index + 1} of {sculptureList.length}
        </span>
      </div>
      <div>
        <img
          style={{
            width: "250px",
            height: "250px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          src={sculptureList[index].url}
          alt={sculptureList[index].alt}
        />
        <div style={{ marginTop: "15px" }}>
          <button
            className="button"
            style={{ marginBottom: "10px" }}
            onClick={() => setShow(!show)}
          >
            {show ? "Hide description" : "Show description"}
          </button>
          {show && (
            <p style={{ textAlign: "justify" }}>
              {sculptureList[index].description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default App;

import { sculptureList } from "./data/gallery";
import "./App.css";

const App = () => {
  return (
    <section className="container">
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button className="button">{"<<"}</button>
        <button className="button">{">>"}</button>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <h1>Homenaje a la Neurocirugía</h1>
        <span>{"(1 de 12)"}</span>
      </div>
      <div>
        <img
          style={{
            width: "250px",
            height: "250px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
          src="https://react.dev/images/docs/scientists/Mx7dA2Y.jpg"
          alt="A bronze statue of two crossed hands delicately holding a human brain in their fingertips."
        />
        <div style={{ marginTop: "15px" }}>
          <p style={{ textAlign: "justify" }}>
            Although Colvin is predominantly known for abstract themes that
            allude to pre-Hispanic symbols, this gigantic sculpture, an homage
            to neurosurgery, is one of her most recognizable public art pieces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default App;

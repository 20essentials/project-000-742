import { createRoot } from "react-dom/client";
import "materialize-css/dist/css/materialize.min.css";

const appStyles = {
  height: "100vh",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  placeContent: "center",
  backgroundColor: "#ffde00",
  fontFamily:
    "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
  WebkitTapHighlightColor: "transparent",
  position: "relative"
};

const rayStyles = {
  backgroundImage: "url('assets/rayo.webp')",
  backgroundRepeat: "no-repeat",
  width: "550px",
  height: "550px",
  animation: "circular 10s linear infinite",
  position: "relative"
};

const imgStyles = {
  aspectRatio: "1",
  height: "auto",
  zIndex: 2,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) scale(0.7)"
};

const App = () => {
  return (
    <>
      <style>{`
        @keyframes circular {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <div style={appStyles}>
        <img src="assets/gato.webp" alt="Gato" style={imgStyles} />
        <div id="ray" style={rayStyles}></div>
      </div>
    </>
  );
};

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(<App />);

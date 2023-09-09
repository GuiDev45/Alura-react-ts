import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import sytle from "./App.module.scss";

function App() {
  return (
    <div className={sytle.AppStyle}>
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;

import Botao from "../Button";
import style from "./Formulario.module.scss";

const Formulario = () => {
  return (
    <form className={style.novaTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      {/*Como Botao tem um children como tipo, o pai que no caso é o formulario, pode passar um um conteúdo dentro desse Botao*/}
      <Botao>Adicionar</Botao>
    </form>
  );
};

export default Formulario;

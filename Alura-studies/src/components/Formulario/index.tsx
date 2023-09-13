import React, { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Button/index";
import style from "./Formulario.module.scss";

function Formulario({
  setTarefas,
}: {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}) {
  const [state, setState] = useState({
    tarefa: "",
    tempo: "00:00",
  });

  const handleChange = (evento: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const adicionarTarefa = useCallback(
    (evento: FormEvent<HTMLFormElement>) => {
      evento.preventDefault();
      setTarefas((tarefasAntigas) => [...tarefasAntigas, { ...state }]);
    },
    [setTarefas, state],
  );

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={state.tarefa}
          onChange={handleChange}
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
          value={state.tempo}
          onChange={handleChange}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}

export default Formulario;

// Forma mais nova de criar um componente é utilizando a function
function Lista() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
    {
      tarefa: "TypeScript",
      tempo: "03:00:00",
    },
  ];
  return (
    <aside>
      <h2> Estudos do dia </h2>
      {/*Sempre quando for fazer um renderização de lista o react precisa de uma key, que no caso é o index, porém não é correto, o certo seria o item ter um id,o index pode ser variado e isso pode causar problemas logo não seria uma boa pratica*/}
      <ul>
        {tarefas.map((item, index) => (
          <li key={index}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;

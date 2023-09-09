/*
  Poderia ser um objeto de estilos como o exemplo abaixo
  const styles = {
    backgroundColor
  }

  em return
    <button style={styles}>
      Botão
    </button>
  */

// const color = "red";
// const backgroundColor = "red";
const Botao = () => {
  const estaAtivo = true;
  return (
    <button
      style={{
        // backgroundColor: color
        // Como não é possível usar if no objeto vai usar o ternario, lembrando que o inline style não é uma boa prática
        backgroundColor: estaAtivo ? "green" : "red",
      }}
    >
      Botão
    </button>
  );
};

export default Botao;

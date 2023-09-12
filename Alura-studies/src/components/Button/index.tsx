import botao from "./Botao.module.scss";

type botaoProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
};

const Botao = ({ children, type }: botaoProps) => {
  return (
    <button type={type} className={botao.botao}>
      {children}
    </button>
  );
};

export default Botao;

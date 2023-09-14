import botao from "./Botao.module.scss";

type botaoProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
};

const Botao = ({ children, type, onClick }: botaoProps) => {
  return (
    <button onClick={onClick} type={type} className={botao.botao}>
      {children}
    </button>
  );
};

export default Botao;

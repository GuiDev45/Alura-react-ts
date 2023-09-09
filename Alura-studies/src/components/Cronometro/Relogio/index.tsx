import style from "./Relogio.module.scss";

function Relogio() {
  return (
    // Como é obrigatorio sempre ter um elemento pai, o fragment é uma boa saída para não precisar colocar div ou section etc...
    <>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>0</span>
      <span className={style.relogioNumero}>0</span>
    </>
  );
}

export default Relogio;

import { useContext, useEffect, useState } from "react";

import userContext from "../../store/user-context";
import Form from "../../components/form/form";

import styles from "./imc.module.css";
import userFetchingData from "../api/userData";

function IMC(props) {
  const [situationState, setSituationState] = useState("");
  const [imcStyleState, setImcStyleState] = useState("");
  const ctxUser = useContext(userContext);

  const imcs = props.imcData;

  const { height, weight, CalcIMC } = ctxUser;
  const imc = imcs.filter(
    (imc) => CalcIMC() <= imc.maxIMC && CalcIMC() >= imc.minIMC
  )[0];
  const { situation = "", imcStyle = "" } = imc || {};

  useEffect(() => {
    //if (!ctxUser.email) router.replace("/");
  }, []);

  useEffect(() => {
    setSituationState(situation);
    setImcStyleState(imcStyle);
  }, [situation, imcStyle]);

  return (
    <section className={styles.imc_section}>
      <div className={styles.imc_content}>
        <Form
          height
          weight
          title="Calculadora de IMC"
          message="Preencha aqui os seus dados"
        />
        <div
          className={`${styles.imc_table_div} ${styles[`${imcStyleState}`]}`}
        >
          <h1>Resultado</h1>
          <h3>{`Peso: ${weight}kg | Altura: ${height}cm`}</h3>
          <h2 className={styles.result}>IMC: {CalcIMC()}</h2>
          <p>Categoria: {situationState}</p>
        </div>
      </div>
      <div className={styles.extra_content}>
        <div>
          <h1>
            Conte conosco <br /> para te ajudar a se manter <br /> sempre
            saudável!
          </h1>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps(){
  const imcData = await userFetchingData();

  return {
    props: {
      imcData
    },
    revalidate: 86400
  }
}

export default IMC;

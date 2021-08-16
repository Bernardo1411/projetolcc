import { useContext, useEffect } from "react";
import { useRouter } from "next/dist/client/router";

import userContext from "../../store/user-context";
import Form from "../../components/form/form";

import styles from "./imc.module.css";

function imc() {
  const ctxUser = useContext(userContext);
  const router = useRouter();

  const { height, weight, CalcIMC } = ctxUser;

  useEffect(() => {
    if (!ctxUser.email) router.replace("/");
  }, []);

  return (
    <section className={styles.imc_section}>
      <div className={styles.imc_table_div}>
        <h1>Seu resultado</h1>
        {/* {<table className={styles.imc_table}>
          <thead>
            <tr>
              <th>Altura</th>
              <th>Peso</th>
              <th>IMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{height}</td>
              <td>{weight}</td>
              <td>{CalcIMC()}</td>
            </tr>
          </tbody>
        </table>} */}
        <div className={styles.result}>{<h2>{CalcIMC()}</h2>}</div>
      </div>

      <Form
        height
        weight
        title="Calculadora de IMC"
        message="Preencha aqui os seus dados"
      />
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

export default imc;

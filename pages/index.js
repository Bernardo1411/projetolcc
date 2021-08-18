import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

import Backdrop from "../ui/backdrop/backdrop";

import styles from "../styles/Home.module.css";

function Home() {
  const [openForm, setOpenForm] = useState(false);

  const openFormHandler = () => {
    setOpenForm((currentState) => !currentState);
  };

  return (
    <Fragment>
      <section id={styles.introduction_section}>
        <div className={styles.introduction_section_content}>
          <h2>Você se sente saudável?</h2>
          <p>
            O IMC é a sigla para índice de massa corporal. Este índice serve
            para avaliar se a pessoa está dentro do seu peso ideal em relação à
            altura
          </p>
          <div className={styles.main_paragraph}>
            <p>Acesse a nossa calculadora para saber o seu IMC:</p>
            <a href="#secondery_content">
              <Image
                src="/images/icon-157361_1280.png"
                width="150px"
                height="150px"
              />
            </a>
          </div>
        </div>
      </section>
      <section id="secondery_content" className={styles.secondery_content}>
        <div className={styles.introduction_section_content}>
          <Image src="/images/963395.png" height="300px" width="300px" />
          <p>A melhor calculadora de IMC do Brasil!</p>
        </div>
        <div
          className={`${styles.introduction_section_content} ${styles.open_form}`}
        >
          <h2>Pronto para calcular o seu IMC?</h2>
          <button onClick={openFormHandler}>Sim!</button>
          <Image src="/images/3769406.png" height="200px" width="200px" />
        </div>
      </section>
      {openForm &&
        ReactDOM.createPortal(
          <Backdrop closeForm={openFormHandler} />,
          document.getElementById("backdropDestiny")
        )}
    </Fragment>
  );
}

export default Home;

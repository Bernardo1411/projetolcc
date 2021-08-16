import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Image from 'next/image';

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
            <Image src="/images/icon-157361_1280.png" width="150px" height="150px"/>
            </a>
          </div>
        </div>
      </section>
      <section id="secondery_content">
        <div>Você está pronto para mudar seus hábitos?</div>
        <div>
          <h2>Pronto para calcular o seu IMC?</h2>
          <button onClick={openFormHandler}>Calcular</button>
        </div>
      </section>
      {openForm &&
        ReactDOM.createPortal(
          <Backdrop />,
          document.getElementById("backdropDestiny")
        )}
    </Fragment>
  );
}

export default Home;

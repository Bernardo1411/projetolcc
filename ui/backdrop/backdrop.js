import Hoc from "../../hoc/hoc";
import Form from "../../components/form/form";

import styles from './backdrop.module.css';

function backdrop(props) {

  const closeFormHandler = () => {
    props.closeForm();
  }

  return (
    <div className={styles.backdrop}>
      <Hoc>
        <Form email password check birthday height weight showClose closeForm={closeFormHandler} title="Queremos conhecer você melhor!" message="Preencha os seus dados antes de prosseguir e faça parte da nossa comunidade."/>
      </Hoc>
    </div>
  );
}

export default backdrop;

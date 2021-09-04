import { Fragment } from "react";
import Form from "../../components/form/form";

import styles from "./signin.module.css";

function SignIn() {
  return (
    <Fragment>
      <section className={styles.login_section}>
        <Form
          email
          password
          title="Login"
          message="Insira seus dados para acessar a sua calculadora"
        />
      </section>
      <section></section>
    </Fragment>
  );
}

export default SignIn;

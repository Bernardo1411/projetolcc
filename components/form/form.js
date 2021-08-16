import { useRef, useContext } from "react";
import { useRouter } from "next/dist/client/router";

import userContext from "../../store/user-context";

import styles from "./form.module.css";

function Form(props) {
  const { email, password, check, birthday, height, weight, title, message, showClose} = props;

  const emailRef = useRef();
  const passwordRef = useRef();
  const checkRef = useRef();
  const birthdayRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();

  const ctxUser = useContext(userContext);

  const router = useRouter();

  const submitInputHandler = (event) => {
    event.preventDefault();
    if (!router.pathname.includes("imc")) router.replace("/imc");

    ctxUser.submitForm({
      email: emailRef.current?.value || ctxUser.email,
      password: passwordRef.current?.value || ctxUser.password,
      check: checkRef.current?.value || ctxUser.check,
      birthday: birthdayRef.current?.value || ctxUser.birthday,
      height: heightRef.current?.value || ctxUser.height,
      weight: weightRef.current?.value || ctxUser.weight,
    });
  };

  return (
    <section className={styles.section_form}>
      <div className={styles.section_form_title}>
        <h1>{title}</h1>
        <p>
          {message}
        </p>
      </div>
      <div className={styles.section_form_div}>
        <form
          onSubmit={submitInputHandler}
          className={styles.section_form_form}
        >
          <div className={styles.personal_data}>
            {birthday && (
              <div>
                <label htmlFor="birthday">Data de nascimento: </label>
                <input type="date" id="birthday" required ref={birthdayRef} />
              </div>
            )}
            {height && (
              <div>
                <label htmlFor="height">Altura (cm): </label>
                <input
                  type="number"
                  id="height"
                  required
                  ref={heightRef}
                  min="30"
                  max="250"
                />
              </div>
            )}
            {weight && (
              <div>
                <label htmlFor="weight">Peso (kg): </label>
                <input
                  type="number"
                  id="weight"
                  required
                  ref={weightRef}
                  min="1"
                  max="750"
                />
              </div>
            )}
          </div>
          {email && (
            <div className={styles.form_label}>
              <label htmlFor="email">E-mail: </label>
              <input type="email" id="email" required ref={emailRef} />
            </div>
          )}
          {password && (
            <div className={styles.form_label}>
              <label htmlFor="passowrd">Password: </label>
              <input
                type="password"
                className={styles.password}
                id="password"
                required
                ref={passwordRef}
                minLength="6"
                maxLength="21"
              />
            </div>
          )}
          {check && (
            <div className={styles.check_input}>
              <input type="checkbox" id="check" name="true" ref={checkRef} />
              <label htmlFor="check">
                Gostaria de me manter atualizado quanto aos melhores produtos
                para emagrecimento
              </label>
            </div>
          )}
          <div className={styles.group_button}>
            <button className={styles.send_button}>Enviar</button>
            {showClose && <button className={styles.send_button} onClick={props.closeForm}>
              Sair
            </button>}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;

import { useRef, useContext } from "react";
import { useRouter } from "next/dist/client/router";

import userContext from "../../store/user-context";

function form(props) {
  const { email, password, check, birthday, height, weight } = props;

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
    if (!router.pathname.includes('imc')) router.push("imc");

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
    <section>
      <div>
        <h1>Your Data</h1>
        <p>Insert your data in order to proceed</p>
      </div>
      <div>
        <form onSubmit={submitInputHandler}>
          {birthday && (
            <div>
              <label htmlFor="birthday">Data de nascimento</label>
              <input type="date" id="birthday" required ref={birthdayRef} />
            </div>
          )}
          {height && (
            <div>
              <label htmlFor="height">Altura (cm)</label>
              <input type="number" id="height" required ref={heightRef} />
            </div>
          )}
          {weight && (
            <div>
              <label htmlFor="weight">Peso (kg)</label>
              <input type="number" id="weight" required ref={weightRef} />
            </div>
          )}
          {email && (
            <div>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" required ref={emailRef} />
            </div>
          )}
          {password && (
            <div>
              <label htmlFor="passowrd">Password</label>
              <input type="password" id="password" required ref={passwordRef} />
            </div>
          )}
          {check && (
            <div>
              <input type="checkbox" id="check" name="true" ref={checkRef} />
              <label htmlFor="check">
                Gostaria de me manter atualizado quanto aos melhores produtos
                para emagrecimento
              </label>
            </div>
          )}
          <button>Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default form;

import { useContext, useEffect } from "react";
import { useRouter } from "next/dist/client/router";

import userContext from "../../store/user-context";
import Form from "../../components/form/form";

function imc() {
  const ctxUser = useContext(userContext);
  const router = useRouter();

  const { height, weight, CalcIMC } = ctxUser;

  useEffect(() => {
    if (!ctxUser.email) router.replace("/");
  }, []);

  return (
    <section>
      <h1>Seu resultado</h1>
      <div>
        <table>
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
        </table>
      </div>
      <Form height weight />
    </section>
  );
}

export default imc;

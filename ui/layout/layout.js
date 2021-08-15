import { Fragment } from "react";
import Link from "next/link";

function Layout(props) {
  return (
    <Fragment>
      <h1>Calculadora de IMC</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/imc">
              <a>Calculadora</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{props.children}</main>
      <footer>
        <h3>
          Receba nossas notificações e fique por dentro de todas as dicas sobre
          emagrecimento
        </h3>
      </footer>
    </Fragment>
  );
}

export default Layout;

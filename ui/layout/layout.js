import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <h1>Calculadora de IMC</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Calculadora</li>
        </ul>
      </nav>
      <main>{props.children}</main>
      <footer>
        <h3>Receba nossas notificações e fique por dentro de todas as dicas sobre emagrecimento</h3>
      </footer>
    </Fragment>
  );
}

export default Layout;

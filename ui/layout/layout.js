import { Fragment } from "react";
import Link from "next/link";

import styles from './layout.module.css';

function Layout(props) {
  return (
    <Fragment>
      <nav className={styles.main_header}>
      <h1>IMC</h1>
        <ul className={styles.nav_list}>
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
      <main className={styles.main_page}>{props.children}</main>
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

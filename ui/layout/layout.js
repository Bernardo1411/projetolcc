import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./layout.module.css";

function Layout(props) {
  return (
    <Fragment>
      <nav className={styles.main_header}>
        <h1>
          IMC{" "}
          <Image
            src="/images/calculator-svgrepo-com.svg"
            height="25px"
            width="25px"
          />
        </h1>
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
      <footer className={styles.page_footer}>
        <ul className={styles.nav_list}>
          <li>Nossos princípios: </li>
          <li>Confiança</li>
          <li>Informação</li>
          <li>Saúde</li>
          <li>Lazer</li>
        </ul>
      </footer>
    </Fragment>
  );
}

export default Layout;

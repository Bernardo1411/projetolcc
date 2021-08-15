import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <h1>Titulo</h1>
      <nav>
        <ul>
          <li>Lista1</li>
          <li>Lista2</li>
        </ul>
      </nav>
      <main>{props.children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </Fragment>
  );
}

export default Layout;

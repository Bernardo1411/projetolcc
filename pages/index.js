import { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import Backdrop from "../ui/backdrop/backdrop";

function Home() {
const [openForm, setOpenForm] = useState(false);

const openFormHandler = () => {
  setOpenForm(currentState => !currentState)
}

  return (
    <Fragment>
      <section>
        <h1>Main Page</h1>
        <div>
          <h2>Pronto para calcular o seu IMC?</h2>
          <button onClick={openFormHandler}>Calcular</button>
        </div>
      </section>
      <section>
        <h1>Adjacent content</h1>
      </section>
      {openForm && ReactDOM.createPortal(<Backdrop/>, document.getElementById("backdropDestiny"))}
    </Fragment>
  );
}

export default Home;

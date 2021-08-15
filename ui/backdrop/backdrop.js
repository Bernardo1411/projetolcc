import Hoc from "../../hoc/hoc";
import Form from "../../components/form/form";

function backdrop() {
  return (
    <div>
      <Hoc>
        <Form email password check birthday height weight />
      </Hoc>
    </div>
  );
}

export default backdrop;

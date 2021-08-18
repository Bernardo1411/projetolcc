import { createContext, useState } from "react";

const userContext = createContext({
  email: "",
  password: "",
  check: "",
  birthday: "",
  height: 0,
  weight: 0,
  submitForm: () => {},
  CalcIMC: () => {}
});

export function UserContextProvider(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState("");
  const [birthday, setBirthday] = useState("");
  const [height, setheight] = useState(0);
  const [weight, setWeight] = useState(0);

  const submitForm = (formData) => {
    formData.email && setEmail(formData.email);
    formData.password && setPassword(formData.password);
    formData.check && setCheck(formData.check);
    formData.birthday && setBirthday(formData.birthday);
    formData.height && setheight(formData.height);
    formData.weight && setWeight(formData.weight);
  };

  const CalcIMC = () => Math.floor(weight/((height/100)**2));

  const context = {
    email,
    password,
    check,
    birthday,
    height,
    weight,
    submitForm,
    CalcIMC
  };

  return (
    <userContext.Provider value={context}>
      {props.children}
    </userContext.Provider>
  );
}

export default userContext;

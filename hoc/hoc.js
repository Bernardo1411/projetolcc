import { Fragment } from "react";

export default function Hoc(props) {
  return <Fragment>{props.children}</Fragment>;
}

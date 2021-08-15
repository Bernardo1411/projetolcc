import { Fragment } from "react";

export default function hoc(props) {
  return <Fragment>{props.children}</Fragment>;
}

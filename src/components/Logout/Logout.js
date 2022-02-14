import { useEffect } from "react";

export default function Logout(props) {
  useEffect(() => {
    sessionStorage.clear();
    props.history.push("/");
  }, [props.history]);

  return null;
}

import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    sessionStorage.clear();
    window.location = "/";
  }, []);

  return null;
}

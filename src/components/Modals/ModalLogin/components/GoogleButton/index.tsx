import Google from "./google.svg";
import React from "react";

interface GoogleButtonInterface {
  signInWithGoogle: () => void;
}
export const GoogleButton = ({ signInWithGoogle }: GoogleButtonInterface) => {
  return (
    <img
      src={Google}
      onClick={signInWithGoogle}
      width={46}
      style={{ cursor: "pointer" }}
    />
  );
};

import Google from "./google.svg";
import React from "react";

export const GoogleButton = ({ signInWithGoogle }: any) => {
  return (
    <img
      src={Google}
      onClick={signInWithGoogle}
      width={46}
      style={{ cursor: "pointer" }}
    />
  );
};

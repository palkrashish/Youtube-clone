import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Shorts" />
      <Button name="Gaming" />
      <Button name="Live" />
      <Button name="Songs" />
      <Button name="Cricket" />
      <Button name="News" />
      <Button name="Cooking" />
      <Button name="Comedy" />
    </div>
  );
};

export default ButtonList;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";

const Button = ({ isOutLine, icon, text }) => {
  return (
    <button className={isOutLine ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
};

export default Button;

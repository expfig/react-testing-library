/**
 * IMPORTS
 */
import React from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  titleLabel?: string;
}

const Input = ({ titleLabel, ...res }: IInputProps) => {
  return (
    <input
      {...res}
      style={styles.input}
      autoComplete="off"
    />
  );
};

const styles = {
  title: {
    color: "#fff",
  },
  input: {
    width: "98.4%",
    height: 40,
    border: "1px solid #cdcdcd",
    borderRadius: 6,
    paddingLeft: 16,
    marginBottom: 16,
  },
};
/**
 * EXPORTS
 */
export { Input };

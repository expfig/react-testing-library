/**
 * IMPORTS
 */
import React from "react"

interface IButtonProps {
  title: string;
  disabled: boolean;
  onClick: (React.MouseEventHandler<HTMLButtonElement> | undefined);
  isLoading?: boolean;
};

const Button  = ({title, onClick, disabled, isLoading = false}: IButtonProps) => {
  return(
    <button type="button" disabled={disabled} onClick={onClick} style={styles.button}>
        <span style={styles.title}>{title ? `${isLoading ? "Carregando": title }` : "Button"}</span>
    </button>
  )
};

const styles = {
  title: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500'
  },
  button:{
    width: "100%",
    background: 'blue', 
    borderRadius: 6, 
    padding: 8,
    border: '1px solid blue',
    cursor: 'pointer'
  }
}
/**
 * EXPORTS
 */
export {
  Button
}
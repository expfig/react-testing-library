/**
 * IMPORTS
 */
import React from "react"


interface IButtonProps {
  title: string;
  disabled: boolean;
  onClick: (React.MouseEventHandler<HTMLButtonElement> | undefined) ;
};


const Button  = ({title, onClick, disabled}: IButtonProps) => {
  return(
    <button type="button" disabled={disabled} onClick={onClick} style={styles.button}>
      <span style={styles.title}>{title ? title : "Button"}</span>
    </button>
  )
};


const styles = {
  title: {
    color: '#fff'
  },
  button:{
    width: 300,
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
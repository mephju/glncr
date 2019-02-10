import React from 'react'
import classes from './Button.module.css';

interface Props {
  onClick: (e: React.MouseEvent) => void,
  children: any,
}

const Button = (props: Props) => {
  return <button
    className={classes.button}
    {...props}>

    {props.children}

  </button>
}

export default Button
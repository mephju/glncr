import React, { PureComponent } from 'react'
import classes from './ListItem.module.css'

interface Props {
  children: any
}

const ListItem = ({children}: Props) => {

  return <li className={classes.listItem}> {children} </li>

}

export default ListItem
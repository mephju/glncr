import React from 'react'

interface Props {
  children: any
}

const ListItem = ({children}: Props) => {

  return <li> {children} </li>

}

export default ListItem
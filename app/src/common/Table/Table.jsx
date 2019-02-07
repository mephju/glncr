import React from 'react'
import PropTypes from 'prop-types'

const Table = props => {

  return <table>
    <thead>
      <tr>
        {props.headers.map(header => (
          <th>
            {header}
          </th>
        ))}
      </tr>
    </thead>

    <tbody>
      {props.children}
    </tbody>

  </table>
}

Table.propTypes = {
  headers: PropTypes.array.isRequired,
  children: PropTypes.any.isRequired,
}

export default Table
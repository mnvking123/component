import React from 'react'

export const Comp = (props) => {
  return (
    <div>

        <h2>hello , {props.name}</h2>
        <h2>you are currently logged in {props.role}</h2>
        <h2>your mail {props.email}</h2>

    </div>
  )
}

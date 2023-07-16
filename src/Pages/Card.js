import React from 'react'

function Card(props) {
  return (
    <>
  
        <div className="Card">
        <b>UserId :</b> {props.data.userId}
        <br/>
        <b>id :</b> {props.data.id}
        <br/>
        <b>Title:</b>  {props.data.title}
        <br/>
        <b>completed :</b>  {props.data.completed}
      
    </div>
    </>
  )
}

export default Card

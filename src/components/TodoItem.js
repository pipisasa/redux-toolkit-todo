//? rfce - React Function Component
//? rce -  React Class Component

import React, { useState } from 'react'

function TodoItem(props) {
  
  const [title, setTitle] = useState(props.item.title);
  const [isEdit, setEdit] = useState(false);

  const classList = ["todo-list__item"];
  if(props.item.status){
    classList.push("checked");
  }

  const handleDelete = (e)=>{
    e.stopPropagation();
    props.deleteTodo(props.item.id)
  }
  
  const handleEditClick = (e)=>{
    e.stopPropagation();
    setEdit(!isEdit)
  }

  const handleEditSubmit = (e)=>{
    e.preventDefault();
    props.editTodo({
      ...props.item,
      title,
    })
    setEdit(false)
  }
  const handleEditInput = (e)=>{
    // console.log(e.target.value);
    setTitle(e.target.value);
  }
  return (
    <li 
      onClick={()=>props.changeStatus(props.item.id)} 
      className={classList.join(" ")}
    >
      <div>
        {isEdit ? (
          <form className="edit-form" onClick={e=>e.stopPropagation()} onSubmit={handleEditSubmit}>
            <input 
              className="edit-inp"
              value={title} 
              onChange={handleEditInput} 
              type="text" 
              required
            />
            <div>
              <button className="edit-form-btn" type="submit">Submit</button>
              <button className="edit-form-btn" onClick={()=>setEdit(false)} type="reset">Cancel</button>
            </div>
          </form>
        ) : (
          props.item.title
        )}
      </div>
      <div>
        <button onClick={handleEditClick} className="btn-edit todo-item__btn">
          &#x270E;
        </button>
        <button onClick={handleDelete} className="btn-del todo-item__btn">
          &#x2716;
        </button>
      </div>
    </li>
  )
}

export default TodoItem

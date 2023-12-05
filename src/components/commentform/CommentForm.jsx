import React, { useState } from 'react'

const CommentForm = () => {
 const [text,setText] = useState("");
 const [checked,setChecked] =  useState(false);

  return (
    <div>
      <h1>Comment Form</h1>
      <input placeholder='write your comment here' value={text} onChange={e =>setText(e.target.value)}/>
      <input id='checkbox' type='checkbox' defaultChecked={checked}
      onChange={()=>setChecked(!checked)}/>
      <label htmlFor='checkbox'>I agree to terms an condition</label>
      <button disabled={!checked || !text} onClick={()=>console.log('clicked')}>
       comment
      </button>
     
    </div>
  )
}

export default CommentForm

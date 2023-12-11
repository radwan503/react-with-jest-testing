import React from 'react'

const CommentList = ({allcomments}) => {
 if(allcomments?.length == 0){
  return <div>No Comments</div>
 }
  return (
    <div>
     <ul>
      {
       allcomments.map((item)=>{
        return <li key={item.id}>{item.text}</li>
       })
      }
     </ul>
      
    </div>
  )
}

export default CommentList

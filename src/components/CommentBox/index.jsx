import { useState } from 'react'
import Button from "components/Button"
import Header from "components/Header"
import Text from "components/Text"

const CommentBox = ({ setList, list }) => {
 const [comment, setComment] = useState('');
 return (
  <div className="commentBox">
   <Header text="Comment Box" />
   <Text setComment={setComment} comment={comment} />
   <div className="comment">
    <code>{comment}</code>
   </div>
   <Button comment={comment} setComment={setComment} setList={setList} list={list} />
  </div>
 )
}

export default CommentBox

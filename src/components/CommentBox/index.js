import { useState } from 'react'
import Button from "components/Button"
import Header from "components/Header"
import Text from "components/Text"

const CommentBox = () => {
 const [comment, setComment] = useState('');
 return (
  <div>
   <Header text="Comment Box"/>
   <Text setComment={setComment} comment={comment}  />
   <p>Your comment: {comment}</p>
   <Button setComment={setComment} />
  </div>
 )
}

export default CommentBox

const Button = ({setComment}) => {
 return (
  <button onClick={() => setComment('')}>
   Add Comment
  </button>
 )
}

export default Button

const Input = ({value, onSubmit, onChange}) => {
  return (
  <form onSubmit={onSubmit}>
    <input value={value} onChange={onChange} type="text" placeholder="Enter your todo here..." />
    <button type='submit'>Add todo</button>
  </form>
  )
}

export default Input
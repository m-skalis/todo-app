import './TodoForm.css';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';

const TodoForm = ({ value, onSubmit, onChange }) => {
  return (
    <div className="todo-form-wrapper">
      <form className="todo-form" onSubmit={onSubmit}>
        <div className="input-container">
          <EditOutlined className="input-icon" />
          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="Enter your todo here..."
            className="todo-input"
          />
        </div>
        <button type="submit" className="submit-button">
          <PlusOutlined className="button-icon" />
          Add todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

import './TodoList.css';
import FilterTodos from '../FilterTodos/FilterTodos';
import { useState, useEffect } from 'react';
import {
  DeleteOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  EditOutlined,
  ClearOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';

const TodoList = ({
  toggleComplete,
  todos,
  deleteTodo,
  moveUp,
  moveDown,
  runFilter,
  clearAll,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5;

  // Reset pagination when todos change (especially when cleared)
  useEffect(() => {
    if (!todos || todos.length === 0) {
      setCurrentPage(1);
    } else {
      // If current page is beyond available pages, reset to last page
      const maxPages = Math.ceil(todos.length / todosPerPage);
      if (currentPage > maxPages) {
        setCurrentPage(Math.max(1, maxPages));
      }
    }
  }, [todos, currentPage, todosPerPage]);

  // Calculate pagination with better error handling
  const safeClientTodos = todos || [];
  const totalPages = Math.ceil(safeClientTodos.length / todosPerPage);
  const startIndex = (currentPage - 1) * todosPerPage;
  const endIndex = startIndex + todosPerPage;
  const currentTodos = safeClientTodos.slice(startIndex, endIndex);

  // Reset to first page when todos change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Handle moving items with pagination context
  const handleMoveUp = (index) => {
    const actualIndex = startIndex + index;
    moveUp(actualIndex);
  };

  const handleMoveDown = (index) => {
    const actualIndex = startIndex + index;
    moveDown(actualIndex);
  };
  return (
    <div className="todo-list-container">
      <div className="todo-list-header">
        <h2 className="todo-list-title">
          <CheckCircleOutlined className="title-icon" />
          Your Tasks
        </h2>

        <div className="todo-stats">
          <span className="todo-count">
            {safeClientTodos.length}{' '}
            {safeClientTodos.length === 1 ? 'task' : 'tasks'}
          </span>
          <span className="completed-count">
            {safeClientTodos.filter((todo) => todo.completed).length} completed
          </span>

          {safeClientTodos.length > 0 && (
            <button
              className="clear-all-btn"
              onClick={clearAll}
              title="Delete all tasks and clear storage"
            >
              <ClearOutlined className="clear-icon" />
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Filter Component */}
      <div className="filter-section">
        <FilterTodos runFilter={runFilter} />
      </div>

      <ul className="todo-list">
        {currentTodos && currentTodos.length > 0 ? (
          currentTodos.map((todo, index) => {
            const actualIndex = startIndex + index;
            return (
              <div className="todo-container" key={todo.id}>
                <li
                  onClick={() => toggleComplete(todo.id)}
                  className={`todo-item ${
                    todo.completed ? 'completed' : 'pending'
                  }`}
                >
                  <div className="todo-content">
                    <div className="todo-icon">
                      {todo.completed ? (
                        <CheckCircleOutlined className="status-icon completed-icon" />
                      ) : (
                        <ClockCircleOutlined className="status-icon pending-icon" />
                      )}
                    </div>
                    <span className="todo-text">{todo.text}</span>
                  </div>
                </li>

                <div className="todo-actions">
                  <button className="action-btn edit-btn" title="Edit task">
                    <EditOutlined />
                  </button>

                  <button
                    className="action-btn move-btn move-up"
                    onClick={() => handleMoveUp(index)}
                    disabled={actualIndex === 0}
                    title="Move up"
                  >
                    <ArrowUpOutlined />
                  </button>

                  <button
                    className="action-btn move-btn move-down"
                    onClick={() => handleMoveDown(index)}
                    disabled={actualIndex === safeClientTodos.length - 1}
                    title="Move down"
                  >
                    <ArrowDownOutlined />
                  </button>

                  <button
                    className="action-btn delete-btn"
                    onClick={() => deleteTodo(todo.id)}
                    title="Delete task"
                  >
                    <DeleteOutlined />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-state">
            <ClockCircleOutlined className="empty-icon" />
            <p className="empty-message">No tasks yet!</p>
            <p className="empty-subtitle">Add your first task to get started</p>
          </div>
        )}
      </ul>

      {/* Pagination Controls */}
      {safeClientTodos.length > todosPerPage && (
        <div className="pagination-container">
          <div className="pagination-info">
            Showing {startIndex + 1}-
            {Math.min(endIndex, safeClientTodos.length)} of{' '}
            {safeClientTodos.length} tasks
          </div>

          <div className="pagination-controls">
            <button
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              title="Previous page"
            >
              <LeftOutlined />
              Previous
            </button>

            <div className="pagination-pages">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    className={`pagination-page ${
                      page === currentPage ? 'active' : ''
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              className="pagination-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              title="Next page"
            >
              Next
              <RightOutlined />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;

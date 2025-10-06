import './filterTodos.css';
import { SearchOutlined } from '@ant-design/icons';

export const FilterTodos = ({ runFilter }) => (
  <div className="filter-container">
    <div className="filter-wrapper">
      <SearchOutlined className="filter-icon" />
      <input
        className="filter-input"
        type="text"
        placeholder="Search your todos..."
        onChange={runFilter}
      />
    </div>
  </div>
);

export default FilterTodos;

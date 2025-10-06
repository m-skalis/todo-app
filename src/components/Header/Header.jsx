import './Header.css';
import { StarFilled } from '@ant-design/icons';

const Header = () => (
  <header className="header">
    <div className="header-content">
      <h1 className="header-title">
        <span className="title-text">Welcome to your</span>
        <span className="title-highlight">Todos Board</span>
        <span className="star-container">
          <StarFilled className="star-icon" />
          <StarFilled className="star-icon star-icon-2" />
          <StarFilled className="star-icon star-icon-3" />
        </span>
      </h1>
      <p className="header-subtitle">Organize your tasks with style ✨</p>
    </div>
    <div className="header-decoration">
      <div className="decoration-line"></div>
      <div className="decoration-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="decoration-line"></div>
    </div>
  </header>
);

export default Header;

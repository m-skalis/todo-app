import { Link, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  CheckSquareOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <HomeOutlined /> },
    { path: '/todos', label: 'Todos', icon: <CheckSquareOutlined /> },
    { path: '/about', label: 'About', icon: <InfoCircleOutlined /> },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <CheckSquareOutlined className="logo-icon" />
          TodoMaster
        </Link>

        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                {item.icon}
                <span className="nav-text">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

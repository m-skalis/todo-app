import { Link } from 'react-router-dom';
import {
  CheckCircleOutlined,
  RocketOutlined,
  StarFilled,
} from '@ant-design/icons';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to TodoMaster
            <StarFilled className="hero-star" />
          </h1>
          <p className="hero-subtitle">
            Organize your life, one task at a time. Beautiful, intuitive, and
            powerful.
          </p>
          <div className="hero-actions">
            <Link to="/todos" className="cta-button primary">
              <RocketOutlined className="button-icon" />
              Get Started
            </Link>
            <Link to="/about" className="cta-button secondary">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 className="features-title">Why Choose TodoMaster?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <CheckCircleOutlined className="feature-icon" />
            <h3>Smart Organization</h3>
            <p>
              Keep track of all your tasks with our intuitive interface and
              smart filtering.
            </p>
          </div>
          <div className="feature-card">
            <RocketOutlined className="feature-icon" />
            <h3>Boost Productivity</h3>
            <p>
              Get more done with features like pagination, move tasks, and quick
              actions.
            </p>
          </div>
          <div className="feature-card">
            <StarFilled className="feature-icon" />
            <h3>Beautiful Design</h3>
            <p>
              Enjoy a modern, responsive interface that looks great on any
              device.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

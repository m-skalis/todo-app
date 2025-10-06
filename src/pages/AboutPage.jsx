import { TeamOutlined, CodeOutlined, HeartFilled } from '@ant-design/icons';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="about-title">About TodoMaster</h1>
        <p className="about-subtitle">
          Built with passion for productivity and beautiful design
        </p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <div className="section-icon">
            <TeamOutlined />
          </div>
          <h2>Our Mission</h2>
          <p>
            We believe that staying organized shouldn't be complicated.
            TodoMaster was created to provide a simple, beautiful, and powerful
            way to manage your daily tasks and long-term goals.
          </p>
        </div>

        <div className="about-section">
          <div className="section-icon">
            <CodeOutlined />
          </div>
          <h2>Technology</h2>
          <p>
            Built with modern web technologies including React, Vite, and Ant
            Design. Our app is fast, responsive, and provides an excellent user
            experience across all devices.
          </p>
        </div>

        <div className="about-section">
          <div className="section-icon">
            <HeartFilled />
          </div>
          <h2>Made with Love</h2>
          <p>
            Every feature is carefully crafted with attention to detail. From
            the smooth animations to the intuitive user interface, we've put our
            heart into making TodoMaster the best it can be.
          </p>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat-item">
          <h3>100%</h3>
          <p>Free to Use</p>
        </div>
        <div className="stat-item">
          <h3>∞</h3>
          <p>Unlimited Tasks</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>Available Offline</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

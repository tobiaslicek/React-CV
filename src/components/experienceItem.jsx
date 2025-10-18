const ExperienceItem = ({ icon, title, period }) => {
  return (
    <li className="work-item">
      <img src={icon} className="work-item-icon" alt="Ikona pozice" />
      <div className="work-item-content">
        <span className="work-item-title">{title}</span>
        <span className="work-item-period">{period}</span>
      </div>
    </li>
  );
};

export default ExperienceItem;

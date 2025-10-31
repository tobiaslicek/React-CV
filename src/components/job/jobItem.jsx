import './jobItem.css';

const JobItem = ({ icon, title, period, ...props }) => {
  return (
    <li className="work-item" {...props}>
      <img src={icon} alt="ikona práce" className="work-item-icon" />
      <div className="work-item-content">
        <span className="work-item-title">{title}</span>
        <span className="work-item-period">{period}</span>
      </div>
    </li>
  );
};

export default JobItem;

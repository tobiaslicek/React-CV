import './jobModalContent.css';

const JobModalContent = ({ description, skills }) => {
  return (
    <div className="job-modal-content-container">
      <p className="job-modal-content-description">{description}</p>
      <ul className="job-modal-content-skills-list">
        {skills.map((skill, index) => (
          <li className="job-modal-content-skill-item" key={index}>
            <span className="skill-item">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobModalContent;

import './skills.css';

const SkillList = ({ skills }) => {
  return (
    <ul className="skill-list">
      {skills.map((skillData, i) => (
        <li className="skill-item" key={i}>
          {skillData}
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
import "./sections.css"

const CvSection = ({ title, children }) => {
  return (
    <section className="cv-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default CvSection;

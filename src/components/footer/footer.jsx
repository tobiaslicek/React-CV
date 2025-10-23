import './footer.css';

const Footer = () => {
  return (
    <footer className="cv-footer">
      <a
        href="https://github.com/tobiaslicek"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <span className="sep">|</span>
      <a
        href="https://www.linkedin.com/in/tobiaslicek"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </footer>
  );
};

export default Footer;

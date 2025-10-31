import Links from '../links/links';
import './footer.css';

const Footer = ({ links }) => {
  return (
    <footer className="cv-footer">
      <Links links={links} />
    </footer>
  );
};

export default Footer;

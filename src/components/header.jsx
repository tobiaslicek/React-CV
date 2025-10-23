import React from 'react';

const Header = ({ name, contacts }) => {
  return (
    <header className="cv-header">
      <h1 className="cv-name">{name || 'Jan Novák'}</h1>
      <p className="cv-contact">
        {contacts ||
          '📧 jan.novak@example.com | ☎️ +420 777 888 999 | 🌐 www.jannovak.cz'}
      </p>
      <img
        className="cv-photo"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="Profilová fotka"
      />
    </header>
  );
};

export default Header;

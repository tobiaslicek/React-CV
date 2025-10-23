import React from 'react';

const Header = ({ name, contacts }) => {
  return (
    <header className="cv-header">
      <h1 className="cv-name">{name || 'Tobiáš Licek'}</h1>
      <p className="cv-contact">
        {contacts ||
          '📧 tobiaslicek@seznam.cz | ☎️ +420 732 633 936 | 🌐 www.tobiaslicek.cz'}
      </p>
      <img
        className="cv-photo"
        src="images/profile.jpeg"
        alt="Profilová fotka"
      />
    </header>
  );
};

export default Header;

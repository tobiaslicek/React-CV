import { useContext } from 'react';

import AppDataContext from '../../utils/context/appDataContext';

import './profile.page.css';

const ProfilePage = () => {
  const { appData } = useContext(AppDataContext);

  const { personalInfo } = appData;

  return (
    <main className="profile-page">
      <div className="profile-wrapper">
        <img
          className="profile-photo"
          src={personalInfo.photoSrc}
          alt={personalInfo.name}
        />
        <div className="profile-content">
          <h2>{personalInfo.name}</h2>
          <p className="profile-desc">
            Jsem frontend developer se zájmem o moderní webové technologie,
            přehled o UX a zkušenost s Reactem. Rád tvořím přehledné uživatelské
            rozhraní a učím se nové nástroje.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;

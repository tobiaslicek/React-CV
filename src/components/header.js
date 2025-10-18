import React from "react";

const Header = ({name, contacts}) => {
    return React.createElement(
        'header',
        {
            className: 'cv-header'
        },
        [
            React.createElement(
                'h1',
                {
                    className: 'cv-name'
                },
                "Jan Novák"
            ),
            React.createElement(
                "p",
                {
                    key: "contact",
                    className: "cv-contact",
                },
                "📧 jan.novak@example.com | ☎️ +420 777 888 999 | 🌐 www.jannovak.cz"
            ),
            React.createElement(
                'img',
                {
                    className: 'cv-photo',
                    src: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
                    alt: "Profilová fotka"
                }
            )
        ],
    )
}

export default Header;
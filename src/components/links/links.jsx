import { Fragment } from 'react';

const Links = ({ links }) => {
  return (
    <Fragment>
      {links.map((linkData, i) => {
        return (
          <a
            key={i}
            href={linkData.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkData.label}
          </a>
        );
      })}
    </Fragment>
  );
};

export default Links;

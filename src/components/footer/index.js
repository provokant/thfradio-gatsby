import React from 'react';
import { Link } from 'gatsby';

import NavigationFooter from './../navigation/nav-footer';
import Container from './../container';
import LogoDark from '../logo/logo-dark';

import './footer.scss';
import useAllStaticLinks from './footer-hook-use-all-static-links';

export const Footer = () => {
  const { allLinksByLang } = useAllStaticLinks();
  const staticPageLinks = allLinksByLang('de').map(({ path, context }) => {
    return <Link to={path}>{context.title}</Link>;
  });

  return (
    <footer className="footer">
      <Container>
        <div className="footer__nav">
          <div className="footer__nav__main">
            <NavigationFooter />
          </div>
          {staticPageLinks && (
            <div className="footer__nav__main">
              {' '}
              <ul>
                {staticPageLinks.map((link, n) => (
                  <li key={n}>{link}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* <div className="footer__logo">
          <LogoDark isInverted/>
        </div> */}
      </Container>
      <Container>
        <div className="footer__credits">
          This website was developed by{' '}
          <a href="//dailysh.it" target="_blank" rel="noopener noreferrer">
            <nobr>NEXT LEVEL SHIT</nobr>
          </a>{' '}
          using open source software. <br></br>
          The{' '}
          <a href="//github.com/nextlevelshit/nls-gatsby-thfradio">
            code is freely available on GitHub
          </a>
          .
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Avnish Kumar</h1>
          <PText>
            An Aspiring Computer Science Engineer and A Proud Geek from
            Abulhasanpur,Vaishali,Bihar.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+917700801472',
                path: 'tel:+917700801472',
              },
              {
                title: 'avnishgolu927@gmail.com',
                path: 'mailto:avnishgolu927@gmail.com',
              },
              {
                title: 'Abul Hasanpur, Vaishali,Bihar',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/avnishaks/',
              },
              {
                title: 'Git-Hub',
                path: 'https://github.com/avnishaks',
              },
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/kumar.avnish.aks',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/avnish_aks',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/avnishaks/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2022 - Avnish Kumar</PText>
        </div>
      </div>
    </FooterStyle>
  );
}

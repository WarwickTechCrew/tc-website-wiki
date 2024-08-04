import React from 'react';
import externalLinks from '@site/external-links';
import { FiExternalLink, FiInstagram } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import styles from './styles.module.css';

function Footer(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`bg-black text-white pt-4 pb-8 px-8 text-center ${styles.footer}`}
    >
      <div className="p-4 max-w-screen-2xl mx-auto text-sm mb-2">
        <p className="mb-1">Warwick Tech Crew</p>
        <a href="/" className="block w-fit mx-auto">
          <img
            src="/logo-dark.svg"
            alt="Tech Crew Logo"
            className="w-20 h-auto mx-auto"
          />
        </a>
      </div>

      <div className="max-w-screen-md mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-sm">
        <ul>
          <li className="text-base">
            <strong>Navigation</strong>
          </li>
          <li>
            <a href="/wiki">Tech Crew Wiki</a>
          </li>
          <li>
            <a href="/shows">Shows</a>
          </li>
          <li>
            <a href="/hires">Hires</a>
          </li>
          <li>
            <a href="/opportunities">Get Involved</a>
          </li>
        </ul>

        <ul>
          <li className="text-base">
            <strong>External Links</strong>
          </li>
          {externalLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
              <FiExternalLink className="ml-1 mb-1" />
            </li>
          ))}
        </ul>

        <ul>
          <li className="text-base">
            <strong>SU & Socials</strong>
          </li>
          <li>
            <img
              src="/icons/warwick-su.svg"
              className="inline h-3 w-auto mr-1.5"
            />
            <a
              href="https://www.warwicksu.com/societies-sports/societies/techcrew/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Warwick SU
            </a>
          </li>
          <li>
            <FiInstagram className="mr-1.5" />
            <a
              href="https://www.instagram.com/warwicktechcrew"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <FaTiktok className="mr-1.5" />
            <a
              href="https://www.tiktok.com/@warwicktechcrew"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
          </li>
        </ul>
      </div>

      <div className="text-xs">
        <p>Warwick Tech Crew &copy; {year}.</p>
        <p>
          Site by Josh Heng and available on{' '}
          <a
            href="https://github.com/WarwickTechCrew/website"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);

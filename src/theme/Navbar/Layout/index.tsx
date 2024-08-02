import React, { type ComponentProps, useState } from 'react';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import type { Props } from '@theme/Navbar/Layout';

import { useLocation } from '@docusaurus/router';
import { useScrollPosition } from '@docusaurus/theme-common/internal';

function NavbarBackdrop(props: ComponentProps<'div'>) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx('navbar-sidebar__backdrop', props.className)}
    />
  );
}

function useTransparentNavbar(enabled: boolean) {
  const [transparentNavbar, setTransparentNavbar] = useState(enabled);

  if (enabled) {
    useScrollPosition(({ scrollY: scrollTop }, lastPosition) => {
      if (scrollTop < 40) {
        if (!transparentNavbar) setTransparentNavbar(true);
      } else {
        if (transparentNavbar) setTransparentNavbar(false);
      }
    });
  }

  return { transparentNavbar };
}

export default function NavbarLayout({ children }: Props): JSX.Element {
  const {
    navbar: { style },
  } = useThemeConfig();
  const location = useLocation();
  const isHome = location?.pathname === '/';

  const mobileSidebar = useNavbarMobileSidebar();
  const { transparentNavbar } = useTransparentNavbar(isHome);

  return (
    <nav
      aria-label={translate({
        id: 'theme.NavBar.navAriaLabel',
        message: 'Main',
        description: 'The ARIA label for the main navigation',
      })}
      className={clsx('navbar', 'navbar--fixed-top', {
        'navbar--dark': style === 'dark',
        'navbar--primary': style === 'primary',
        'navbar-sidebar--show': mobileSidebar.shown,
        'navbar-home': isHome,
        'navbar-home-top': isHome && transparentNavbar,
      })}
    >
      {children}
      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>
  );
}

import React from 'react';
import clsx from 'clsx';
import type { Props } from '@theme/Admonition/Type/Tip';
import AdmonitionLayout from '@theme/Admonition/Layout';
import { BiSolidMagicWand } from 'react-icons/bi';

const infimaClassName = 'alert alert--lore';

const defaultProps = {
  icon: <BiSolidMagicWand />,
  title: 'Lore',
};

export default function AdmonitionTypeTip(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}
    >
      {props.children}
    </AdmonitionLayout>
  );
}

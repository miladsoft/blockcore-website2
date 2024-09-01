import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Platform',
      links: [
        {
          text: 'Node Software',
          href: getPermalink('/platform/node-software'),
        },
        {
          text: 'Explorer',
          href: getPermalink('/platform/explorer'),
        },
        {
          text: 'Indexer',
          href: getPermalink('/platform/indexer'),
        },
        {
          text: 'Wallet',
          href: getPermalink('/platform/wallet'),
        },
        {
          text: 'Decentralized Identifiers (DIDs)',
          href: getPermalink('/platform/dids'),
        },
        {
          text: 'Decentralized Web Nodes (DWNs)',
          href: getPermalink('/platform/dwns'),
        },
      ],
    },
    {
      text: 'Developers',
      links: [
        {
          text: 'Documentation',
          href: 'https://docs.blockcore.net',
        },
        {
          text: 'API Reference',
          href: getPermalink('/developers/api-reference'),
        },
        {
          text: 'SDKs',
          href: getPermalink('/developers/sdks'),
        },
        {
          text: 'GitHub',
          href: 'https://github.com/block-core',
          target: '_blank',
        },
        {
          text: 'Community Forum',
          href: getPermalink('/community/forum'),
        },
      ],
    },
    {
      text: 'Community',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Events',
          href: getPermalink('/community/events'),
        },
        {
          text: 'Contribute',
          href: getPermalink('/community/contribute'),
        },
        {
          text: 'Discord',
          href: 'https://www.blockcore.net/discord',
          target: '_blank',
        },
        {
          text: 'Social Media',
          href: getPermalink('/community/social-media'),
        },
      ],
    },
    {
      text: 'About',
      links: [
        {
          text: 'About Us',
          href: getPermalink('/about'),
        },
        {
          text: 'Team',
          href: getPermalink('/about/team'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
      ],
    },
  ],
  actions: [{ text: 'GitHub', href: 'https://github.com/block-core', target: '_blank' }],
};


export const footerData = {
  links: [
    {
      title: 'Platform',
      links: [
        { text: 'Node Software', href: getPermalink('/platform/node-software') },
        { text: 'Explorer', href: getPermalink('/platform/explorer') },
        { text: 'Indexer', href: getPermalink('/platform/indexer') },
        { text: 'Wallet', href: getPermalink('/platform/wallet') },
        { text: 'DWNs', href: getPermalink('/platform/dwns') },
      ],
    },
    {
      title: 'Developers',
      links: [
        { text: 'Documentation', href: 'https://docs.blockcore.net' },
        { text: 'API Reference', href: getPermalink('/developers/api-reference') },
        { text: 'SDKs', href: getPermalink('/developers/sdks') },
        { text: 'GitHub', href: 'https://github.com/block-core' },
        { text: 'Community Forum', href: getPermalink('/community/forum') },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Events', href: getPermalink('/community/events') },
        { text: 'Contribute', href: getPermalink('/community/contribute') },
        { text: 'Discord', href: 'https://www.blockcore.net/discord' },
        { text: 'Social Media', href: getPermalink('/community/social-media') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Team', href: getPermalink('/about/team') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/blockcoredev' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/block-core' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://www.blockcore.net/discord' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/blockcoredev' },
  ],
  footNote: `
      © ${new Date().getFullYear()} Blockcore. All rights reserved.
  `,
};

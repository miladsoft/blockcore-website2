import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Apps',
      links: [
        {
          text: 'Angor',
          href: getPermalink('/platform/angor'),
        },
        {
          text: 'Ariton',
          href: getPermalink('/platform/ariton'),
        },
        {
          text: 'Notes',
          href: getPermalink('/platform/notes'),
        },
        { 
          text: '----', 
          disabled: true, 
        },
        {
          text: 'Blockchain',
          href: getPermalink('/platform/node-software'),
        },
        {
          text: 'Indexer',
          href: getPermalink('/platform/indexer'),
        },
        {
          text: 'Explorer',
          href: getPermalink('/platform/explorer'),
        }
       
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Documentation',
          href: 'https://docs.blockcore.net',
        },
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'GitHub',
          href: 'https://github.com/block-core',
          target: '_blank',
        },
         {
          text: 'Discord',
          href: 'https://www.blockcore.net/discord',
          target: '_blank',
        }
         
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
        { text: 'Angor', href: getPermalink('/platform/angor') },
        { text: 'Ariton', href: getPermalink('/platform/ariton') },
        { text: 'Notes', href: getPermalink('/platform/notes') },
      ],
    },
    {
      title: 'Developers',
      links: [
        { text: 'Documentation', href: 'https://docs.blockcore.net' },
        { text: 'GitHub', href: 'https://github.com/block-core' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Discord', href: 'https://www.blockcore.net/discord' },
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

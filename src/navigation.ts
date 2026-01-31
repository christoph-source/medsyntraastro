import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Platform', href: getPermalink('/platform') },
    { text: 'Data Access', href: getPermalink('/data-access') },
    { text: 'For Contributors', href: getPermalink('/contributors') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [
    { text: 'Request a deck', href: getPermalink('/contact') },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Platform',
      links: [
        { text: 'Overview', href: getPermalink('/platform') },
        { text: 'Governance-first access', href: getPermalink('/platform') + '#governance' },
        { text: 'De-identification', href: getPermalink('/platform') + '#deid' },
        { text: 'Secure delivery', href: getPermalink('/platform') + '#delivery' },
      ],
    },
    {
      title: 'Data Access',
      links: [
        { text: 'Request a cohort', href: getPermalink('/data-access') },
        { text: 'How it works', href: getPermalink('/data-access') + '#how-it-works' },
        { text: 'Use cases', href: getPermalink('/data-access') + '#use-cases' },
      ],
    },
    {
      title: 'Contributors',
      links: [
        { text: 'Why contribute', href: getPermalink('/contributors') },
        { text: 'Monetization model', href: getPermalink('/contributors') + '#monetization' },
        { text: 'Onboarding', href: getPermalink('/contributors') + '#onboarding' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'Contact', href: getPermalink('/contact') },
        // Add these later if you want them:
        // { text: 'Insights', href: getPermalink('/blog') },
        // { text: 'About', href: getPermalink('/about') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/christoph-source/medsyntraastro' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © ${new Date().getFullYear()} MedSyntra. All rights reserved.
  `,
};

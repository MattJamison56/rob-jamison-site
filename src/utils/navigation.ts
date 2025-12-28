import type { MenuItem } from '../types/navigation';

export const navigationItems: MenuItem[] = [
  {
    label: 'What We Do',
    path: '/what-we-do',
    subItems: [
      { label: 'Tax Preparation', path: '/what-we-do/tax-preparation' },
      { label: 'Tax Advisory', path: '/what-we-do/tax-advisory' },
      { label: 'Accounting', path: '/what-we-do/accounting' },
      { label: 'Tax Resolution', path: '/what-we-do/tax-resolution' },
    ],
  },
  {
    label: 'Client Portal',
    path: '#',
    subItems: [
      { label: 'Existing Client Sign In', path: 'https://jamisoncpa.taxdome.com/', external: true },
      { label: 'New Client Sign Up', path: 'https://jamisoncpa.taxdome.com/en-us/signup', external: true },
    ],
  },
  {
    label: 'Resources',
    path: '/resources',
    subItems: [
      { label: 'Resource 1', path: '/resources/resource-1' },
      { label: 'Resource 2', path: '/resources/resource-2' },
      { label: 'Resource 3', path: '/resources/resource-3' },
    ],
  },
  {
    label: 'About Us',
    path: '/about',
  },
];

export const getAllSearchablePages = () => {
  const pages: { title: string; path: string; keywords: string[]; content: string }[] = [
    { 
      title: 'Home', 
      path: '/', 
      keywords: ['home', 'main', 'cpa', 'jamison accounting', 'jamison consulting'],
      content: 'Expert Tax & Accounting You Can Trust. Professional CPA services for individuals and businesses. Tax preparation, tax advisory, accounting, and tax resolution services. We work with entrepreneurs, small businesses, and individuals. Proven track record with millions in tax liability reduced. Client portal access for existing and new clients.'
    },
    { 
      title: 'About Us', 
      path: '/about', 
      keywords: ['about', 'jamison accounting', 'jamison consulting', 'team', 'company'],
      content: 'About Jamison Accounting & Consulting. Our mission, values, and commitment to providing exceptional accounting and tax services. Meet our team of experienced professionals dedicated to your financial success.'
    },
    { 
      title: 'Tax Preparation', 
      path: '/what-we-do/tax-preparation', 
      keywords: ['tax', 'preparation', 'filing', 'returns'],
      content: 'Professional tax preparation services for individuals and businesses. Expert preparation of federal and state tax returns. Maximize deductions and credits. Ensure compliance with current tax laws. E-filing available for faster refunds.'
    },
    { 
      title: 'Tax Advisory', 
      path: '/what-we-do/tax-advisory', 
      keywords: ['tax', 'advisory', 'planning', 'consultation'],
      content: 'Strategic tax planning and advisory services. Proactive tax strategies to minimize liability. Business structure consultation. Year-round tax planning. Estate and succession planning. Tax implications of major business decisions.'
    },
    { 
      title: 'Accounting', 
      path: '/what-we-do/accounting', 
      keywords: ['accounting', 'bookkeeping', 'financial'],
      content: 'Comprehensive accounting and bookkeeping services. Financial statement preparation. Monthly bookkeeping and reconciliation. Payroll processing. QuickBooks setup and training. Cash flow management and financial reporting.'
    },
    { 
      title: 'Tax Resolution', 
      path: '/what-we-do/tax-resolution', 
      keywords: ['tax', 'resolution', 'irs', 'debt'],
      content: 'Help resolving tax issues with the IRS and state tax authorities. Offer in compromise. Installment agreements. Penalty abatement. Audit representation. Wage garnishment and levy release. Innocent spouse relief.'
    },
    { 
      title: 'Resources', 
      path: '/resources', 
      keywords: ['resources', 'information', 'guides'],
      content: 'Tax resources, guides, and helpful information. Stay informed about tax deadlines, deductions, and financial planning strategies.'
    },
    { 
      title: 'Contact', 
      path: '/contact', 
      keywords: ['contact', 'consultation', 'free', 'request'],
      content: 'Request a free consultation. Contact Jamison Accounting & Consulting for expert tax and accounting services. Get in touch to discuss your tax and accounting needs. Schedule an appointment today.'
    },
  ];
  return pages;
};

export const searchPages = (query: string) => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  const allPages = getAllSearchablePages();
  
  return allPages.filter(page => 
    page.title.toLowerCase().includes(searchTerm) ||
    page.keywords.some(keyword => keyword.includes(searchTerm)) ||
    page.content.toLowerCase().includes(searchTerm)
  ).map(({ title, path, keywords }) => ({ title, path, keywords }));
};

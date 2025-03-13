export default {
  servicesWebDesign: {
    title: 'Web Design — Maxel Point',
    description:
      'Get a stunning-looking website made by in-house team of motion, graphic, and web designers.',
  },
  servicesWebDevelopment: {
    title: 'Web Development — Maxel Point',
    description:
      'Have a reliable web platform built with React, third parties, and integrations at your disposal.',
  },
  about: {
    title: 'About Us - Maxel Point',
    description:
      'Learn the Maxel Point origin and the team standing behind world-class marketing websites.',
  },
  blog: {
    title: 'Our Blog — Maxel Point',
    description:
      'Collective team experience shared through articles, digests, and tutorials on web design and development.',
  },
  blogPost: ({ title, description, ogImage }) => ({
    title: `${title} — Maxel Point`,
    description,
    ogImage,
  }),
  caseStudies: {
    title: 'Case Studies — Maxel Point',
    description: 'See how we have helped our customers achieve their goals.',
  },
  caseStudy: ({ title, description }) => ({
    title: `${title} — Maxel Point`,
    description,
  }),
};

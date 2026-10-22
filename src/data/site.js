// All site-level content lives here.
// Components only contain UI labels.

export const site = {
  name: 'Ninja Hashmi',
  title: 'Frontend Developer',
  location: 'Karachi, Pakistan',
  email: 'nazeemakbar018@gmail.com',
  github: 'https://github.com/Ninja-Hashmi',
  linkedin: 'https://www.linkedin.com/in/muhmmad-azam-67123843b/',
  instagram: 'https://www.instagram.com/ninja.hashmi/',

  // DRAFT: review – short value statement from supplied facts
  heroLine:
    'Freelance web developer and CS student building clean, responsive interfaces.',

  // DRAFT: review
  openToWork: true,
  openToWorkLabel: 'Open to internships, junior roles & freelance',

  // DRAFT: review – bio facts only
  about: {
    heading: 'About',
    paragraphs: [
      'I am a freelance web developer and CS student based in Karachi.',
      'I work with HTML, CSS, JavaScript and React to build clear, maintainable frontend interfaces.',
      'I have completed client websites for businesses and am open to internships and junior frontend roles.',
    ],
  },

  contact: {
    heading: 'Contact',
    subheading:
      'Looking for a frontend developer for a project, internship or junior role? Send a message.',
    mailtoFallback: 'nazeemakbar018@gmail.com',
  },

  footer: {
    // year is dynamic in the component
    text: 'Ninja Hashmi',
  },
};

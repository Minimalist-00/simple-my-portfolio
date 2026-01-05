export const frontendSkills = [
  {
    title: 'Javascript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 4
  },
  {
    title: 'Typescript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    level: 3
  },
  {
    title: 'React',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    level: 4
  },
  {
    title: 'Next.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    level: 4
  }
]

export const backendSkills = [
  {
    title: 'Go',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
    level: 2
  },
  {
    title: 'Python',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    level: 3
  },
  {
    title: 'GraphQL',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    level: 2
  },
  {
    title: 'Postgre SQL',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    level: 2
  },
  {
    title: 'Supabase',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    level: 3
  }
]

export const generalSkills = [
  {
    title: 'C',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    level: 2
  },
  {
    title: 'C#',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    level: 2
  },
  {
    title: 'C++',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    level: 2
  },
  {
    title: 'Java',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    level: 2
  },
  {
    title: 'MATLAB',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
    level: 2
  },
  {
    title: 'Arduino',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',
    level: 2
  }
]

export const cloudSkills = [
  {
    title: 'AWS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    level: 2
  },
  {
    title: 'Azure',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    level: 2
  }
]

export const designSkills = [
  {
    title: 'Figma',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    level: 3
  },
  {
    title: 'HTML',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: 3
  },
  {
    title: 'CSS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    level: 3
  },
  {
    title: 'SCSS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    level: 3
  }
]

export const dxSkills = [
  {
    title: 'kintone',
    img: '/images/AboutMe/logo_kintone.jpg',
    level: 3,
    imgClass: 'w-20 h-20 object-contain'
  },
  {
    title: 'Power Automate',
    img: '/images/AboutMe/logo_PowerAutomate.svg',
    level: 3
  },
  {
    title: 'MS365',
    img: '/images/AboutMe/logo_MS365.jpg',
    level: 3
  }
]

export const otherSkills = [
  {
    title: 'GitHub',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    level: 4
  },
  {
    title: 'Notion',
    img: '/images/AboutMe/logo_notion.png',
    level: 3
  },
  {
    title: 'Docker',
    img: '/images/AboutMe/logo_docker.png',
    level: 2
  },
  {
    title: 'Final Cut Pro',
    img: '/images/AboutMe/logo_FinalCutPro.png',
    level: 3
  },
  {
    title: 'Premiere Pro',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg',
    level: 3
  },
  {
    title: 'Adobe Lightroom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg',
    level: 3
  },
  {
    title: 'Unity',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
    level: 2
  }
]

export const allSkills = [
  ...frontendSkills,
  ...backendSkills,
  ...generalSkills,
  ...cloudSkills,
  ...designSkills,
  ...dxSkills,
  ...otherSkills
]

// Skill Icons for skillicons.dev
// Available icons: https://skillicons.dev/
export const skillIconsString = [
  'js',
  'ts',
  'react',
  'nextjs',
  'go',
  'python',
  'aws',
  'azure',
  'github'
].join(',')

export const toolSkillIconsString = [
  'cs',
  'unity',
  'pr',
  'kotlin',
  'androidstudio'
].join(',')

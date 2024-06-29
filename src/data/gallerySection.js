const items = [
  {
    id: 1,
    image: "7.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 2,
    image: "8.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 3,
    image: "9.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 4,
    image: "10.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 5,
    image: "7.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 6,
    image: "8.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },

  {
    id: 7,
    image: "9.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 8,
    image: "10.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 9,
    image: "7.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 10,
    image: "8.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 11,
    image: "9.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 12,
    image: "10.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
];

const items3 = [
  {
    id: 1,
    image: "1.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 2,
    image: "2.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 3,
    image: "3.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 4,
    image: "4.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 5,
    image: "5.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 6,
    image: "6.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },

  {
    id: 7,
    image: "1.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 8,
    image: "2.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 9,
    image: "3.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 10,
    image: "4.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 11,
    image: "5.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
  {
    id: 12,
    image: "6.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
  },
];

const items2 = [
  {
    id: 1,
    image: "1.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
    filter: ["all", "web-design"],
  },
  {
    id: 2,
    image: "2.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
    filter: ["all", "photography", "web-design"],
  },
  {
    id: 3,
    image: "3.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
    filter: ["all", "branding", "web-design"],
  },
  {
    id: 4,
    image: "4.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
    filter: ["all", "branding", "illustration"],
  },
  {
    id: 5,
    image: "5.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
    filter: ["all", "branding", "illustration", "photography", "web-design"],
  },
  {
    id: 6,
    image: "6.jpg",
    title: "Projektnamn",
    tagline: "Jobbtyp",
    filter: ["all", "illustration", "photography"],
  },
];

const gallerySection = {
  title: "Our work showcase",
  tabBtns: [
    {
      id: 1,
      name: "All",
      tab: "p-tab-1",
      count: 6,
    },
    {
      id: 2,
      name: "Branding",
      tab: "p-tab-2",
      count: 8,
    },
    {
      id: 3,
      name: "illustration",
      tab: "p-tab-3",
      count: 7,
    },
    {
      id: 4,
      name: "Photography",
      tab: "p-tab-4",
      count: 10,
    },
    {
      id: 5,
      name: "Web Design",
      tab: "p-tab-5",
      count: 9,
    },
  ],
  pTabs: [
    {
      id: "p-tab-1",
      items,
    },
    {
      id: "p-tab-2",
      items,
    },
    {
      id: "p-tab-3",
      items,
    },
    {
      id: "p-tab-4",
      items,
    },
    {
      id: "p-tab-5",
      items,
    },
  ],
  pTabs2: [
    {
      id: "p-tab-1",
      items: items3,
    },
    {
      id: "p-tab-2",
      items: items3,
    },
    {
      id: "p-tab-3",
      items: items3,
    },
    {
      id: "p-tab-4",
      items: items3,
    },
    {
      id: "p-tab-5",
      items: items3,
    },
  ],
};

export default gallerySection;

export const gallerySectionOne = {
  title: "Arbetsutställning",
  tabBtns: [
    {
      id: 1,
      name: "Allt",
      tab: "all",
    },
    {
      id: 2,
      name: "Elektroinstallation",
      tab: "branding",
    },
    {
      id: 3,
      name: "Belysning",
      tab: "illustration",
    },
    {
      id: 4,
      name: "smarta hem",
      tab: "photography",
    },
    {
      id: 5,
      name: "Hissservice",
      tab: "web-design",
    },
  ],
  items: items2,
};

export const gallerySectionThree = {
  tagline: "What We did",
  title: "Latest Projects",
  items: [
    {
      id: 1,
      image: "project-1-1.jpg",
      tagline: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 2,
      image: "project-1-2.jpg",
      tagline: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 3,
      image: "project-1-3.jpg",
      tagline: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 4,
      image: "project-1-4.jpg",
      tagline: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 5,
      image: "project-1-5.jpg",
      tagline: "Project List",
      title: "Substantial Growth",
    },
    {
      id: 6,
      image: "project-1-6.jpg",
      tagline: "Project List",
      title: "Substantial Growth",
    },
  ],
};

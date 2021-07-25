import eatsme from "../assets/eatsme.png";
import filmnion from "../assets/filmnion.png";
import personal from "../assets/personal.png";

export const projects = [
  {
    image: filmnion,
    title: "Filmnion",
    description:
      "Filmnion is a movie and tv shows search, inspired by netflix layout and IMDB. You can search movies and tv shows, check the details, actors, and episodes.",
    skills: ["HTML", "SCSS", "React", "axios"],
    links: {
      live: "https://filmnion.netlify.app/",
      github: "https://github.com/SanovaBeach/Filmnion",
    },
  },
  {
    image: eatsme,
    title: "EatsMe",
    description:
      "EatsMe is a food review blog I made using Contentful. It shows foods that has been reviewed, it has recommended and category of food.",
    skills: ["HTML", "SCSS", "React", "Contentful (CMS)", "axios"],
    links: {
      live: "https://eats-me.netlify.app/",
      github: "https://github.com/SanovaBeach/EatsMe",
    },
  },
  {
    image: personal,
    title: "Portfolio Website",
    description: "This is my personal website.",
    skills: ["HTML", "CSS", "React"],
    links: {
      live: "https://eats-me.netlify.app/",
      github: "https://github.com/SanovaBeach/EatsMe",
    },
  },
];

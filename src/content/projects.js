import eatsme from "../assets/eatsme.png";
import filmnion from "../assets/filmnion.png";
import personal from "../assets/personal.png";
import blogr from "../assets/blogr.png";
import eatsme2 from "../assets/eatsme2.png";
import filmnion2 from "../assets/filmnion2.png";
import personal2 from "../assets/personal2.png";

export const projects = [
  {
    image: filmnion2,
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
    image: eatsme2,
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
    image: personal2,
    title: "Portfolio Website",
    description: "This is my personal website.",
    skills: ["HTML", "SCSS", "React"],
    links: {
      live: "https://laurencebalazo.netlify.app/",
      github: "https://github.com/SanovaBeach/personal_website",
    },
  },
  {
    image: blogr,
    title: "Blogr",
    description: "This is a challenge in Frontendmentor.",
    skills: ["HTML", "SCSS", "React"],
    links: {
      live: "https://frontend-blogr.netlify.app/",
      github: "https://github.com/SanovaBeach/blogr",
    },
  },
];

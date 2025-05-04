import project1 from "../assets/images/projectimg/projects1.png";
import project2 from "../assets/images/projectimg/projects2.png";
import project3 from "../assets/images/projectimg/projects3.png";
import project4 from "../assets/images/projectimg/projects4.jpg";
import myphoto from "../assets/images/myphoto1.png";

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/project",
    text: "Project",
  },
  {
    url: "/resume",
    text: "Resume",
  },

  {
    url: "/contact",
    text: "Contact",
  },
];

export const home = [
  {
    text: "HELLO I'M",
    name: "Mengkong",
    post: "WEB DEVELOPER",
    design: "UI / UX DESIGNER",
    desc: "Aspiring Web Developer | Passionate About Building the Web. I'm a self-taught web developer eager to create and learn. I may not have professional experience yet, but I’m constantly improving my skills by building projects and exploring new technologies. My goal is to craft clean, user-friendly, and responsive websites. Take a look at my work below—I’d love to connect and collaborate! ",
  },
];

export const about = [
  {
    desc: "I am a highly motivated and passionate individual who enjoys creating and improving things. I have a strong interest in designing and building solutions that make life easier and more enjoyable for others. Although I don’t have professional experience yet, I am always eager to learn and grow. I believe that my creativity, problem-solving skills, and determination to succeed make me a great addition to any team.",
    desc1:
      "I am excited to start my career and contribute to meaningful projects where I can make a positive impact.",
    cover: myphoto,
  },
];

export const project = [
  {
    id: 1,
    cover: project1,
    category: "Latest",
    name: "Brand",
    title: "BookShopOnline",
    link: "https://online-book-store-sand.vercel.app/",
  },
  {
    id: 2,
    cover: project2,
    category: "Old",
    name: "Brand",
    title: "FoodStore",
    link: "https://food-store-tau-one.vercel.app/",
  },
  {
    id: 3,
    cover: project3,
    category: "Current",
    name: "Brand",
    title: "EcommerceStore",
    link: "https://e-commerce-iota-five-40.vercel.app/",
  },
  {
    id: 4,
    cover: project4,
    category: "Latest",
    name: "Brand",
    title: "Habit-Tracker",
    link: "https://habit-tracker-umber-zeta.vercel.app/",
  },
];

export const contact = [
  {
    email: "eangmengkong21@gmail.com",
    telegram: "011 300 512",
    phoneNumber: "011 300 512 (Cellcard)",
    github: "https://github.com/eangmengkong",
    facebook: "Mengkong Eang",
    address: "National Road No. 1, Sangkat Niroth, Khan Chbar Ampov,",
  },
];

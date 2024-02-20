import spiffy from "../assets/spiffy.png";
import gamer from "../assets/gamer-paradise.png";
import educator from "../assets/educator.png";
import telype from "../assets/telype.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import node from "../assets/nodejs.png";
import express from "../assets/express.png";
import mongo from "../assets/mongo-db.png";
import react from "../assets/react.png";
import next from "../assets/next.png";
import tailwind from "../assets/tailwind.png";
import styled from "../assets/styled.png";
import vscode from "../assets/visual-studio-code.png";
import github from "../assets/github.png";
import prisma from "../assets/prisma.png";
import telypeHeader from "../assets/telypeheader.png";
import telypeFeat from "../assets/telypefeat.png";
import gamerHeader from "../assets/gamerheader.png";
import gamerFeat from "../assets/gamerfeat.png";
import educatorHeader from "../assets/educatorheader.png";
import educatorFeat from "../assets/educatorfeat.png";
import spiffyHeader from "../assets/spiffyheader.png";
import spiffyFeat from "../assets/spiffyfeat.png";
import amenity from "../assets/amenity.png";
import euphony from "../assets/euphony.png";
import weather from "../assets/weather.png";

const data = [
  {
    id: 0,
    name: "Telype",
    image: telype,
    desc: "Telype is a WebApp for text, voice, and video communication. The platform is built on NextJs, Prisma, MongoDB, Websocket, and Tailwind. Realtime messaging with Edit and Delete functionality, 1:1 and Group Video, Voice, and Text support. Member management, Unique invite link generation & full working invite system, Server creation and customization.",
    liveUrl: "https://telype.onrender.com",
    codeUrl: "https://github.com/vipulkr059/Discord-Clone",
    feature: [
      "Real-time messaging using Socket.io",
      "Send attachments as messages using UploadThing",
      "Delete & Edit messages in real time for all users",
      "Create Text, Audio and Video call Channels",
      "1:1 conversation between members",
      "1:1 video calls between members",
      "Member management (Kick, Role change Guest / Moderator)",
      "Unique invite link generation & full working invite system",
      "Infinite loading for messages in batches of 10 (tanstack/query)",
      "Server creation and customization",
      "Beautiful UI using TailwindCSS and ShadcnUI",
      "Full responsivity and mobile UI",
      "Light / Dark mode",
      "Websocket fallback: Polling with alerts",
      "ORM using Prisma",
      "Authentication with Clerk",
    ],
    tech: [
      next,
      react,
      javascript,
      typescript,
      node,
      mongo,
      prisma,
      tailwind,
      vscode,
      github,
    ],
    featImage: telypeFeat,
    headerImage: telypeHeader,
  },
  {
    id: 1,
    name: "Gamer Paradise",
    image: gamer,
    desc: "Gamer-Paradise is a video game discovery platform. It is built on ReactJs, Zustand, React Query, ChakraUI & RAWG Api. Used Zustand for state management, React Query for efficient data fetching. Used Rawg API or working with video games data. Supports searching & sorting based on platforms and genre etc.",
    liveUrl: "https://gamer-paradise.vercel.app/",
    codeUrl: "https://github.com/vipulkr059/Gamer-Paradise",
    feature: [
      "Fetching games data based on Plaforms, Genre etc",
      "Searching and Sorting games",
      "Beautiful UI using TailwindCSS and ShadcnUI",
      "Full responsivity and mobile UI",
      "Light / Dark mode",
      "Games trailer page",
      "Skeletons for good user experience",
    ],
    tech: [react, javascript, typescript, node, tailwind, vscode, github],
    featImage: gamerFeat,
    headerImage: gamerHeader,
  },
  {
    id: 2,
    name: "Educator.io",
    image: educator,
    desc: "Every year through the government exams plenty of teachers are hired and posted in various government schools. The tracking of teachers from recruitment to their entire service duration is done manually which makes it difficult to manage and keep track. Addressing this problem will give government the ease of managing teachers through one single portal which will help in maintaining clear stats of the teachers currently posted.",
    liveUrl: "https://educator-io.netlify.app/",
    codeUrl: "https://github.com/ThisIsFaar/Educator-io",
    feature: [
      "Single Page Application built over ReactJS",
      "NodeJS RunTime ENV.",
      "REST API with ExpressJS",
      "NoSql DataBase used (MongoDB)",
      "Digitizing Manual Record of Teachers with a Dashboard App.",
      "Cross platform using PWA.",
      "Data Managed By Authority with 2FA (2 Factor Authentication).",
      "UI Design/CSS Frameworks: PureCSS, CSS BEM Arch.",
    ],
    tech: [
      javascript,
      typescript,
      react,
      node,
      express,
      mongo,
      styled,
      vscode,
      github,
    ],
    featImage: educatorFeat,
    headerImage: educatorHeader,
  },
  {
    id: 3,
    name: "Spiffy Shirts",
    image: spiffy,
    desc: "E-Commerce Webapp Based on MERN Stack. Database Manage and Hosted on MongoDB Atlas. UI Designed with React and Style Components. Functionality used in famous E-Commerce. Served Live on Heroku.",
    liveUrl: "https://spiffy-shirts.netlify.app/",
    codeUrl: "https://github.com/vipulkr059/Spiffy-Shirts-Local-Version",
    feature: [
      "Single Page Application built over ReactJS",
      "NodeJS RunTime ENV.",
      "REST API with ExpressJS",
      "NoSql DataBase used (MongoDB)",
      "Cross platform using PWA.",
      "Payment Gateway Integrated with STRIPE",
      "UI Design/CSS Frameworks: Bootstrap, Styled Components",
    ],
    tech: [
      javascript,
      typescript,
      react,
      node,
      express,
      mongo,
      styled,
      vscode,
      github,
    ],
    featImage: spiffyFeat,
    headerImage: spiffyHeader,
  },
];

export const extras = [
  {
    id: 0,
    name: "The Amenity",
    image: amenity,
    desc: "The Amenity is hotel bookings management tool based on React Js and Supabase. Hoteliers can efficiently oversee bookings, streamline check-ins and check-outs, manage room allocations, and track guest preferences with ease.",
    liveUrl: "https://the-amenity.vercel.app/",
    codeUrl: "https://github.com/vipulkr059/The-Amenity",
  },
  {
    id: 1,
    name: "Euphony",
    image: euphony,
    desc: "A music webapp integrated with Spotify Api.Built on MERN. Discover new tracks, create personalized playlists, and explore curated recommendations tailored to your tastes, all within a sleek and intuitive user interface.",
    liveUrl: "https://github.com/vipulkr059/Euphony",
    codeUrl: "https://github.com/vipulkr059/Euphony",
  },
  {
    id: 2,
    name: "Weather-App",
    image: weather,
    desc: "Weather App your go to solution for instant weather updates with simplicity and style. Seamlessly designed for effortless navigation, this app provides real-time weather information at your fingertips.",
    liveUrl: "https://react-weather-cast.netlify.app/",
    codeUrl: "https://github.com/vipulkr059/Weather-App",
  },
];

export default data;

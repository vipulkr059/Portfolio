import spiffy from "../assets/spiffy.png";
import gamer from "../assets/gamer-paradise.png";
import educator from "../assets/educator.png";
import telype from "../assets/telype.png";
const data = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

const extra = [
  {
    name: "Mask On",
    image: "",
    desc: "A game Based On Covid pandemic. It was developed on HTML, CSS & JAVAscript. Soothing Music and GAmeplay Experience. Addictive For KIds.",
    liveUrl: "https://mask-on.netlify.app/",
    codeUrl: "https://github.com/vipulkr059/Mask-On-Game-",
  },
  {
    name: "Euphony",
    image: "",
    desc: [
      "Music WebApp Integrated With Spotify Web API",
      "It is Based on Node JS, Express JS, & React JS",
      "It has all functionality like Player, Searching etc.",
      "UI is Designed with Styled Components & React",
    ],
    liveUrl: "https://github.com/vipulkr059/Euphony",
    codeUrl: "https://github.com/vipulkr059/Euphony",
  },
  {
    name: "Online Voting System",
    image: "",
    desc: [
      "An Online Voting System Based on Java, Servlet, JSP.",
      "It allows to automate Voting operations digitally.",
      "UI Designed with HTML ,CSS And JavaScript.",
      "Database Managed and Maintain With SQL",
    ],
    liveUrl: "https://github.com/vipulkr059/Online-Voting-System",
    codeUrl: "https://github.com/vipulkr059/Online-Voting-System",
  },
];

export default data;

import khumbulaRegister from "../src/images/khumbula_screenshots/register.png";
import khumbulaLogin from "../src/images/khumbula_screenshots/login.png";
import ForgotPassword from "../src/images/khumbula_screenshots/forgot_password.png";
import Dashboard from "../src/images/khumbula_screenshots/dashboard.png";
import SideBar from "../src/images/khumbula_screenshots/side_bar.png";
import AddPill from "../src/images/khumbula_screenshots/add_pill.png";
import PillList from "../src/images/khumbula_screenshots/pill_list.png";
import UpdatePill from "../src/images/khumbula_screenshots/update_pill.png";
import CreateAlert from "../src/images/khumbula_screenshots/create_alert.png";
import AlertList from "../src/images/khumbula_screenshots/alert_list.png";
import UpdateAlert from "../src/images/khumbula_screenshots/update_alert.png";

import MarryMeRegister from "../src/images/marry_screenshots/registration.png";
import MarryMeLogin from "../src/images/marry_screenshots/login.png";
import AddPerson from "../src/images/marry_screenshots/add_person.png";
import DeletePerson from "../src/images/marry_screenshots/delete_person.png";
import DashboardPerson from "../src/images/marry_screenshots/dashboard_person.png";
import SelectPerson from "../src/images/marry_screenshots/select_person.png";
import Marriage from "../src/images/marry_screenshots/marriage.png";
import DashboardMarried from "../src/images/marry_screenshots/dashboard_married.png";
import Couples from "../src/images/marry_screenshots/couples.png";
import Divorce from "../src/images/marry_screenshots/divorce.png";

const projectData = [
  {
    title: "About khumbula App",
    details: [
      "Khumbula is designed with a mobile first approach.",
      "Khumbula means to 'remember' in the IsiZulu language.",
      "Khumbula is a reminder web app designed to help users manage their medication schedules efficiently.",
      "Authentication, including signup, OTP verification, login, password recovery.",
      "Handles user profile management.",
      "User medications, allowing to add, view, update, and delete pill records.",
      "Management of reminders for medication intake.",
    ],
    tools: [
      {
        tool: "Front end",
        highlight: "React powered by Vite|React-hook-form & Yup",
      },
      { tool: "State Management", highlight: "Redux toolkit" },
      { tool: "Backend", highlight: "Nodejs|Express.js|Mongoose|Mongo_DB" },
      { tool: "Styling tool", highlight: "TailwindCSS" },
      { tool: "Version control", highlight: "Git" },
      { tool: "Cloud", highlight: "AWS" },
    ],
    screenshots: [
      khumbulaLogin,
      khumbulaRegister,
      ForgotPassword,
      Dashboard,
      SideBar,
      AddPill,
      PillList,
      UpdatePill,
      CreateAlert,
      AlertList,
      UpdateAlert,
    ],
  },
  {
    title: "About Marry-ME App",
    details: [
      "Marry-Me is a browser-based app designed for desktop and laptop users, offering a seamless experience on larger screens.",
      "The Marry-Me app is a playful yet functional platform designed to simulate marriage and relationship dynamics in a virtual environment.",
      "Authentication, signup and login.",
      "Management of person.",
      "Management of marriage and divorce.",
    ],
    tools: [
      { tool: "Front end", highlight: "Gatsby.js|Formik & Yup" },
      { tool: "State Management", highlight: "Redux toolkit" },
      { tool: "Backend", highlight: "Nodejs|Express.js|Mongoose|Mongo_DB" },
      { tool: "Styling tool", highlight: "Styled-components" },
      { tool: "Version control", highlight: "Git" },
      { tool: "Cloud", highlight: "AWS" },
    ],
    screenshots: [
      MarryMeLogin,
      MarryMeRegister,
      AddPerson,
      DeletePerson,
      DashboardPerson,
      SelectPerson,
      Marriage,
      DashboardMarried,
      Couples,
      Divorce,
    ],
  },
];

export default projectData;

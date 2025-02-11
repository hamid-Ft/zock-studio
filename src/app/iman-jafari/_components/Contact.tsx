import React from "react";

import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

import Dock from "./Dock/Dock";

const Contacts = [
  {
    id: 1,
    link: "/",
    icon: <AiFillHome className="text-3xl" />,
    label: "Home",
  },
  {
    id: 2,
    link: "mailto:imancx.cx@gmail.com",
    icon: <MdOutlineEmail className="text-3xl" />,
    label: "Email",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/iman-jafari-cx",
    icon: <FaLinkedin className="text-3xl" />,
    label: "Linkedin",
  },
  {
    id: 4,

    link: "https://github.com/kaRIOz",
    icon: <FaGithub className="text-3xl" />,
    label: "Github",
  },
];

const Contact = () => {
  return (
    <Dock
      items={Contacts}
      panelHeight={50}
      baseItemSize={50}
      magnification={70}
      distance={100}
    />
  );
};

export default Contact;

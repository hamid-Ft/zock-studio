import React from "react";
import Link from "next/link";

import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

import Magnet from "./Magnet/Magnet";

const Contacts = [
  {
    id: 1,
    link: "/",
    icon: AiFillHome,
  },
  {
    id: 2,
    link: "mailto:imancx.cx@gmail.com",
    icon: MdOutlineEmail,
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/iman-jafari-cx",
    icon: FaLinkedin,
  },
  {
    id: 4,

    link: "https://github.com/kaRIOz",
    icon: FaGithub,
  },
];

const Contact = () => {
  return (
    <div className="z-50">
      <div className="flex items-center justify-evenly  border border-zinc-800 p-2 rounded-2xl mt-4">
        {Contacts.map((c) => (
          <Link href={c.link} key={c.id} target="_blank">
            <Magnet padding={250} disabled={false} magnetStrength={2}>
              <c.icon className="text-4xl text-white" />
            </Magnet>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoArrowDown } from "react-icons/io5";

const Contact = () => {
  return (
    <section>
      <div className="flex items-center justify-center h-[80vh]">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Contact With Me</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col w-[380px]">
            <Link href="mailto:imancx.cx@gmail.com">
              <Button className="w-full mb-2" variant="outline">
                <MdOutlineEmail className="text-2xl" />
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/iman-jafari-cx"
              target="_blank"
            >
              <Button className="w-full mb-2" variant="outline">
                <FaLinkedin className="text-2xl" />
              </Button>
            </Link>
            <Link href="https://github.com/kaRIOz" target="_blank">
              <Button className="w-full mb-2" variant="outline">
                <FaGithub className="text-2xl" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <p className="flex items-center justify-center gap-2 opacity-50  tracking-widest">
        <IoArrowDown />
        projects
      </p>
    </section>
  );
};

export default Contact;

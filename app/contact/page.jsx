"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 903 248 9652",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "abdursalamioluwa@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lekki Phase 1, Lagos State, Nigeria",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSendEmail = () => {
    const { firstname, lastname, email, phone, service, message } = formData;

    const subject = encodeURIComponent(`Inquiry about ${service}`);
    const body = encodeURIComponent(
      `Service: ${service}\n\n${message}\n\n${firstname} ${lastname}\n${phone}`
    );

    const mailtoLink = `mailto:abdursalamioluwa@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I'm excited to collaborate with you on your next project.
                Whether you need assistance with software development,
                cybersecurity, or networking solutions, I'm here to help. Let's
                discuss how we can bring your ideas to life.
              </p>
              {/* <p className="text-white/60">
                For inquiries, please reach out via the phone number or email
                provided. This contact form is currently under development.
              </p> */}
              {/* input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              {/* select service */}
              <Select onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Full-time Job">Full-time Job</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
              />
              {/* button */}
              <Button size="md" className="max-w-40" onClick={handleSendEmail}>
                Send message
              </Button>
            </form>
          </div>
          {/* contact info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 ">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

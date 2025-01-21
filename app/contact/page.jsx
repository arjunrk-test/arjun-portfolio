"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

// Info for displaying contact details
const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(+91) 8072734996'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'arjun.rksaravanan@gmail.com'
    },
    {
        icon: <FaMapMarkedAlt />,
        title: 'Address',
        description: 'Perungudi, Chennai, TamilNadu, INDIA - 600096'
    }
];

const Contact = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send email using EmailJS
            const result = await emailjs.send(
                'service_yc5nxzg',      // EmailJS service ID
                'template_wibud2l',     // EmailJS template ID
                formData,               // Form data to send
                'lwyNWyU9GzwI-8rwc'          // EmailJS user ID (found in your EmailJS account)
            );
            console.log(result.text);
            alert("Message sent successfully!");
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Something went wrong. Please try again later.");
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                            <p className="text-white/60">
                                Feel free to reach out if you have any questions, want to collaborate, or simply wish to connect.
                                I&apos;m always open to discussing new ideas and opportunities!
                            </p>
                            {/* input fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Firstname"
                                />
                                <Input
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Lastname"
                                />
                                <Input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="Email address"
                                />
                                <Input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Phone number"
                                />
                            </div>
                            {/* select */}

                            <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))} value={formData.service}>
                                <SelectTrigger className="w-full">
                                     <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="Manual Testing">Manual Testing</SelectItem>
                                        <SelectItem value="Automation Testing">Automation Testing</SelectItem>
                                        <SelectItem value="Framework Development">Framework Development</SelectItem>
                                        <SelectItem value="API Testing">API Testing</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* message textarea */}
                            <Textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="h-[200px]"
                                placeholder="Type your message here."
                            />
                            {/* submit button */}
                            <Button type="submit" size="md" className="max-w-40">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* contact information */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;

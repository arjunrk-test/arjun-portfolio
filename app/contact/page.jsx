"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

// Info for displaying contact details
const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+91) 8072734996",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "arjun.rksaravanan@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Perungudi, Chennai, TamilNadu, INDIA - 600096",
    },
];

// Reusable Alert Component
const Alert = ({ message, type, onClose }) => {
    const alertStyles = {
        success: "bg-accent text-black",
        error: "bg-red-500 text-black",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-5 right-5 z-50 p-4 rounded-lg shadow-lg ${alertStyles[type]}`}
        >
            <div className="flex justify-between items-center gap-4">
                <span>{message}</span>
                <button
                    className="text-white bg-black/20 px-2 py-1 rounded-md hover:bg-black/40 transition"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </motion.div>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: "", type: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        // Validation: Check if all fields are filled
        const isEmptyField = Object.values(formData).some((value) => !value.trim());
        if (isEmptyField) {
            setAlert({
                show: true,
                message: "Please fill out every field and try again.",
                type: "error",
            });
            setIsSubmitting(false);
            return;
        }
    
        try {
            await emailjs.send(
                "service_yc5nxzg",
                "template_wibud2l",
                formData,
                "lwyNWyU9GzwI-8rwc"
            );
    
            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                service: "",
                message: "",
            });
    
            setAlert({
                show: true,
                message: "Message sent successfully!",
                type: "success",
            });
        } catch (error) {
            console.error("Error sending message:", error);
            setAlert({
                show: true,
                message: "Something went wrong. Please try again later.",
                type: "error",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                        >
                            <h3 className="text-4xl text-accent">
                                Let&apos;s work together
                            </h3>
                            <p className="text-white/60">
                                Feel free to reach out if you have any questions,
                                want to collaborate, or simply wish to connect. I&apos;m
                                always open to discussing new ideas and
                                opportunities!
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Firstname"
                                    disabled={isSubmitting}
                                />
                                <Input
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Lastname"
                                    disabled={isSubmitting}
                                />
                                <Input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="Email address"
                                    disabled={isSubmitting}
                                />
                                <Input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Phone number"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <Select
                                onValueChange={(value) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        service: value,
                                    }))
                                }
                                value={formData.service}
                                disabled={isSubmitting}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="Manual Testing">
                                            Manual Testing
                                        </SelectItem>
                                        <SelectItem value="Automation Testing">
                                            Automation Testing
                                        </SelectItem>
                                        <SelectItem value="Framework Development">
                                            Framework Development
                                        </SelectItem>
                                        <SelectItem value="API Testing">
                                            API Testing
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="h-[200px]"
                                placeholder="Type your message here."
                                disabled={isSubmitting}
                            />
                            <Button
                                type="submit"
                                size="md"
                                className="max-w-40"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
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
                                        <h3 className="text-[16px]">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Alert */}
            <AnimatePresence>
                {alert.show && (
                    <Alert
                        message={alert.message}
                        type={alert.type}
                        onClose={() =>
                            setAlert({ show: false, message: "", type: "" })
                        }
                    />
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default Contact;

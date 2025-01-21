"use client";
import Socials from "@/components/Social";
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ArjunSaravanakumar.pdf"; 
    link.download = "ArjunSaravanakumar.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Arjun Saravanan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
            Dynamic Software Tester with expertise in automation frameworks, debugging, and delivering flawless applications. 
            Passionate about creating efficient testing solutions and collaborating to build exceptional software.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                onClick={handleDownload}
                variant = "outline"
                size = "lg"
                className="uppercase flex items-center gap-2 hover:transistion-all duration-500"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transistion-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home;
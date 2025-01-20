import Link from "next/link";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"

const socials = [
  {icon: <FaGithub /> , path: "https://github.com/arjunrk-test/"},
  {icon: <FaLinkedin /> , path: "https://www.linkedin.com/in/arjun-rksaravanan/"},
  {icon: <FaTwitter /> , path: "https://x.com/ArjunSa77342387"},
];



const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return(
          <Link key={index} href={item.path} className={iconStyles} target="_blank"
            rel="noopener noreferrer" >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
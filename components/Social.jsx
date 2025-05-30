import Link from "next/link"
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter} from "react-icons/fa"

const socials = [
    {icons: <FaGithub/>, path: ""},
    {icons: <FaLinkedin/>, path: ""},
    {icons: <FaYoutube/>, path: ""},
    {icons: <FaTwitter/>, path: ""},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index)=> {
        return (
            <Link key={index} href={social.path} className={iconStyles}>
                {social.icons}
            </Link>
        )
      })}
    </div>
  )
}

export default Social

import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Social } from "../../../lib/social";

const sizes: string = "h-10 w-10";

export const socials: Social[] = [
    {
        name: "GitHub",
        link: "https://github.com/lukaszfabia/",
        icon: <FontAwesomeIcon icon={faGithub} className={sizes} />
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/lukasz-fabia-935663277/",
        icon: <FontAwesomeIcon icon={faLinkedin} className={sizes} />
    },
    {
        name: "Twitter",
        link: "https://twitter.com/lukaszfabia",
        icon: <FontAwesomeIcon icon={faXTwitter} className={sizes} />
    }
]
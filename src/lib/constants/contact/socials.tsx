import { faGithub, faLetterboxd, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Social } from "../../../lib/social";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const size = "2x"

export const socials: Social[] = [
    {
        name: "GitHub",
        link: "https://github.com/lukaszfabia/",
        icon: <FontAwesomeIcon icon={faGithub} size={size} />
    },
    {
        name: "Twitter",
        link: "https://twitter.com/lukaszfabia",
        icon: <FontAwesomeIcon icon={faXTwitter} size={size} />
    }, {
        name: "Email",
        link: "mailto:ufabia03@gmail.com",
        icon: <FontAwesomeIcon icon={faEnvelope} size={size} />
    }
]
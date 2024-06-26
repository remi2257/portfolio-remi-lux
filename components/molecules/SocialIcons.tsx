import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

import { Button } from "../ui/button";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-px">
      <Button
        variant="link"
        asChild
        size="icon"
        className="transition-colors hover:text-purple-600"
      >
        <Link href="https://www.instagram.com/remi_lux/" target="_blank">
          <FaInstagram className="size-8" />
        </Link>
      </Button>
      <Button
        variant="link"
        asChild
        size="icon"
        className="transition-colors hover:text-sky-600"
      >
        <Link href="https://www.linkedin.com/in/remi-lux/" target="_blank">
          <FaLinkedin className="size-8" />
        </Link>
      </Button>
      <Button
        variant="link"
        asChild
        size="icon"
        className="transition-colors hover:text-neutral-500"
      >
        <Link href="https://github.com/remi2257" target="_blank">
          <FaGithub className="size-8" />
        </Link>
      </Button>
      <Button
        variant="link"
        asChild
        size="icon"
        className="transition-colors hover:text-red-500"
      >
        <Link
          href="https://www.youtube.com/channel/UCOurEFFDgU1kD86-YpltL3w"
          target="_blank"
        >
          <FaYoutube className="size-8" />
        </Link>
      </Button>
    </div>
  );
};

export default SocialIcons;

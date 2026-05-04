import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { type NavLink } from "../types";
import { NAV_LINKS } from "../constants";

function Navbar() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
    tl.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  }, []);

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>SIP PRESTIGE</p>
        </a>

        <ul>
          {NAV_LINKS.map((link: NavLink) => (
            <li key={link.id}>{link.title}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

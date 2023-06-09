import Link from "next/link";

const Nav = () => {
  return (
    <nav id="nav" className="h-screen bg-orange-900">
      <ul>
        <li><Link target="_blank" href="https://drive.google.com/file/d/1huO-gbsx88v5zIhoA1DmPvQ5OOiAPTUl/view?usp=sharing">Download my CV</Link></li>
        <li><Link target="_blank" href="https://calendly.com/ramirodlp/15min">Book a Meeting</Link></li>
        <li><Link target="_blank" href="https://forms.gle/MwpUZgpCzjuMxAGo6">Drop me a Message</Link></li>
        <li><Link target="_blank" href="https://www.linkedin.com/in/ramirodlp/details/projects/">Check my Projects</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
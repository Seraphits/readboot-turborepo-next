//  import Link from "next/link";
// import { NavLink } from "./NavLink";
// import Image from "next/image";
import styles from './NavBar.module.scss';
import LogoImage from "../../Atoms/Logo/LogoImage";


 const NavBar = () => {
  return (
    <header>
      <div className={styles.logo}>
        <LogoImage/>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/style-guide">Style Guide</a></li>
          <li><a href="/">Docs</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;

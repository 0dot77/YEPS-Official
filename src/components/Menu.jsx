import { motion } from "framer-motion";
import { useStore } from "@nanostores/react";
import { isLayoutOpen } from "../atoms/layoutStore";
import { useMediaQuery } from "react-responsive";
import menuStyles from "../styles/menu.module.css";

export default function Menu() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const $isLayoutOpen = useStore(isLayoutOpen);
  return (
    <>
      {isSmallScreen ? (
        <svg
          onClick={() => {
            isLayoutOpen.set(!$isLayoutOpen);
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
      ) : (
        <NotMobileSubMenu />
      )}
      {$isLayoutOpen && <MobileSubMenu />}
    </>
  );
}

function MobileSubMenu() {
  return (
    <motion.div
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        width: "62.5%",
        height: "100vh",
        backgroundColor: "white",
        borderLeft: "1px solid black",
      }}
    >
      <ul className={menuStyles.listContainer}>
        <li className={menuStyles.list}>
          <a href="/about">ABOUT</a>
        </li>
        <li className={menuStyles.list}>
          <a href="/work">WORK</a>
        </li>
        <li className={menuStyles.list}>
          <a>LETTER</a>
        </li>
        <li className={menuStyles.list}>
          <a>STUDY</a>
        </li>
      </ul>
      <svg
        onClick={() => {
          isLayoutOpen.set(false);
        }}
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "0",
        }}
        width="30"
        height="29"
        viewBox="0 0 30 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.75 28.2647L28.2647 14.75L14.75 1.23528"
          stroke="black"
          strokeWidth="1.5"
        />
        <path
          d="M27.7647 14.75L0.764725 14.75"
          stroke="black"
          strokeWidth="1.5"
        />
      </svg>
    </motion.div>
  );
}

function NotMobileSubMenu() {
  return (
    <>
      <ul className={menuStyles.listContainer}>
        <li className={menuStyles.list}>
          <a href="/about">ABOUT</a>
        </li>
        <li className={menuStyles.list}>
          <a href="/work">WORK</a>
        </li>
        <li className={menuStyles.list}>
          <a>LETTER</a>
        </li>
        <li className={menuStyles.list}>
          <a>STUDY</a>
        </li>
      </ul>
    </>
  );
}

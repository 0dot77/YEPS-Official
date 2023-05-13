import { useMediaQuery } from "react-responsive";

export default function MenuGoUpper() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      {isSmallScreen && (
        <svg
          onClick={() => handleClick()}
          width="29"
          height="30"
          viewBox="0 0 29 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.0294 15.5147L14.5147 2L1 15.5147"
            stroke="black"
            strokeWidth="1.5"
          ></path>
          <path
            d="M14.5147 2.5V29.5"
            stroke="black"
            strokeWidth="1.5"
          ></path>
        </svg>
      )}
    </>
  );
}

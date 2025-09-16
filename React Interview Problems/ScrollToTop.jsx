import { useEffect, useState } from "react";

function BackToTop() {
  let arr = new Array(50).fill(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    // 🔑 Run once to set initial visibility
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="backToTop">
      <h1>Back To Top</h1>
      <div className="container">
        {arr.map((_, index) => (
          <p key={index}>This is a paragraph {index + 1}</p>
        ))}

        {/* Only render button when visible */}
        {isVisible && (
          <button
            className="backtotop-btn"
            onClick={scrollToTop}
            data-testid="back-to-top-btn"
          >
            Back to Top
          </button>
        )}
      </div>
    </div>
  );
}

export default BackToTop;

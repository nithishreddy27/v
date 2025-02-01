import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/masking.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isDivVisible, setIsDivVisible] = useState(true);
  const divRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDivVisible(entry.isIntersecting);
      },
      {
        root: null, // Use viewport as the root
        threshold: 0.1, // Trigger when 10% of the div is visible
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);
  return (
    <div>
      <Navbar isDivVisible={isDivVisible} />
      <Component {...pageProps} divRef={divRef} />
    </div>
  );
}

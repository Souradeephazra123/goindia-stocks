"use client";
import HomePageMobile from "@/components/HomePageMobile";
import Homepage from "@/components/Homepage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Update isMobile state on window resize
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 450);
      };
      handleResize();

      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  // if (typeof window !== "undefined" && window.innerWidth >= 450){
  //   isMobile=true;
  // }

  
  return (
    <main className=" font-sans">
      {isMobile ? <HomePageMobile /> : <Homepage />}
    </main>
  );
}

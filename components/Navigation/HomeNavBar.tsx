"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import ThemeToggle from "../Themes/ThemeToggle";
import { assets } from "@/public/assets";

const HomeNavBar = () => {
  const [scrolledUp, setScrolledUp] = useState(true); // Track if user scrolled up
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
      setScrolledUp(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-200 ${scrolledUp ? "translate-y-0" : "-translate-y-full"} ${isScrolled ? "custom-blur bg-white/70 shadow-sm dark:bg-neutral-950/70" : "bg-transparent"}`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="h-8 w-8">
            <Image src={assets.issue_desk_logo} alt="Issue Desk Logo" />
          </Link>
          <span className="hidden text-xl font-semibold sm:flex">
            Issue Desk
          </span>
        </div>
        <ThemeToggle />
      </nav>
    </div>
  );
};

export default HomeNavBar;

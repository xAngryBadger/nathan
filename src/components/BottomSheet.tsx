import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { site, menuLinks } from "../data/site";

function useOpenWithNavigation(): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [toggledOpen, setToggledOpen] = useState(false);
  const [lastPath, setLastPath] = useState(window.location.pathname);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== lastPath) {
      setLastPath(location.pathname);
      if (toggledOpen) setToggledOpen(false);
    }
  }, [location.pathname, lastPath, toggledOpen]);

  return [toggledOpen, setToggledOpen];
}

export default function BottomSheet() {
  const [open, setOpen] = useOpenWithNavigation();
  const sheetRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const location = useLocation();

  useEffect(() => {
    const tweens: gsap.core.Tween[] = [];
    if (open) {
      if (backdropRef.current) tweens.push(gsap.to(backdropRef.current, { opacity: 1, duration: 0.35 }));
      if (sheetRef.current) tweens.push(gsap.to(sheetRef.current, { y: "0%", duration: 0.35, ease: "power3.out" }));
      itemsRef.current.forEach((el, i) => {
        if (el) tweens.push(gsap.fromTo(el, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.25, delay: 0.04 * i, ease: "power2.out" }));
      });
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      if (backdropRef.current) tweens.push(gsap.to(backdropRef.current, { opacity: 0, duration: 0.25 }));
      if (sheetRef.current) tweens.push(gsap.to(sheetRef.current, { y: "calc(100% - 48px)", duration: 0.25, ease: "power3.out" }));
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      tweens.forEach((tw) => tw.kill());
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div ref={backdropRef} className="sheet-backdrop" style={{ opacity: 0, pointerEvents: open ? "auto" : "none" }} onClick={() => setOpen(false)} />
      <div ref={sheetRef} className="sheet" style={{ transform: "translateY(calc(100% - 48px))" }}>
        <button className="sheet-toggle" onClick={() => setOpen((v) => !v)}>
          <span>{site.name}</span>
          <span style={{ color: "var(--color-accent)" }}>{open ? "↑" : "↓"}</span>
        </button>
        <nav className="flex flex-col overflow-y-auto" style={{ maxHeight: "calc(80dvh - 48px)" }}>
          {menuLinks.map((link, i) => {
            const isActive = location.pathname === link.href;
            return (
              <Link key={link.href} ref={(el) => { itemsRef.current[i] = el; }} to={link.href} className={`sheet-item${isActive ? " sheet-item-active" : ""}`}>
                <span>
                  <span className="sheet-item-num">{link.num}</span>
                  {link.label}
                </span>
                <span className="sheet-item-arrow">→</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

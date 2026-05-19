import { useRef, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

interface DirectionalLinkTileProps {
  to: string;
  num: string;
  children: string;
}

function getDirection(e: React.MouseEvent, el: HTMLElement): "top" | "bottom" {
  const { top, height } = el.getBoundingClientRect();
  return e.clientY - top < height / 2 ? "top" : "bottom";
}

export default function DirectionalLinkTile({ to, num, children }: DirectionalLinkTileProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const tileRef = useRef<HTMLSpanElement>(null);
  const location = useLocation();
  const isActive = location.pathname === to || (to !== "/" && location.pathname.startsWith(to));
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (tileRef.current) {
      gsap.set(tileRef.current, { y: "-101%" });
    }
    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, []);

  const onEnter = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!tileRef.current) return;
    if (tweenRef.current) {
      tweenRef.current.kill();
    }
    const dir = getDirection(e, ref.current!);
    gsap.set(tileRef.current, { y: dir === "top" ? "-101%" : "101%" });
    tweenRef.current = gsap.to(tileRef.current, { y: "0%", duration: 0.35, ease: "power3.out" });
  }, []);

  const onLeave = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!tileRef.current) return;
    if (tweenRef.current) {
      tweenRef.current.kill();
    }
    const dir = getDirection(e, ref.current!);
    tweenRef.current = gsap.to(tileRef.current, { y: dir === "top" ? "-101%" : "101%", duration: 0.25, ease: "power3.out" });
  }, []);

  return (
    <Link ref={ref} to={to} onMouseEnter={onEnter} onMouseLeave={onLeave} className={`nav-tile${isActive ? " nav-tile-active" : ""}`}>
      <span className="nav-tile-num">{num} —</span>
      <span className="nav-tile-text">{children}</span>
      <span ref={tileRef} className="nav-tile-bg" />
    </Link>
  );
}

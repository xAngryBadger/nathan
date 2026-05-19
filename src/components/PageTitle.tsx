import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PageTitleProps {
  subtitle: string;
  title: string;
}

export default function PageTitle({ subtitle, title }: PageTitleProps) {
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(subtitleRef.current, 
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.1 }
      );
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.2 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <p ref={subtitleRef} className="page-subtitle" style={{ opacity: 0 }}>{subtitle}</p>
      <h1 ref={titleRef} className="page-title" style={{ opacity: 0 }}>{title}</h1>
    </>
  );
}

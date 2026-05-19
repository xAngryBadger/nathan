import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const hoverRef = useRef(false);

  useEffect(() => {
    if (!dotRef.current) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      gsap.set(dot, { x: e.clientX - 4, y: e.clientY - 4 });
      if (!dot.classList.contains("custom-cursor-visible")) {
        dot.classList.add("custom-cursor-visible");
      }
    };

    const onHoverEnter = () => {
      hoverRef.current = true;
      dot.classList.add("custom-cursor-hover");
    };

    const onHoverLeave = () => {
      hoverRef.current = false;
      dot.classList.remove("custom-cursor-hover");
    };

    const onLeave = () => {
      dot.classList.remove("custom-cursor-visible");
    };

    const addListeners = (el: Element) => {
      el.addEventListener("mouseenter", onHoverEnter);
      el.addEventListener("mouseleave", onHoverLeave);
    };

    const removeListeners = (el: Element) => {
      el.removeEventListener("mouseenter", onHoverEnter);
      el.removeEventListener("mouseleave", onHoverLeave);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    const initial = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select"
    );
    initial.forEach(addListeners);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            const selector = "a, button, [role='button'], input, textarea, select";
            if (node.matches(selector)) addListeners(node);
            node.querySelectorAll(selector).forEach(addListeners);
          }
        });
        mutation.removedNodes.forEach((node) => {
          if (node instanceof Element) {
            const selector = "a, button, [role='button'], input, textarea, select";
            if (node.matches(selector)) removeListeners(node);
            node.querySelectorAll(selector).forEach(removeListeners);
          }
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      observer.disconnect();
      const all = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select"
      );
      all.forEach(removeListeners);
    };
  }, []);

  return <div ref={dotRef} className="custom-cursor" />;
}

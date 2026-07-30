"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorLabel = cursor?.querySelector<HTMLElement>(".cursor-label");
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!cursor || !hasFinePointer) return;

    const onPointerMove = (event: PointerEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.classList.add("is-visible");
      const target = (event.target as Element | null)?.closest<HTMLElement>("a, button");
      cursor.classList.toggle("is-active", Boolean(target));
      if (cursorLabel) cursorLabel.textContent = target?.dataset.cursor ?? (target ? "↗" : "");
    };
    const onPointerDown = () => cursor.classList.add("is-pressed");
    const onPointerUp = () => cursor.classList.remove("is-pressed");
    const onPointerLeave = () => {
      cursor.classList.remove("is-active", "is-visible");
      if (cursorLabel) cursorLabel.textContent = "";
    };
    const onPointerEnter = () => cursor.classList.add("is-visible");

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.documentElement.addEventListener("pointerenter", onPointerEnter);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.documentElement.removeEventListener("pointerenter", onPointerEnter);
    };
  }, []);

  return <div ref={cursorRef} className="cursor custom-cursor" aria-hidden="true"><span className="cursor-label" /></div>;
}

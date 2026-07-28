"use client";

import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".cursor");
    const cursorLabel = document.querySelector<HTMLElement>(".cursor-label");
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let cursorX = pointerX;
    let cursorY = pointerY;
    let cursorFrame = 0;

    const renderCursor = () => {
      cursorX += (pointerX - cursorX) * .18;
      cursorY += (pointerY - cursorY) * .18;
      cursor?.style.setProperty("transform", `translate3d(${cursorX}px, ${cursorY}px, 0)`);
      cursorFrame = window.requestAnimationFrame(renderCursor);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      const target = (event.target as Element | null)?.closest<HTMLElement>("a, button");
      cursor?.classList.toggle("is-active", Boolean(target));
      if (cursorLabel) cursorLabel.textContent = target?.dataset.cursor ?? (target ? "↗" : "");
    };
    const onPointerDown = () => cursor?.classList.add("is-pressed");
    const onPointerUp = () => cursor?.classList.remove("is-pressed");
    const onPointerLeave = () => cursor?.classList.remove("is-active");

    if (hasFinePointer) cursorFrame = window.requestAnimationFrame(renderCursor);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);

    return () => {
      if (cursorFrame) window.cancelAnimationFrame(cursorFrame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <div className="cursor" aria-hidden="true"><span className="cursor-label" /></div>;
}

import { useCallback, useEffect, useState } from "react";
import type { Callback } from "../types/callback.type";

export function usePageScroll({
  onScroll,
  onScrollEnd,
}: {
  onScroll?: Callback;
  onScrollEnd?: Callback;
} = {}) {
  const [currentScroll, setCurrentScroll] = useState(window.scrollY);

  const handleScroll = useCallback(() => {
    if (!onScroll) return;

    const { scrollY } = window;

    onScroll(scrollY);
    setCurrentScroll(scrollY);
  }, [onScroll]);

  const handleScrollEnd = useCallback(() => {
    const { scrollY } = window;

    if (onScrollEnd) {
      onScrollEnd(scrollY);
    }

    setCurrentScroll(scrollY);
  }, [onScrollEnd]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scrollend", handleScrollEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
    };
  }, [handleScroll, handleScrollEnd]);

  return {
    currentScroll,
  };
}

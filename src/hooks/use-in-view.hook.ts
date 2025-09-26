import { useEffect, useRef, useState } from "react";

export function useInView(
  intersectionOptions: IntersectionObserverInit = { threshold: 0.2 }
) {
  const viewWindowRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    if (!viewWindowRef.current) return;

    const viewWindowObserver = new IntersectionObserver(([view]) => {
      if (view.isIntersecting) {
        setIsInView(true);
        viewWindowObserver.disconnect();
      }
    }, intersectionOptions);

    viewWindowObserver.observe(viewWindowRef.current);

    return () => viewWindowObserver.disconnect();
  }, [intersectionOptions]);

  return { viewWindowRef, isInView };
}

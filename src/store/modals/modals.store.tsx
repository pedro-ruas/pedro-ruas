import { useCallback, useState, type PropsWithChildren } from "react";
import { ModalsContext } from "./modals.context";

export function ModalsProvider({ children }: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((s) => !s);
  }, []);

  return (
    <ModalsContext value={{ sidebarOpen, toggleSidebar }}>
      {children}
    </ModalsContext>
  );
}

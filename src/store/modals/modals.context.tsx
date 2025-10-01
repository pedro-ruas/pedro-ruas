import { createContext } from "react";
import type { Callback } from "../../types/callback.type";

interface ModalsContext {
  sidebarOpen: boolean;
  toggleSidebar: Callback;
}

export const ModalsContext = createContext<ModalsContext>({
  sidebarOpen: false,
  toggleSidebar: () => {},
});

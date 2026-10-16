"use client";

import { createContext, useContext, type ReactNode } from "react";

const PortalContainerContext = createContext<HTMLElement | undefined>(undefined);

/** Keep shadcn portals inside the host's theme and stylesheet boundary. */
export function PortalContainerProvider({
  container,
  children,
}: {
  container: HTMLElement | undefined;
  children: ReactNode;
}) {
  return (
    <PortalContainerContext.Provider value={container}>
      {children}
    </PortalContainerContext.Provider>
  );
}

export function usePortalContainer() {
  return useContext(PortalContainerContext);
}

"use client";

import { appStore } from "@/redux";
import { Provider } from "react-redux";

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Provider store={appStore}>
      {children}
    </Provider>
  );
}

export default AppLayout;
"use client";

import { useState } from "react";
import Sidebar from "../_components/layouts/sidebar";
import Header from "../_components/layouts/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const toggleSidebar = () => setIsSidebarExpanded(!isSidebarExpanded);
  return (
    <main className="flex max-h-screen font-roboto overflow-clip">
      {/* Sidebar */}
      <Sidebar isSidebarExpanded={isSidebarExpanded} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </main>
  );
}
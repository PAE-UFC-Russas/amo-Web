import React from "react";

import MainContent from "@/components/MainContent";
import Sidebar from "@/components/SideBar";

import "./page.css";

export default function Forum() {
  return (
    <div className="Forum-container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

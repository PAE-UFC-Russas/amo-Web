"use client";

import AuthContextProvider from "@/context/auth";
import SubjectContextProvider from "@/context/subject";
import { ToastProvider } from "@/context/toast";

export default function Providers({ children }) {
  return (
    <AuthContextProvider>
      <SubjectContextProvider>
        <ToastProvider>{children}</ToastProvider>
      </SubjectContextProvider>
    </AuthContextProvider>
  );
}

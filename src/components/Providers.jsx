"use client";

import AuthContextProvider from "@/context/auth";
import SubjectContextProvider from "@/context/subject";

export default function Providers({ children }) {
  return (
    <AuthContextProvider>
      <SubjectContextProvider>{children}</SubjectContextProvider>
    </AuthContextProvider>
  );
}

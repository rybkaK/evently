import Header from "@/components/shared/Header";
import React from "react";
import Footer from "@/components/shared/Footer";

export default function Layout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
            {children}
        </div>
    );
}

import { PageContainer } from "@/shared/ui/PageContainer/PageContainer";
import Logo from "@/app/assets/icons/logo.svg?react";
import React from "react";

export const Footer = () => {
    return (
        <footer className="h-[400px] bg-[#F8F8F8] mt-[200px]">
            <PageContainer>
                <div className="pt-[50px]">
                    <Logo />
                </div>
            </PageContainer>
        </footer>
    );
};

import Logo from "@/app/assets/icons/logo.svg?react";

import { createPortal } from "react-dom";
import { TProps } from "./types";
import { AnimatePresence, motion } from "framer-motion";

export const BaseModal = (props: TProps) => {
    return createPortal(
        <AnimatePresence>
            {props.open && (
                // overlay
                <motion.div
                    className="fixed top-0 bottom-0 left-0 right-0 z-[9999] backdrop-blur-xl bg-[rgba(255, 255, 255, 0.1)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Модалка */}
                    <motion.div
                        className="h-full py-10 px-5 sm:px-[120px] w-full sm:w-[550px] flex flex-col items-center justify-between bg-white"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.5 }}
                    >
                        {props.children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

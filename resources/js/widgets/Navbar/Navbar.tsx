import Logo from "@/app/assets/icons/logo.svg?react";
import Menu from "@/app/assets/icons/menu.svg?react";
import Favorite from "@/app/assets/icons/favorite.svg?react";
import Cart from "@/app/assets/icons/cart.svg?react";
import Profile from "@/app/assets/icons/profile.svg?react";
import { PageContainer } from "@/shared/ui/PageContainer/PageContainer";
import { useState } from "react";
import Close from "@/app/assets/icons/cross.svg?react";
import { BaseModal } from "@/shared/ui/BaseModal/BaseModal";
import { Link } from "@inertiajs/react";
import { observer } from "mobx-react-lite";
import { CartModel } from "@/entities/Cart";
export const Navbar = observer(() => {
    const [open, setOpen] = useState(false);
    const openHandler = () => {
        setOpen(!open);
    };
    const store = CartModel.CartStore;
    return (
        <>
            <div className="bg-[#F8F8F8]  h-[100px] flex items-center">
                <PageContainer className="flex items-center justify-between">
                    <button
                        onClick={openHandler}
                        className="block sm:hidden p-1"
                    >
                        <Menu />
                    </button>
                    <Link href="/">
                        <Logo />
                    </Link>

                    <a
                        href="tel:8 (812) 123-45-67"
                        className="text-[18px] text-black hover:text-[#FF9900] transition-colors duration-300"
                    >
                        8 (812) 123-45-67
                    </a>
                </PageContainer>
            </div>
            <PageContainer className="hidden sm:flex h-[100px] items-center justify-between">
                <button onClick={openHandler} className="hidden  sm:block">
                    <Menu />
                </button>
                <div className="flex gap-[40px] items-center">
                    {/* <button>
                        <Favorite />
                    </button> */}
                    <Link href="/cart" className="relative">
                        <Cart />
                        {store.getAll.length > 0 && (
                            <span className="absolute top-[-10px] right-[-10px] bg-[#FF9900] w-[20px] h-[20px] rounded-full flex items-center justify-center text-white text-[12px]">
                                {store.getAll.length}
                            </span>
                        )}
                    </Link>
                    {/* <button>
                        <Profile />
                    </button> */}
                </div>
            </PageContainer>
            <BaseModal open={open} onClose={() => setOpen(false)}>
                <div className="flex items-center justify-between w-full">
                    <Logo />
                    <button onClick={openHandler}>
                        <Close />
                    </button>
                </div>
            </BaseModal>
        </>
    );
});

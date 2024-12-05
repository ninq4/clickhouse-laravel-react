import Favorite from "@/app/assets/icons/favorite.svg?react";
import Cart from "@/app/assets/icons/cart.svg?react";
import Profile from "@/app/assets/icons/profile.svg?react";
import { Link } from "@inertiajs/react";

export const BottomNavbar = () => {
    return (
        <div className="fixed flex sm:hidden items-center justify-around bottom-0 left-0 right-0 w-full h-[50px] bg-white">
            <Link href="/favorite" className="flex flex-col items-center">
                <Favorite className="w-[20px]" />
                <p className="text-[#C4C4C4] text-[10px] font-regular">
                    Избранное
                </p>
            </Link>
            <Link href="/cart" className="flex flex-col items-center">
                <Cart className="w-[20px]" />
                <p className="text-[#C4C4C4] text-[10px] font-regular">
                    Корзина
                </p>
            </Link>
            <Link href="/profile" className="flex flex-col items-center ">
                <Profile className="w-[20px]" />
                <p className="text-[#C4C4C4] text-[10px] font-regular">
                    Профиль
                </p>
            </Link>
        </div>
    );
};

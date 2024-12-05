import { CategoryCard } from "@/shared/ui/CategoryCard/CategoryCard";
import { Link } from "@inertiajs/react";
import { Props } from "./types";

export const CheckCaseHead = (props: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center sm:justify-between gap-2">
                <h2 className="text-[30px] font-bold text-black ">
                    {props.title}
                </h2>
                <Link
                    className="text-black text-[18px] font-regular hover:text-[#FF9900] transition-colors"
                    href={props.href}
                >
                    {props.linkTitle}
                </Link>
            </div>
            <div className="flex items-center flex-wrap gap-4">
                {props.children}
            </div>
        </div>
    );
};

import clsx from "clsx";
import { Props } from "./types";
import { Link } from "@inertiajs/react";

export const Button = (props: Props) => {
    const rootClassNames = clsx(
        "p-4 bg-[#FF9900] text-white text-center rounded-[116px] font-bold text-[14px]",
        props.className // Если className передан, он будет добавлен
    );

    if (props.href) {
        return (
            <Link className={rootClassNames} href={props.href}>
                {props.children}
            </Link>
        );
    }

    return (
        <button className={rootClassNames} {...props}>
            {props.children}
        </button>
    );
};

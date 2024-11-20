import clsx from "clsx";
import { Props } from "./types";

export const Button = (props: Props) => {
    const rootClassNames = clsx(
        "p-4 bg-[#FF9900] text-white rounded-[116px] font-bold text-[14px]",
        props.className
    );
    return (
        <button className={rootClassNames} {...props}>
            {props.children}
        </button>
    );
};

import clsx from "clsx";
import { Props } from "./types";

export const PageContainer = (props: Props) => {
    const rootClassNames = clsx("container mx-auto", props.className);
    return <div className={rootClassNames}>{props.children}</div>;
};

import { useState } from "react";
import { TProps } from "./types";
import { getStorageImage } from "@/shared/lib/utils/formatImage/formatImage";

export const ImageViewer = (props: TProps) => {
    const [image, setImage] = useState(props.images[0]);
    return (
        <div className="flex flex-col gap-2 flex-1">
            <img
                className=" w-full h-[400px] object-cover"
                src={getStorageImage(image)}
            />
            {props.images.length > 1 && (
                <div className="flex gap-2 align-center flex-wrap">
                    {props.images
                        .filter((item) => item !== image)
                        .map((item) => (
                            <img
                                className="w-[100px] h-[100px] object-cover"
                                onMouseEnter={() => setImage(item)}
                                onMouseLeave={() => setImage(props.images[0])}
                                src={getStorageImage(item)}
                            />
                        ))}
                </div>
            )}
        </div>
    );
};

import { TCategory } from "@/entities/Category/types";
import { TProduct } from "@/entities/Product/types";
import { AddCard } from "@/features/Cart/AddCard/ui/AddCard";
import { PageContainer } from "@/shared/ui/PageContainer/PageContainer";
import { Footer } from "@/widgets/Footer/Footer";
import { ImageViewer } from "@/widgets/ImageViewer/ImageViewer";
import { Navbar } from "@/widgets/Navbar/Navbar";
import { ProductCard } from "@/widgets/ProductCard/ProductCard";
import ReactMarkdown from "react-markdown";

type TData = {
    product: TProduct;
};

const ProductsPage = (data: TData) => {
    return (
        <>
            <Navbar />
            <PageContainer>
                <div className="flex items-start flex-col-reverse md:flex-row justify-between mix-w-[200px] gap-4 flex-wrap">
                    <ImageViewer images={data.product.images} />
                    <div className="flex flex-col gap-6 flex-1">
                        <h3 className="text-[18px] font-bold">
                            {data.product.name}
                        </h3>

                        {data.product.description && (
                            <ReactMarkdown
                            className="text-[14px] font-regular text-[#7d7d7d]"
                                children={data.product.description}
                            />
                        )}
                        <div className="w-[300px] flex flex-col gap-4 ">
                            <p className="text-[30px] font-bold">{data.product.price} ₽</p>
                            <AddCard reverse {...data.product} />
                        </div>
                    </div>
                </div>
            </PageContainer>
            <Footer />
        </>
    );
};

export default ProductsPage;

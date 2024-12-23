import { TCategory } from "@/entities/Category/types";
import { TProduct } from "@/entities/Product/types";
import { AddCard } from "@/features/Cart/AddCard/ui/AddCard";
import { PageContainer } from "@/shared/ui/PageContainer/PageContainer";
import { Footer } from "@/widgets/Footer/Footer";
import { Navbar } from "@/widgets/Navbar/Navbar";
import { ProductCard } from "@/widgets/ProductCard/ProductCard";
type TData = {
    category: TCategory;
    products: TProduct[];
};
const ProductsPage = () => {
    return (
        <>
            <Navbar />
            <PageContainer>
                <>
                    <h2 className="font-bold text-[36px] text-black mb-[42px]">
                        123
                    </h2>
                    {/* <div className="flex items-center flex-wrap gap-4">
                        {data.products.map((product) => (
                            <ProductCard key={product.id} {...product}>
                                <AddCard {...product} />
                            </ProductCard>
                        ))}
                    </div> */}
                </>
            </PageContainer>
            <Footer />
        </>
    );
};

export default ProductsPage;

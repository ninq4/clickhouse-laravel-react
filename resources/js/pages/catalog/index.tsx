import { TCategory } from "@/entities/Category/types";
import { CategoryCard } from "@/shared/ui/CategoryCard/CategoryCard";
import { PageContainer } from "@/shared/ui/PageContainer/PageContainer";
import { Footer } from "@/widgets/Footer/Footer";
import { Navbar } from "@/widgets/Navbar/Navbar";
type TData = {
    categories: TCategory[];
};
const CatalogPage = (data: TData) => {
    console.log(data);
    return (
        <>
            <Navbar />
            <PageContainer>
                <>
                    <h2 className="font-bold text-[36px] text-black mb-[42px]">
                        Каталог
                    </h2>
                    <div className="flex items-center flex-wrap gap-4">
                        {data.categories.map((category) => (
                            <CategoryCard
                                key={category.id}
                                slug={category.slug}
                                {...category}
                            />
                        ))}
                    </div>
                </>
            </PageContainer>
            <Footer />
        </>
    );
};

export default CatalogPage;

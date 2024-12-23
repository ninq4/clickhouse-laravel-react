import { PageContainer } from "@/shared/ui/PageContainer/PageContainer";
import { Navbar } from "@/widgets/Navbar/Navbar";
import { Button } from "@/shared/ui/Button/Button";
import { formatImage } from "@/shared/lib/utils/formatImage/formatImage";
import { Footer } from "@/widgets/Footer/Footer";
import { TProduct } from "@/entities/Product/types";
import { TCategory } from "@/entities/Category/types";
import { ShowCaseHead } from "@/shared/ui/ShowCaseHead/ShowCaseHead";
import { CategoryCard } from "@/shared/ui/CategoryCard/CategoryCard";
import { ProductCard } from "@/widgets/ProductCard/ProductCard";
import { AddCard } from "@/features/Cart/AddCard/ui/AddCard";

type TData = {
    products: TProduct[];
    discountProducts: TProduct[];
    popularProducts: TProduct[];
    popularCategory: TCategory[];
};

export default function Home(data: TData) {
    return (
        <>
            <Navbar />
            <PageContainer>
                <div className="flex flex-col gap-[60px]">
                    <div className="flex flex-col-reverse md:items-center md:flex-row items-start gap-4">
                        <div className="shadow-inset flex-[1] px-8 py-4 rounded-[30px] flex flex-col gap-[30px]">
                            <h2 className="text-[30px] font-bold">
                                Товар на любой вкус!
                            </h2>
                            <div className="flex flex-col items-start gap-2">
                                <p>Худи, чашки для горячего чая и термосы</p>
                                <p>Eлочные игрушки, брелочки</p>
                                <p>Начало списка вещей, которые можно</p>
                            </div>
                            <Button href="catalog">Перейти в каталог</Button>
                        </div>
                        <img
                            className="flex-[2] h-[400px] rounded-[30px] object-cover"
                            src={formatImage("banner.png")}
                            alt="banner"
                        />
                    </div>

                    <div className="flex flex-col gap-[60px]">
                        <ShowCaseHead
                            title="Популярные категории"
                            linkTitle="Смотреть все"
                            href="/catalog"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {data.popularCategory?.map((category) => (
                                    <CategoryCard
                                        key={category.id}
                                        {...category}
                                    />
                                ))}
                            </div>
                        </ShowCaseHead>

                        {/* Скидки */}
                        <ShowCaseHead
                            title="Скидки"
                            linkTitle="Смотреть все"
                            href="/"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {data.discountProducts?.map((product) => (
                                    <ProductCard key={product.id} {...product}>
                                        <AddCard {...product} />
                                    </ProductCard>
                                ))}
                            </div>
                        </ShowCaseHead>

                        {/* Товары в наличии */}
                        <ShowCaseHead
                            title="Товары в наличии"
                            linkTitle="Смотреть все"
                            href="/catalog"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {data.products?.map((product) => (
                                    <ProductCard key={product.id} {...product}>
                                        <AddCard {...product} />
                                    </ProductCard>
                                ))}
                            </div>
                        </ShowCaseHead>

                        {/* Популярные товары */}
                        <ShowCaseHead
                            title="Популярные товары"
                            linkTitle="Смотреть все"
                            href="/"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {data.popularProducts?.map((product) => (
                                    <ProductCard key={product.id} {...product}>
                                        <AddCard {...product} />
                                    </ProductCard>
                                ))}
                            </div>
                        </ShowCaseHead>
                    </div>
                </div>
            </PageContainer>
            <Footer />
        </>
    );
}

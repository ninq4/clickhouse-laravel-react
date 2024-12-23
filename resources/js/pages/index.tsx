import { PageContainer } from "@/shared/ui/PageContainer/PageContainer";
import { Navbar } from "@/widgets/Navbar/Navbar";
import { Button } from "@/shared/ui/Button/Button";
import { formatImage } from "@/shared/lib/utils/formatImage/formatImage";
import { BottomNavbar } from "@/widgets/BottomNavbar/BottomNavbar";
import { Footer } from "@/widgets/Footer/Footer";
import { TProduct } from "@/entities/Product/types";
import { TCategory } from "@/entities/Category/types";
import { ShowCaseHead } from "@/shared/ui/ShowCaseHead/ShowCaseHead";
import { CategoryCard } from "@/shared/ui/CategoryCard/CategoryCard";
import { ProductCard } from "@/widgets/ProductCard/ProductCard";
import { AddCard } from "@/features/Cart/AddCard/ui/AddCard";
import { useRoute } from "../../../vendor/tightenco/ziggy/src/js";
type TData = {
    products: TProduct[];
    discountProducts: TProduct[];
    popularProducts: TProduct[];
    popularCategory: TCategory[];
};
export default function Home(data: TData) {
    console.log(data);
    const route = useRoute();
    console.log(route());
    return (
        <>
            <Navbar />
            <PageContainer>
                <div className="flex h-[400px] flex-wrap items-start mb-[60px]">
                    <div className="shadow-inset flex-[1] px-8 py-4 rounded-[30px] flex flex-col gap-[30px] ">
                        <h2 className="text-[30px] font-bold">
                            Товар на любой вкус!
                        </h2>
                        <div className="flex flex-col items-start gap-2">
                            <p>Худи, чашки для горячего чая и термосы</p>
                            <p>Eлочные игрушки, брелочки</p>
                            <p>Начало списка вещей, которые можно</p>
                        </div>
                        <Button onClick={() => route("/catalog")}>
                            Перейти в каталог
                        </Button>
                    </div>
                    <img
                        className="flex-[2] h-[400px] rounded-[30px]"
                        src={formatImage("banner.png")}
                        alt={""}
                    />
                </div>
                <div className="flex flex-col gap-[60px]">
                    <ShowCaseHead
                        title="Популярные категории"
                        linkTitle="Смотреть все"
                        href="/catalog"
                    >
                        {data.popularCategory?.map((category) => (
                            <CategoryCard key={category.id} {...category} />
                        ))}
                    </ShowCaseHead>
                    <ShowCaseHead
                        title="Скидки"
                        linkTitle="Смотреть все"
                        href="/"
                    >
                        {data.discountProducts?.map((product) => (
                            <ProductCard key={product.id} {...product}>
                                <AddCard {...product} />
                            </ProductCard>
                        ))}
                    </ShowCaseHead>
                    <ShowCaseHead
                        title="Товары в наличии"
                        linkTitle="Смотреть все"
                        href="/catalog"
                    >
                        {data.products?.map((product) => (
                            <ProductCard key={product.id} {...product}>
                                <AddCard {...product} />
                            </ProductCard>
                        ))}
                    </ShowCaseHead>
                    <ShowCaseHead
                        title="Популярные товары"
                        linkTitle="Смотреть все"
                        href="/"
                    >
                        {data.popularProducts?.map((product) => (
                            <ProductCard key={product.id} {...product}>
                                <AddCard {...product} />
                            </ProductCard>
                        ))}
                    </ShowCaseHead>
                </div>
            </PageContainer>
            <Footer />
        </>
    );
}

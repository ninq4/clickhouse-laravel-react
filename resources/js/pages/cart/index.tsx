import { CartModel } from "@/entities/Cart";
import { TCategory } from "@/entities/Category/types";
import { CategoryCard } from "@/shared/ui/CategoryCard/CategoryCard";
import { PageContainer } from "@/shared/ui/PageContainer/PageContainer";
import { Footer } from "@/widgets/Footer/Footer";
import { Navbar } from "@/widgets/Navbar/Navbar";
import { ProductInCart } from "@/widgets/ProductInCart/ProductInCart";
import { observer } from "mobx-react-lite";

const CartPage = observer(() => {
    const store = CartModel.CartStore;
    return (
        <>
            <Navbar />
            <PageContainer>
                <>
                    <h2 className="font-bold text-[36px] text-black mb-[42px]">
                        Корзина
                    </h2>
                    <div className="flex items-start">
                        {store.getAll.length > 0 ? (
                            <div className="flex flex-col items-start flex-1">
                                {store.getAll.map((product) => (
                                    <ProductInCart
                                        key={product.id}
                                        {...product}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="flex-1 flex items-center justify-center">
                                Корзина пуста
                            </div>
                        )}
                        <div className="flex-1 flex" />
                    </div>
                </>
            </PageContainer>
            <Footer />
        </>
    );
});

export default CartPage;

import Logo from "@/app/assets/icons/logo.svg";
import { PageContainer } from "@/shared/ui/PageContainer/PageContainer";
export const Navbar = () => {
    const navData = [
        {
            title: "Каталог",
            path: "#",
        },
        {
            title: "Доставка",
            path: "#",
        },
        {
            title: "Условия",
            path: "#",
        },
        {
            title: "Контакты",
            path: "#",
        },
    ];
    return (
        <div className="bg-[#F8F8F8]  h-[100px] flex items-center">
            <PageContainer className="flex items-center justify-between">
                <div className="font-bold text-[24px]">Logo</div>

                <nav>
                    <ul className="flex gap-4">
                        {navData.map((item) => (
                            <li key={item.title}>
                                <a
                                    className="text-[18px] text-black hover:text-[#FF9900] transition-colors duration-300"
                                    href={item.path}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a
                    href="tel:8 (812) 123-45-67"
                    className="text-[18px] text-black hover:text-[#FF9900] transition-colors duration-300"
                >
                    8 (812) 123-45-67
                </a>
            </PageContainer>
        </div>
    );
};

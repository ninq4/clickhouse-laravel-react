import { PageContainer } from "@/shared/ui/PageContainer/PageContainer";
import { Navbar } from "@/widgets/Navbar/Navbar";
import { Button } from "@/shared/ui/Button/Button";
import { formatImage } from "@/shared/lib/utils/formatImage/formatImage";
import { BottomNavbar } from "@/widgets/BottomNavbar/BottomNavbar";
export default function Home() {
    return (
        <>
            <Navbar />
            <PageContainer>
                <div className="flex h-[400px] flex-wrap items-start">
                    <div className="shadow-inset flex-[1] px-8 py-4 rounded-[30px] flex flex-col gap-[30px] ">
                        <h2 className="text-[30px] font-bold">
                            Товар на любой вкус!
                        </h2>
                        <div className="flex flex-col items-start gap-2">
                            <p>Худи, чашки для горячего чая и термосы</p>
                            <p>Eлочные игрушки, брелочки</p>
                            <p>Начало списка вещей, которые можно</p>
                        </div>
                        <Button>Перейти в каталог</Button>
                    </div>
                    <img
                        className="flex-[2] h-[400px] rounded-[30px]"
                        src={formatImage("banner.png")}
                        alt={""}
                    />
                </div>
            </PageContainer>
            <BottomNavbar />
        </>
    );
}

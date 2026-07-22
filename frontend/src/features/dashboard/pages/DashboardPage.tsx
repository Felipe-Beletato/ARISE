import { MainLayout } from "@presentation/layouts/MainLayout";
import { Container } from "@presentation/components/ui/Container";

import { PlayerCard } from "@features/player/components/PlayerCard";

import {
    DashboardHeader,
    ProgressCard,
    DailyQuestList,
    CategoriesCard,
    MomentumCard,
} from "../components";


export function DashboardPage() {
    return (
        <MainLayout>

            <Container>

                <div className="flex flex-col gap-6 py-6">

                    <DashboardHeader />


                    <div className="
                        grid
                        gap-6
                        lg:grid-cols-12
                    ">

                        <div className="
                            lg:col-span-4
                        ">
                            <PlayerCard />
                        </div>


                        <div className="
                            lg:col-span-8
                        ">
                            <ProgressCard />
                        </div>


                        <div className="
                            lg:col-span-8
                        ">
                            <DailyQuestList />
                        </div>


                        <div className="
                            lg:col-span-4
                        ">
                            <CategoriesCard />
                        </div>


                        <div className="
                            lg:col-span-4
                            lg:col-start-9
                        ">
                            <MomentumCard />
                        </div>


                    </div>

                </div>

            </Container>

        </MainLayout>
    );
}
import React from "react";
import MainLayout from "../layouts/MainLayout";
import PresentationCard from "../components/PresentationCard";
import Benefits from "../components/Benefits";

function Home() {
    return (
        <div>
          <MainLayout>
            <PresentationCard />
            <Benefits />
          </MainLayout>
        </div>
    )
}

export default Home;
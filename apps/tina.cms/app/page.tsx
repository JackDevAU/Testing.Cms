import HomePageTina from "@/components/home-page/home-page";
import client from "@/tina/__generated__/client";

async function HomePage() {
    const res = await client.queries.page({relativePath: 'home.json'})
    return (
        <HomePageTina {...res} />
    );
}

export default HomePage;
import Hero from "./components/Hero";
import SkillsGrid from "./components/skill";


function Home () {
    return(
        <>
            <div>
                <Hero />
            </div>
            <div>
                <SkillsGrid />
            </div>
        </>
    );
}

export default Home;
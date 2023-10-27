import LandingSection from "@/components/LandingSection";
import About from "@/components/About";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";

const Main: React.FC = () => {
  return (
    <main className='app__content'>
      <LandingSection identifier='about' modifier={"--about"}>
        <About />
      </LandingSection>
      <LandingSection identifier='team' modifier={"--team"}>
        <Team />
      </LandingSection>
      <LandingSection identifier='projects' modifier={"--projects"}>
        <Projects />
      </LandingSection>
      <LandingSection identifier='contacts' modifier={"--contacts"}>
        <Contacts />
      </LandingSection>
    </main>
  );
};

export default Main;

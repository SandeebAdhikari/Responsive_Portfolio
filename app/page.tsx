import About from "@/components/About/About";
import SkillShowcase from "@/components/skills/SkillShowCase";
import { SKILLS_DATA } from "@/data/skills";
import NavBar from "@/components/NavBar";
import Profile from "@/components/Profile";
import Education from "@/components/Education";
import Project from "@/components/Project/Project";
import ContactMe from "@/components/contact/ContactMe";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="p-6">
      <NavBar></NavBar>
      <div className="m-6 rounded-lg">
        <Profile></Profile>
        <About></About>
        <SkillShowcase skills={SKILLS_DATA} />
        <Education></Education>
        <Project></Project>
        <ContactMe></ContactMe>
        <Footer></Footer>
      </div>
    </main>
  );
}

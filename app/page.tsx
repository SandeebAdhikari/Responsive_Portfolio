import About from "@/components/About/About";
import SkillShowcase from "@/components/skills/SkillShowCase";
import { SKILLS_DATA } from "@/data/skills";
import NavBar from "@/components/NavBar";
import Profile from "@/components/Profile";
import Education from "@/components/Education";

export default function Page() {
  return (
    <main className="p-6">
      <NavBar></NavBar>
      <div className="m-6 rounded-lg">
        <Profile></Profile>
        <About></About>
        <SkillShowcase skills={SKILLS_DATA} />
        <Education></Education>
      </div>
    </main>
  );
}

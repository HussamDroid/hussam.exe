import Project from "@/components/Project";
import TechStack from "@/components/TechStack";

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
          <h1 className="w-full text-[14vw] md:text-9xl font-black text-white uppercase italic tracking-tighter leading-[0.8] break-all md:break-normal">Projects</h1>
        <p className="text-gray-500 font-mono uppercase tracking-[0.5em] mt-4">Deep dive into my technical builds</p>
      </div>
      
      {/* Reusing existing component */}
      <TechStack />
      <Project isFullPage={true} />
      
    </main>
  );
}
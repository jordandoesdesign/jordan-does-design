import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const projects = [{
  id: 1,
  title: "Logo Designs",
  description: "The story of how the item-listing of Swiggy Daily was designed",
  image: "grid"
}, {
  id: 2,
  title: "FoodWithFeeling Canva Templates",
  description: "Getting started with UX Choreography",
  image: "single"
}, {
  id: 3,
  title: "Unbound Wellness • Pinterest Canva Templates",
  description: "Getting started with UX Choreography",
  image: "triple"
}, {
  id: 4,
  title: "SURR! Brand Design • Tags • Menu Price Sheet",
  description: "Getting started with UX Choreography",
  image: "single"
}, {
  id: 5,
  title: "Rose City Rollers • All-Stars Social Media Event Templates",
  description: "Getting started with UX Choreography",
  image: "double"
}, {
  id: 6,
  title: "Icons & Illustrations",
  description: "The story of how the item-listing of Swiggy Daily was designed",
  image: "single"
}];
const ProjectCard = ({
  project
}: {
  project: typeof projects[0];
}) => {
  const isLogoDesign = project.id === 1;
  const buttonContent = (
    <>
      Read More
      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
    </>
  );

  return <div className="group">
      <div className="bg-muted rounded-3xl overflow-hidden mb-4 transition-transform duration-300 hover:scale-105 h-64 flex items-center justify-center">
        <span className="text-muted-foreground">Image Placeholder</span>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
      {isLogoDesign ? (
        <Link to="/work/logo-designs">
          <Button variant="outline" className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            {buttonContent}
          </Button>
        </Link>
      ) : (
        <Button variant="outline" className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
          {buttonContent}
        </Button>
      )}
    </div>;
};
const WorkGrid = () => {
  return <section className="py-16 px-6">
      <div className="container mx-auto">
        {/* Curly arrows decoration */}
        
        
        <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-12">
          My work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>;
};
export default WorkGrid;
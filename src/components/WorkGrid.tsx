import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logoGrid from "@/assets/logo-grid.png";
import canvaMealPlan from "@/assets/canva-meal-plan.png";
import surriMockup from "@/assets/surri-mockup.png";
import pinterestCollection from "@/assets/pinterest-collection.png";
import rollersSocial from "@/assets/rollers-social.png";
import illustrationCollection from "@/assets/illustration-collection.png";
const projects = [{
  id: 1,
  title: "Logo Design & Brand Design",
  description: "Logo & Brand Design Strategy",
  link: "/work/logo-designs"
}, {
  id: 2,
  title: "Canva Template Design",
  description: "Editable templates for a food blogger who shares weekly meal plans on social media",
  link: "/work/canva-templates"
}, {
  id: 3,
  title: "Brand Design: SURRI",
  description: "Logo & brand created for a small business that sells handmade consumer goods",
  link: "/work/surr-brand"
}, {
  id: 4,
  title: "Canva Pinterest Graphics",
  description: "Easy to edit Pinterest templates for a blogger who loves to create content in Canva",
  link: "/work/pinterest-graphics"
}, {
  id: 5,
  title: "Social Media Event Templates • Rose City Rollers",
  description: "Social Media Design for Events & Tournaments",
  link: "/work/rose-city-rollers"
}, {
  id: 6,
  title: "Icons & Illustrations",
  description: "Custom Illustration Projects",
  link: "/work/icons-illustrations"
}];
const ProjectCard = ({
  project
}: {
  project: typeof projects[0];
}) => {
  const imageMap: {
    [key: number]: string;
  } = {
    1: logoGrid,
    2: canvaMealPlan,
    3: surriMockup,
    4: pinterestCollection,
    5: rollersSocial,
    6: illustrationCollection
  };
  return <div className="group">
      <Link to={project.link}>
        <div className="bg-muted overflow-hidden mb-4 transition-transform duration-300 hover:scale-105 h-64 cursor-pointer">
          <img src={imageMap[project.id]} alt={project.title} className="w-full h-full object-contain" />
        </div>
      </Link>
      <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
      <Link to={project.link}>
        <Button variant="outline" className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
          View Project
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Button>
      </Link>
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
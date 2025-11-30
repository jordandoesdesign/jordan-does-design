import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Logo Design & Brand Design",
    subtitle: "Logo & Brand Design Strategy",
    images: ["grid"],
    link: "/work/logo-designs"
  },
  {
    id: 2,
    title: "Canva Template Design",
    subtitle: "Editable templates for a food blogger who shares weekly meal plans on social media",
    images: ["large"],
    link: "/work/canva-templates"
  },
  {
    id: 3,
    title: "Brand Design: SURRI",
    subtitle: "Logo & brand created for a small business that sells handmade consumer goods",
    images: ["placeholder"],
    link: "/work/surr-brand"
  },
  {
    id: 4,
    title: "Canva Pinterest Graphics",
    subtitle: "Easy to edit Pinterest templates for a blogger who loves to create content in Canva",
    images: ["placeholder"],
    link: "/work/pinterest-graphics"
  },
  {
    id: 5,
    title: "Social Media Event Templates • Rose City Rollers",
    subtitle: "Social Media Design for Events & Tournaments",
    images: ["placeholder"],
    link: "/work/rose-city-rollers"
  },
  {
    id: 6,
    title: "Icons & Illustrations",
    subtitle: "Custom Illustration Projects",
    images: ["placeholder"],
    link: "/work/icons-illustrations"
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="group">
      {/* Image Area */}
      <Link to={project.link}>
        <div className="bg-muted rounded-3xl overflow-hidden mb-6 transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
          {project.images[0] === "grid" ? (
            // Logo grid layout
            <div className="grid grid-cols-3 gap-4 p-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-square bg-background rounded-2xl flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Logo {i + 1}</span>
                </div>
              ))}
            </div>
          ) : project.images[0] === "large" ? (
            // Large template preview
            <div className="p-8 flex items-center justify-center min-h-[400px]">
              <div className="bg-background rounded-2xl w-full h-full flex items-center justify-center">
                <span className="text-muted-foreground">Template Preview</span>
              </div>
            </div>
          ) : (
            // Standard placeholder
            <div className="h-80 flex items-center justify-center">
              <span className="text-muted-foreground">Image Placeholder</span>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          {project.subtitle}
        </p>
        <Link to={project.link}>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary mb-16 text-center">
            My Work
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;

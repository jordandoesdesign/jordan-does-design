import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logoGrid from "@/assets/logo-grid.png";
import canvaMealPlan from "@/assets/canva-meal-plan.png";
import surriMockup from "@/assets/surri-mockup.png";
import pinterestCollection from "@/assets/pinterest-collection.png";
import rollersSocial from "@/assets/rollers-social.png";
import illustrationCollection from "@/assets/illustration-collection.png";

interface SeeAlsoProject {
  title: string;
  link: string;
}

interface SeeAlsoSectionProps {
  projects: SeeAlsoProject[];
}

const projectImageMap: { [key: string]: string } = {
  "/work/logo-designs": logoGrid,
  "/work/canva-templates": canvaMealPlan,
  "/work/surr-brand": surriMockup,
  "/work/pinterest-graphics": pinterestCollection,
  "/work/rose-city-rollers": rollersSocial,
  "/work/icons-illustrations": illustrationCollection,
};

const SeeAlsoSection = ({ projects }: SeeAlsoSectionProps) => {
  return (
    <div className="mb-24">
      <h2 className="text-3xl font-heading font-bold text-primary mb-8">See also</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#FFE8E0] p-6 flex flex-col justify-between group">
            {/* Project Image */}
            <Link to={project.link} className="mb-4">
              <div className="overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                <AspectRatio ratio={40 / 27}>
                  <img
                    src={projectImageMap[project.link]}
                    alt={`Preview thumbnail for ${project.title} design project`}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </Link>
            
            {/* Project Title */}
            <Link to={project.link}>
              <h3 className="text-xl font-bold text-foreground mb-4 hover:text-primary transition-colors duration-300">{project.title}</h3>
            </Link>
            
            {/* View Project Button */}
            <Link to={project.link}>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-fit transition-all duration-300"
              >
                View Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeeAlsoSection;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, Mail } from "lucide-react";
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
  subtitle: "Logo & Brand Design Strategy",
  images: ["grid"],
  link: "/work/logo-designs"
}, {
  id: 2,
  title: "Canva Template Design",
  subtitle: "Editable templates for a food blogger who shares weekly meal plans on social media",
  images: ["large"],
  link: "/work/canva-templates"
}, {
  id: 3,
  title: "Brand Design: SURRI",
  subtitle: "Logo & brand created for a small business that sells handmade consumer goods",
  images: ["placeholder"],
  link: "/work/surr-brand"
}, {
  id: 4,
  title: "Canva Pinterest Graphics",
  subtitle: "Easy to edit Pinterest templates for a blogger who loves to create content in Canva",
  images: ["placeholder"],
  link: "/work/pinterest-graphics"
}, {
  id: 5,
  title: "Social Media Event Templates • Rose City Rollers",
  subtitle: "Social Media Design for Events & Tournaments",
  images: ["placeholder"],
  link: "/work/rose-city-rollers"
}, {
  id: 6,
  title: "Icons & Illustrations",
  subtitle: "Custom Illustration Projects",
  images: ["placeholder"],
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
      {/* Image Area */}
      <Link to={project.link}>
        <div className="overflow-hidden mb-6 transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
          <AspectRatio ratio={40 / 27}>
            <img src={imageMap[project.id]} alt={`${project.title} - ${project.subtitle}`} className="w-full h-full object-scale-down" />
          </AspectRatio>
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
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>;
};
const Work = () => {
  return <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary mb-16 text-center">
            My Work
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto">
            {projects.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </section>

      {/* Let's Work Together CTA */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's create something amazing.
          </p>
          <a href="mailto:Jordan@JordanVeirs.com">
            <Button size="lg" className="group/btn bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
              <Mail className="mr-2 h-5 w-5 transition-transform duration-300 group-hover/btn:-translate-x-0.5" />
              Contact Me
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Work;
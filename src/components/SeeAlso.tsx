import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const seeAlsoProjects = [
  {
    id: 1,
    title: "FoodWithFeeling Canva Templates",
  },
  {
    id: 2,
    title: "Unbound Wellness · Pinterest Canva Templates",
  },
  {
    id: 3,
    title: "Unbound Wellness · Pinterest Canva Templates",
  },
];

const SeeAlso = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12">
          See also
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {seeAlsoProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="bg-muted rounded-3xl h-48 md:h-56 mb-6 flex items-center justify-center overflow-hidden">
                <div className="w-2/3 h-2/3 rounded-3xl border-4 border-primary"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{project.title}</h3>
              <Button 
                variant="outline" 
                className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeeAlso;

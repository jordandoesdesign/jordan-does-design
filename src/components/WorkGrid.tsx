import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WorkGrid = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Portfolio Grid - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Grid Item 1 */}
          <div className="bg-muted rounded-3xl overflow-hidden aspect-square p-4">
            <div className="grid grid-cols-3 gap-2 h-full">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-background rounded-xl border-2 border-secondary"></div>
              ))}
            </div>
          </div>

          {/* Grid Item 2 */}
          <div className="bg-muted rounded-3xl overflow-hidden aspect-square flex items-center justify-center">
            <div className="w-2/3 h-2/3 rounded-3xl border-4 border-primary"></div>
          </div>

          {/* Grid Item 3 */}
          <div className="bg-muted rounded-3xl overflow-hidden aspect-square flex items-center justify-center">
            <div className="w-2/3 h-2/3 rounded-3xl border-4 border-primary"></div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-foreground mb-12 leading-relaxed text-center max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed posuere lectus. Morbi ut commodo enim, nec consequat velit. Proin a.
        </p>

        {/* Large Featured Project */}
        <div className="bg-muted rounded-3xl h-96 md:h-[500px]"></div>
      </div>
    </section>
  );
};

export default WorkGrid;

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary mb-8">
          FoodWithFeeling<br />Canva Templates
        </h1>
        
        <p className="text-lg text-foreground mb-12 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed posuere lectus. Morbi ut commodo enim, nec consequat velit. Proin a.
        </p>

        {/* Decorative Shapes */}
        <div className="flex gap-8 mb-12">
          <div className="w-32 h-32 rounded-3xl border-4 border-secondary"></div>
          <div className="w-40 h-40 rounded-3xl border-4 border-primary"></div>
        </div>

        <p className="text-lg text-foreground leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed posuere lectus. Morbi ut commodo enim, nec consequat velit. Proin a.
        </p>
      </div>
    </section>
  );
};

export default Hero;

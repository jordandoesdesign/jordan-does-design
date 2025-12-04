import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import jordanPortrait from "@/assets/jordan-portrait.png";
const About = () => {
  const services = " ✿ Logo Designs ✿ Brochures ✿ Social Media Templates ✿ Canva Templates ✿ eBooks ✿ & More! ";
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* About Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] gap-12 items-start">
            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-56 h-56 flex items-center justify-center overflow-hidden">
                <img
                  src={jordanPortrait}
                  alt="Jordan Veirs"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary mb-6">
                About
              </h1>
              <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-xl">
                Hi! I'm a digital designer in Portland, OR. I make Logos, Social Campaigns, and Canva
                templates so that small business owners can connect with their audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-4xl space-y-16">
          <div className="pt-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Logo &amp; Brand Design
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you are a new brand looking to discover your visual identity or you already have
              a logo you want to elevate, I love designing logos. My design process starts with an
              interview so I can learn about your brand’s story and gain insights about your industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/work">
                <Button
                  variant="outline"
                  className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  See My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </Link>
              <a href="mailto:Jordan@JordanVeirs.com?subject=Let%27s%20start%20a%20project.">
                <Button
                  variant="outline"
                  className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>

          <div className="pt-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Social Media Templates
            </h2>
            <p className="text-muted-foreground mb-8">
              I enjoy working with small businesses who are tired of overpaying for design services.
              With a background in digital marketing and over 10 years of design experience, I can
              provide you with all the design templates you need to create engaging social content.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/work">
                <Button
                  variant="outline"
                  className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  See My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </Link>
              <a href="mailto:Jordan@JordanVeirs.com?subject=Let%27s%20start%20a%20project.">
                <Button
                  variant="outline"
                  className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>

          <div className="pt-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Illustration
            </h2>
            <p className="text-muted-foreground mb-8">
              I love digital illustration. I have worked with clients to create custom icons,
              stickers, merchandise apparel, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/work">
                <Button
                  variant="outline"
                  className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  See My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </Link>
              <a href="mailto:Jordan@JordanVeirs.com?subject=Let%27s%20start%20a%20project.">
                <Button
                  variant="outline"
                  className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Marquee */}
      <section className="px-0 pb-8">
        <div className="bg-white py-4">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
              <span className="text-lg md:text-xl text-primary font-medium px-8">{services}</span>
              <span className="text-lg md:text-xl text-primary font-medium">{services}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      <Footer />
    </div>
  );
};
export default About;
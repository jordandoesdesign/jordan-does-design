import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0">
          <Link to="/" className="text-xl md:text-2xl font-heading text-primary font-bold">
            Jordan<span className="text-secondary">✦</span>Does<span className="text-secondary">✦</span>Design
          </Link>
          
          <div className="flex gap-6 md:gap-8">
            <Link to="/work" className="nav-link text-foreground hover:text-primary text-base md:text-lg font-medium">
              Work
            </Link>
            <Link to="/about" className="nav-link text-foreground hover:text-primary text-base md:text-lg font-medium">
              About
            </Link>
            <Link to="/contact" className="nav-link text-foreground hover:text-primary text-base md:text-lg font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

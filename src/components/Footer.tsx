import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="py-12 px-6" style={{
    backgroundColor: '#FF825A'
  }}>
      <div className="container mx-auto text-center">
        {/* Star decoration */}
        <div className="flex justify-center gap-3 mb-8">
          <span className="text-2xl text-primary">✿</span>
          <span className="text-2xl text-primary">✿</span>
          <span className="text-2xl text-primary">✿</span>
        </div>

        {/* Navigation Links */}
        <div className="gap-6 mb-8 flex-row flex items-center justify-center">
          <Link to="/work" className="text-primary hover:underline font-heading text-xl font-bold transition-all duration-300">
            Work
          </Link>
          <span className="text-primary">•</span>
          <Link to="/about" className="text-primary hover:underline font-heading text-xl font-bold transition-all duration-300">
            About
          </Link>
          
          
        </div>

        {/* Copyright */}
        <p className="text-primary-foreground text-sm">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>;
};
export default Footer;
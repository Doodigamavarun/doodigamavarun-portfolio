import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Mail } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-navy-deep hover:text-teal-accent transition-colors">
            Doodigama Varun
          </Link>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/certificates" className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certificates
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
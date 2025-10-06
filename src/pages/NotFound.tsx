import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center hero-gradient">
      <ThemeToggle />
      <div className="text-center space-y-6 px-4">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold text-gradient">404</h1>
          <h2 className="text-3xl font-bold">Page Not Found</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>
        <Button asChild size="lg" className="shadow-elegant hover:scale-105 transition-transform">
          <a href="/">
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

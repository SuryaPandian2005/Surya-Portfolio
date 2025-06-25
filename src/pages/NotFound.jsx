import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-background text-foreground">
      <div className="space-y-6 animate-fade-in">
        <h1 className="text-6xl font-bold tracking-tight text-primary">404</h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-md text-muted-foreground">
          Maybe it got unplugged or wandered off into the IoT void.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md shadow-md hover:bg-primary/90 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className="mt-12 opacity-70 animate-fade-in-delay-2">
        <img
          src="/projects/404.webp"
          alt="Lost in the network"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
};
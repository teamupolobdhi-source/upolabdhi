const techs = [
  "PANDAS", "REACT.JS", "SPRING BOOT", "FLUTTER", "TENSORFLOW", "NODE.JS", "ANGULAR", "PYTORCH", "DJANGO", "KOTLIN", "EXPRESS", "MONGODB", "AWS", "DOCKER", "TYPESCRIPT",
];

const TechMarquee = () => {
  return (
    <div className="relative overflow-hidden border-y border-border py-5 bg-secondary/40">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="marquee-track">
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <span key={`a-${i}`} className="inline-flex items-center gap-6 mx-6">
            <span className="text-sm font-medium tracking-[0.2em] text-muted-foreground/40 uppercase whitespace-nowrap hover:text-foreground transition-colors duration-500">
              {tech}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;

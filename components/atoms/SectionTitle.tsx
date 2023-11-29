import { cn } from "@/lib/utils";

const SectionTitle: React.FC<{
  index: number;
  title: string;
  className?: string;
}> = ({ index, title, className }) => {
  const gradientClassList = [
    "gradient-colors-1",
    "gradient-colors-2",
    "gradient-colors-3",
    "gradient-colors-4",
  ];
  const gradientClass = gradientClassList[index % gradientClassList.length];

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-y-2 sm:gap-y-4 text-xl sm:text-3xl",
        gradientClass,
        className
      )}
    >
      <div
        // Separator
        className={cn("h-16 sm:h-24 w-px bg-gradient-to-r", gradientClass)}
      />

      <div className="font-semibold rounded-full h-12 w-12 sm:h-16 sm:w-16 grid place-items-center bg-foreground text-background bg-gradient-to-r">
        {index}
      </div>
      <h4 className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r text-center">
        {title}
      </h4>
    </div>
  );
};

export default SectionTitle;

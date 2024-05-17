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
        className={cn("h-12 sm:h-20 w-px bg-gradient-to-r", gradientClass)}
      />

      <div className="grid size-12 place-items-center rounded-full bg-foreground bg-gradient-to-r font-semibold text-background sm:size-16">
        {index}
      </div>
      <h3 className="bg-gradient-to-r bg-clip-text text-center font-extrabold text-transparent">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;

import { IconType } from "react-icons";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type TimelineElement = {
  title: string;
  subtitle: string;
  badges?: string[];
  description: string[];

  Icon: IconType;
  date: string;

  footer?: React.ReactNode;
};

type VerticalTimelineElementProps = TimelineElement & {
  odd: boolean;
};

const VerticalTimelineElement: React.FC<VerticalTimelineElementProps> = ({
  title,
  subtitle,
  badges,
  description,
  footer,
  Icon,
  date,

  odd,
}) => {
  return (
    <>
      <Card
        // Right on small screens, alternate on others screens
        className={cn("col-start-2", odd ? "md:col-start-1" : "md:col-start-3")}
      >
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {title}
          </CardTitle>
          <CardDescription>{subtitle}</CardDescription>
          {!!badges?.length && (
            <div className="flex flex-wrap gap-1.5">
              {badges.map((badge, index) => (
                <Badge key={index}>{badge}</Badge>
              ))}
            </div>
          )}
        </CardHeader>
        <CardContent className="space-y-3">
          {description.map((point, index) => (
            <p key={index} className="text-pretty">
              {point}
            </p>
          ))}
        </CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>

      <div
        // Middle element : Icon + (date on small screens)
        className="col-start-1 flex h-max flex-col items-center gap-y-1 bg-background py-4 sm:gap-y-2 md:col-start-2"
      >
        <Icon className="size-8 sm:size-12" />
        <span className="text-sm md:hidden">{date}</span>
      </div>
      <div
        // Date on big screens (opposite side of the card)
        className={cn(
          "text-xl mt-6 max-md:hidden",
          odd ? "col-start-3" : "col-start-1 justify-self-end"
        )}
      >
        {date}
      </div>
    </>
  );
};

const VerticalTimeline: React.FC<{ elements: TimelineElement[] }> = ({
  elements,
}) => {
  return (
    <div
      // 2 columns on small screens, 3 columns on medium screens
      className="relative grid grid-flow-dense grid-cols-[auto,1fr] gap-x-2 gap-y-6 py-4 sm:gap-x-6 sm:py-8 md:grid-cols-[1fr,auto,1fr] lg:gap-x-8"
    >
      <div
        // Vertical line
        className="absolute inset-y-0 -z-10 col-span-1 col-start-1 w-px justify-self-center bg-muted-foreground md:col-start-2"
      />

      {elements.map((elmt, index) => (
        <VerticalTimelineElement key={index} {...elmt} odd={index % 2 === 0} />
      ))}
    </div>
  );
};

export default VerticalTimeline;

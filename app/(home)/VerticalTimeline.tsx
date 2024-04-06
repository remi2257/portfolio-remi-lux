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
  footer?: React.ReactNode;

  Icon: IconType;
  date: string;
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
        className={cn("col-start-2", odd ? "sm:col-start-1" : "sm:col-start-3")}
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
      <div className="col-start-1 flex h-max flex-col items-center gap-y-1 bg-background py-4 sm:col-start-2 sm:gap-y-2">
        <Icon className="size-8 sm:size-12" />
        <span className="text-sm sm:hidden">{date}</span>
      </div>
      <div
        className={cn(
          "text-xl mt-6 hidden sm:block",
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
    <div className="relative grid grid-flow-dense grid-cols-[auto,1fr] gap-x-2 gap-y-6 py-4 sm:grid-cols-[1fr,auto,1fr] sm:gap-x-8 sm:py-8">
      <div
        // Vertical line
        className="absolute inset-y-0 -z-10 col-span-1 col-start-1 w-px justify-self-center bg-muted-foreground sm:col-start-2"
      />

      {elements.map((elmt, index) => (
        <VerticalTimelineElement key={index} {...elmt} odd={index % 2 === 0} />
      ))}
    </div>
  );
};

export default VerticalTimeline;

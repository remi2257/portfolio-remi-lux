import { Link as LinkPdf } from "@react-pdf/renderer";

import { useResumeContext } from "../ResumeContext";

export const Link: React.FC<React.PropsWithChildren<{ src: string }>> = ({
  src,
  children,
}) => {
  const { colorPalette } = useResumeContext();

  return (
    <LinkPdf style={{ color: colorPalette.headerBg }} src={src}>
      {children}
    </LinkPdf>
  );
};

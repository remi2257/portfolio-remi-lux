import { isMobile } from "@/utils/server";

import ResumeDisplay from "./ResumeDisplay";

export default function Page() {
  const showPdf = !isMobile();

  return (
    <main className="container">
      <ResumeDisplay showPdf={showPdf} />
    </main>
  );
}

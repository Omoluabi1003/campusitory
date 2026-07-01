import { notFound } from "next/navigation";
import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function ResearchPage() {
  const module = getPlatformModule("research");

  if (!module) {
    notFound();
  }

  return <ModulePage module={module} />;
}

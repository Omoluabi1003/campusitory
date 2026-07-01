import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function OpportunitiesPage() {
  const module = getPlatformModule("opportunities");

  if (!module) return null;

  return <ModulePage module={module} />;
}

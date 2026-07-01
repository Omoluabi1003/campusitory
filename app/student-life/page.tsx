import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function ModuleRoutePage() {
  const platformModule = getPlatformModule("student-life");

  if (!platformModule) return null;

  return <ModulePage module={platformModule} />;
}

import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function ModuleRoutePage() {
  const platformModule = getPlatformModule("trust-access");

  if (!platformModule) return null;

  return <ModulePage module={platformModule} />;
}

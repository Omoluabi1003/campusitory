import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function LanguagePage() {
  const module = getPlatformModule("language");

  if (!module) return null;

  return <ModulePage module={module} />;
}

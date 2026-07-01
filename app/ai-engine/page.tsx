import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function AiEnginePage() {
  const module = getPlatformModule("ai-engine");

  if (!module) return null;

  return <ModulePage module={module} />;
}

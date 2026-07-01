import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function DirectoryPage() {
  const module = getPlatformModule("directory");

  if (!module) return null;

  return <ModulePage module={module} />;
}

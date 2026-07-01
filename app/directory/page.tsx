import { notFound } from "next/navigation";
import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function DirectoryPage() {
  const module = getPlatformModule("directory");

  if (!module) {
    notFound();
  }

  return <ModulePage module={module} />;
}

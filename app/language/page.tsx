import { notFound } from "next/navigation";
import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function LanguagePage() {
  const module = getPlatformModule("language");

  if (!module) {
    notFound();
  }

  return <ModulePage module={module} />;
}

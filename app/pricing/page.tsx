import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function PricingPage() {
  const module = getPlatformModule("pricing");

  if (!module) return null;

  return <ModulePage module={module} />;
}

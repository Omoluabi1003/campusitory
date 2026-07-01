import { notFound } from "next/navigation";
import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function PricingPage() {
  const module = getPlatformModule("pricing");

  if (!module) {
    notFound();
  }

  return <ModulePage module={module} />;
}

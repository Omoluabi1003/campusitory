import { notFound } from "next/navigation";
import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function CampusRoomPage() {
  const module = getPlatformModule("campus-room");

  if (!module) {
    notFound();
  }

  return <ModulePage module={module} />;
}

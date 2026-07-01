import { ModulePage } from "@/components/ui/ModulePage";
import { getPlatformModule } from "@/data/platform";

export default function CampusRoomPage() {
  const module = getPlatformModule("campus-room");

  if (!module) return null;

  return <ModulePage module={module} />;
}

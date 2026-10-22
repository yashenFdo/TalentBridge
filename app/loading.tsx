import { LoadingScreen } from "@/components/ui/LoadingScreen";

export default function Loading() {
  return (
    <LoadingScreen
      message="Loading Talent Bridge..."
      subMessage="Accessing executive talent network & verified career platforms"
      fullScreen={true}
    />
  );
}

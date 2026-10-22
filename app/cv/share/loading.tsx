import { LoadingScreen } from "@/components/ui/LoadingScreen";

export default function CvShareLoading() {
  return (
    <LoadingScreen
      message="Loading Verified Executive Dossier..."
      subMessage="Decryption & authenticating talent credentials..."
      fullScreen={true}
    />
  );
}

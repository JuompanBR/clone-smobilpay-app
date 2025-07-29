import { Slot } from "expo-router";
import Providers from "./_providers";
import SystemUISettings from "./_systemUI";

export default function RootLayout() {


  return (
    <Providers>
      <SystemUISettings>
        <Slot />
      </SystemUISettings>
    </Providers>
  );
}
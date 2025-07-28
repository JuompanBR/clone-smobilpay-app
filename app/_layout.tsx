import { Slot } from "expo-router";
import Providers from "./_providers";

export default function RootLayout() {
  return (
    <Providers>
      <Slot />
    </Providers>
  );
}
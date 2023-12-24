import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Toaster } from "sonner";
import { api } from "@/utils/api";
import { HydrationOverlay } from "@builder.io/react-hydration-overlay";

import "@/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Toaster position="bottom-center" />
      </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
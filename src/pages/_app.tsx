import CookieConsent from "@/components/CookieConsent";
import Preloader from "@/components/Preloader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [showPreLoader, setShowPreLoader] = useState(true);
  const router = useRouter();
 
  useEffect(() => {
    const handleStart = () => {
      setShowPreLoader(true);
      setTimeout(() => setShowPreLoader(false), 100);
    };
    router.events.on("routeChangeStart", handleStart);
    return () => {
      router.events.off("routeChangeStart", handleStart);
    };
  }, [router]);
  return  <>
  {showPreLoader ? <Preloader onFinish={() => setShowPreLoader(false)} /> : <Component {...pageProps} />}
  <CookieConsent />
</>
  ;
}

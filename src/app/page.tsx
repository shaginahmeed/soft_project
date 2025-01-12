'use client'

import HomeBanner1 from "@/components/HomeBanner1/HomeBanner1";
import HomeBanner2 from "@/components/HomeBanner2/HomeBanner2";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HomeBanner1/>
      <HomeBanner2/>
        
    </div>
  );
}

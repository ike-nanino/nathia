import MobileNav from "@/components/MobileNav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative mx-auto min-h-screen p-4 bg-gradient-to-r from-amber-200 to-yellow-500">
      <div className="absolute left-0 bottom-0 z-0">
        <Image
          src="/assets/images/butterfly.gif"
          alt="romantic animation"
          width={80}
          height={80}
          className="animate-diagonal"
          unoptimized // Required for GIFs in Next.js
        />
      </div>

      <Image
        src="/assets/images/hands.png"
        alt="hands"
        width={160}
        height={160}
        className="absolute top-10 left-0 animate-move"
      />
      <Image
        src="/assets/images/holding.png"
        alt="holding"
        width={160}
        height={160}
        className="absolute bottom-10 right-0 animate-move"
      />

      <div className="flex items-center justify-end md:hidden mb-4 pl-3">
        <MobileNav />
      </div>

      <h1 className="text-center lg:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  px-4">
      Every moment with you feels like a love song. I built this little corner of the internet just to remind you how much you mean to me.
      </h1>
    </div>
  );
}

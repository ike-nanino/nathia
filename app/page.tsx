import MobileNav from "@/components/MobileNav";
import Image from "next/image";



export default function Home() {
  return (
    <div className="relative mx-auto min-h-screen p-4 bg-gradient-to-r from-amber-200 to-yellow-500">
     
     <Image
        src="/assets/images/hands.png"
        alt="hands"
        width={160}
        height={160}
        className='absolute top-10 left-0 animate-move'
      />
      <Image
        src="/assets/images/holding.png"
        alt="holding"
        width={160}
        height={160}
        className='absolute bottom-10 right-0 animate-move'
      />

      <div className="flex items-center justify-end md:hidden mb-4 pl-3">
        <MobileNav />
      </div>
    </div>
  );
}

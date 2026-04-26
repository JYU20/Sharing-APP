/**This is the landing page for this application */

import Link from "next/link";
import Image from "next/image";

export default function Home(){
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-grey-50 px-6 py-10 md:w-2/5 md:px-20">
        <p className="text-xl text-gray-800 md:text-3xl md:leading-normal">
          <strong>風磨の可愛さは世界一😊</strong>
          <br />
          風磨の写真を一緒に共有しよう!
        </p>
        
        <Link href="/register" className="flex items-center gap-5 self-start rounded-lg bg-blue-800 px-6 py-3 text-sm font-medium text-white hover:bg-blue-600">
          <span>共有する</span>
        </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w3/5 md:px-28 md:py-12">
           <Image
            src="/Kawai.JPEG"
            width={1000}
            height={620}
            className="hidden md:block"
            alt="風磨の写真"
          />
          <Image
            src="/Kawai.JPEG"
            width={560}
            height={760}
            className="block md:hidden"
            alt=""
          />
          </div>
      </div>
    </main>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="text-center mt-10 flex justify-between w-[200px] mx-auto">
        <Link href="/alex">alex</Link>
        <Link href="/mira">mira</Link>
      </div>
    </main>
  );
}

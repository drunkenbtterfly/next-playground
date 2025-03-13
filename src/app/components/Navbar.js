import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white p-4">
      <ul className="flex gap-6 justify-center">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/portfolio">Portofolio</Link></li>
        <li><Link href="/contact">Kontak</Link></li>
      </ul>
    </nav>
  );
}

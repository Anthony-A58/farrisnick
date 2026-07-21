import Link from "next/link";
import { SITE } from "@/lib/site";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 lg:hidden">
      <a
        href={SITE.phoneHref}
        className="bg-gold-500 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-navy-950"
      >
        Call Now, Open 24/7
      </a>
      <Link
        href="/contact/"
        className="bg-navy-800 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white"
      >
        Free Case Review
      </Link>
    </div>
  );
}

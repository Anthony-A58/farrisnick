import Image from "next/image";
import { CALBAR } from "@/lib/site";

export default function AuthorByline({
  dark = true,
  date,
}: {
  dark?: boolean;
  date?: string;
}) {
  void dark; // single dark theme now; prop kept so call sites stay stable
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/charles-avatar.webp"
        alt="Attorney Charles P. Farris"
        width={44}
        height={44}
        className="h-11 w-11 rounded-full border-2 border-yellow-500 object-cover"
      />
      <div className="text-sm leading-tight">
        <p className="font-semibold text-white">By Charles P. Farris</p>
        <p className="text-zinc-500">
          Criminal Defense Attorney ·{" "}
          <a
            href={CALBAR.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-yellow-500 underline-offset-2 hover:text-yellow-500"
          >
            CA State Bar #{CALBAR.number}
          </a>
          {date && (
            <>
              {" · "}
              {new Date(date + "T12:00:00").toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </>
          )}
        </p>
      </div>
    </div>
  );
}

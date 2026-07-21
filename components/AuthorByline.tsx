import Image from "next/image";
import { CALBAR } from "@/lib/site";

export default function AuthorByline({
  dark = false,
  date,
}: {
  dark?: boolean;
  date?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/charles-avatar.webp"
        alt="Attorney Charles P. Farris"
        width={44}
        height={44}
        className="h-11 w-11 rounded-full border-2 border-gold-500 object-cover"
      />
      <div className="text-sm leading-tight">
        <p className={dark ? "font-semibold text-white" : "font-semibold text-navy-900"}>
          By Charles P. Farris
        </p>
        <p className={dark ? "text-grey-200/70" : "text-grey-500"}>
          Criminal Defense Attorney ·{" "}
          <a
            href={CALBAR.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={
              dark
                ? "underline decoration-gold-500 underline-offset-2 hover:text-gold-400"
                : "underline decoration-gold-500 underline-offset-2 hover:text-navy-900"
            }
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

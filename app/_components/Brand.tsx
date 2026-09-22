import Link from "next/link";

export default function Brand({ href = "/", className = "" }: { href?: string; className?: string }) {
  return (
    <Link className={`atlas-brand ${className}`.trim()} href={href} aria-label="Finals Atlas home">
      <img className="brand-mark" src="/icon.svg" alt="" aria-hidden="true" />
      <span className="brand-name"><span>FINALS</span><span>ATLAS</span></span>
    </Link>
  );
}

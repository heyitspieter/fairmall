import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/">
      <a>
        <Image src="/logo.svg" width={44} height={44} alt="Fairmall" />
      </a>
    </Link>
  );
}

export default Logo;

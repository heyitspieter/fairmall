import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ children, ...props }) => {
  const router = useRouter();

  let className = null;

  let href = props.href;

  if (router.asPath === href && props.activeClassName) {
    className = props.className
      ? `${props.className} ${props.activeClassName}`
      : props.activeClassName;
  }

  delete props.activeClassName;

  return (
    <Link href={href}>
      <a {...props} className={className}>
        {children}
      </a>
    </Link>
  );
};

export default ActiveLink;

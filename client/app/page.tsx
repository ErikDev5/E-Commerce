import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href='/seller/signup'>Sign up</Link>
      <Link href='/seller/login'>Sign in</Link>
    </div>
  );
}

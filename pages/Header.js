import Link from "next/link";

export default function Header({ title }) {
  return (
    <nav>
      <Link href="/">
        <div>Homepage</div>
      </Link>
      <Link href="/items/shirt">
        <div>Shirt</div>
      </Link>
      <Link href="/items/poloshirt">
        <div>Poloshirts</div>
      </Link>
      <Link href="/items/shirt">
        <div>About</div>
      </Link>
    </nav>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">ホーム</Link>
          </li>
          <li>
            <Link href="/nutrition">栄養</Link>
          </li>
          <li>
            <Link href="/mental">精神</Link>
          </li>
          <li>
            <Link href="/ai">AI体験談</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

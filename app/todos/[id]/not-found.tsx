import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <p>we coundnt find the TODO you are loking for</p>
      <Link href="/todos">
        <button>Return Home</button>
      </Link>
    </div>
  );
}

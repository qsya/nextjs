import Link from 'next/link'

export default function about() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        this is about page，
        <Link className="text-blue-500" href="/">
          back
        </Link>
      </p>
    </main>
  )
}

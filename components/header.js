import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8">
      <Link href="/">
        <a className="hover:underline">{"<"}back</a>
      </Link>
    </h2>
  )
}

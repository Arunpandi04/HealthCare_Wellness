import Link from 'next/link'

export function Navbar(){
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/"><a className="font-bold">Wellness Portal</a></Link>
        <div className="flex gap-3 items-center">
          <Link href="/public/health-info"><a className="text-sm">Health Info</a></Link>
          <Link href="/login"><a className="text-sm">Login</a></Link>
        </div>
      </div>
    </nav>
  )
}

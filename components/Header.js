import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-gray-900 text-white">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <div>
                    <Link legacyBehavior href="/">

                        <img
                            className="h-8 rounded-xl cursor-pointer"
                            src="/clock.jpeg"
                            alt="Tidrapport App logo"
                        />

                    </Link>
                </div>
                <div>
                    <Link legacyBehavior href="/tid">
                        <a className="text-white hover:text-gray-300">Tidrapporter</a>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

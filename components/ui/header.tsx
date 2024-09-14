import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className=" w-full z-30 fixed top-0 shadow-lg" >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Home">
              <div className='flex-col items-center mt-8'>
                <img src='/images/logo.png' className='w-12' alt="Logo" />
                <h2 className='text-md font-semibold'>Knight</h2>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop navigation links */}
            <ul className="flex grow justify-end flex-wrap items-center space-x-4">
              <li>
                <Link
                  href="#features"
                  className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Features
                </Link>
              </li>
            
              <li>
                <Link
                  href="#Service"
                  className="font-medium text-white hover:text-gray-200  px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="font-medium text-white hover:text-gray-200  px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

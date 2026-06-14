import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const hover_style = `cursor-pointer text-lg text-gray-300 font-thin px-7 py-1 hover:text-lg hover:mx-3 hover:bg-gray-100/10 border border-gray-600/0 hover:border-gray-100/10 hover:px-3 rounded-3xl transition  transition-all hover:scale-130 duration-300 ease-in-out  hover:shadow-lg `

const Navbar = () => {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const linkClass = (path) =>
    `${hover_style} ${pathname === path ? '!bg-gray-50/10 !px-3 !mx-2 !text-white !scale-110' : ''}`

  const links = [
    { to: '/', label: 'Home' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Experience' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <div className="navBar fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden lg:flex justify-center items-center p-2 transition transition-transform ease-in-out duration-300 hover:scale-110">
        <div className="linksContainer bg-gray-100/10 backdrop-blur-lg rounded-4xl shadow-xl border border-gray-100/10 p-4 px-10 relative flex flex-row gap-1">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className={linkClass(to)}>{label}</Link>
          ))}
        </div>
      </div>

      <div className="navBar fixed top-4 right-4 z-50 lg:hidden flex items-center justify-center">
        <button
          onClick={() => setOpen(!open)}
          className="w-12 h-12 flex items-center justify-center bg-gray-100/10 backdrop-blur-lg rounded-full shadow-xl border border-gray-100/10 text-white text-2xl hover:bg-gray-100/20 transition-colors focus-visible:outline-2 focus-visible:outline-yellow-400/60"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setOpen(false)}>
          <div className="absolute top-20 right-4 bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100/10 p-4 flex flex-col gap-1 min-w-[200px]"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`cursor-pointer text-lg text-gray-300 font-thin px-5 py-2 rounded-2xl transition-all duration-300 ease-in-out ${
                  pathname === to
                    ? 'bg-gray-50/10 text-white'
                    : 'hover:bg-gray-100/10'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar

'use client'

import { AnimatePresence, motion } from 'framer-motion'
import NextLink from 'next/link'
import { useState } from 'react'
import { LanguageToggleButton } from './language-toggle-button'
import Logo from './logo'

// メニュー項目の定義
const menuItems = [
  { href: '/life', label: 'Life' },
  { href: '/about-me', label: 'About Me' },
  { href: '/projects', label: 'Projects' },
  { href: '/development', label: 'Development' },
  { href: '/article', label: 'Article' }
]

const HamburgerIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
)

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href

  return (
    <NextLink
      href={href}
      scroll={false}
      className={`p-2 rounded transition-colors ${
        active ? 'bg-blue-200 text-gray-800' : 'text-gray-800 hover:bg-gray-100'
      }`}
      target={target}
      {...props}
    >
      {children}
    </NextLink>
  )
}

const menuVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
      staggerChildren: 0.07,
      delayChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: { duration: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
}

const Navbar = props => {
  const { path } = props
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/25 glass z-[2]" {...props}>
      <div className="max-w-5xl mx-auto flex items-center justify-between py-2 pl-1.5 pr-2 md:pr-3">
        <div className="flex items-center mr-5">
          <h1 className="text-lg font-bold tracking-tighter">
            <Logo />
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row items-center flex-grow mt-0">
          {menuItems.map(item => (
            <LinkItem key={item.href} href={item.href} path={path}>
              {item.label}
            </LinkItem>
          ))}
        </div>

        <div className="flex-1 flex justify-end items-center">
          <LanguageToggleButton />

          {/* Mobile Menu Button */}
          <div className="ml-2 inline-block md:hidden relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 border border-gray-300 rounded hover:bg-gray-100"
              aria-label="Options"
            >
              <HamburgerIcon />
            </button>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  key="mobile-menu"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={menuVariants}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100"
                >
                  {menuItems.map(item => (
                    <motion.div key={item.href} variants={itemVariants}>
                      <NextLink
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </NextLink>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

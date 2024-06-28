
// app/componentsHeader.tsx
'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
    href: string;
    text: string;
  };
  
const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
  
    const activeClasses = "bg-gray-200 text-black";
    const inactiveClasses = "hover:bg-gray-100 hover:text-gray-800";
  
    return (
        <Link href={href} passHref>
            <button className={`px-4 py-2 rounded transition-colors ${isActive ? activeClasses : inactiveClasses}`}>
                {text}
            </button>
        </Link>
    );
};

  
const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 bg-white dark:bg-gray-400 bg-opacity-90 backdrop-blur-sm text-black shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-5">

                    {/* Logo and left-side links */}
                    <div className="flex items-center space-x-8">
                        <Link href="/">
                            <button className="text-2xl font-bold text-blue-900 hover:text-blue-500 transition-colors">IELTS Listening Training</button>
                        </Link>
                        <button className="text-3xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            &#9776;
                        </button>
                        <nav className={`md:flex md:space-x-4 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
                            <NavLink href="/pick-from-a-list" text="Pick From A List" />
                            <NavLink href="/multiple-choice" text="Multiple Choice" />
                            <NavLink href="/sentence-completion" text="Sentence Completion" />
                            <NavLink href="/matching" text="Matching Information" />
                            <NavLink href="/sort-answer" text="Short Answer" />
                        </nav>
                    </div>
            
                    {/* Right-side links */}
                    
                </div>
            </div>
        </header>
    );
};
export default Header;
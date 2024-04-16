"use client"

import React from 'react'

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { navLinks } from '@/constants';
import { Button } from '../ui/button';
import { GiKnockedOutStars } from "react-icons/gi";

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <aside className="sidebar">
            <div className="flex size-full flex-col gap-4">
                <Link href="/" className="flex items-center">
                <GiKnockedOutStars className='text-5xl'/>
                <p className='font-extrabold ml-2 text-2xl'>IMAGE <span className='text-purple-500'>AI</span></p>
                </Link>

                <nav className="sidebar-nav">
                    <SignedIn>
                        <ul className="sidebar-nav_elements">
                            {navLinks.slice(0, 6).map((link) => {
                                const isActive = link.route === pathname

                                return (
                                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? ' bg-[#000] text-white' : 'text-gray-700'
                                        }`}>
                                        <Link className="sidebar-link" href={link.route}>
                                            <Image
                                                src={link.icon}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                                className={`${isActive && 'brightness-200'}`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        <ul className="sidebar-nav_elements">
                            {navLinks.slice(6).map((link) => {
                                const isActive = link.route === pathname

                                return (
                                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-[#000] text-white' : 'text-gray-700'
                                        }`}>
                                        <Link className="sidebar-link" href={link.route}>
                                            <Image
                                                src={link.icon}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                                className={`${isActive && 'brightness-200'}`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}

                            <li className="flex-center cursor-pointer gap-2 p-4">
                                <UserButton afterSignOutUrl='/' showName />
                            </li>
                        </ul>
                    </SignedIn>

                    <SignedOut>
                        <Button asChild className="button bg-purple-gradient bg-cover">
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </SignedOut>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar;

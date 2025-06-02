'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const navItems = [
  { href: "/", label: "Home" },
  { href: "/companions", label: "Companions" },
  { href: "/my-journey", label: "My Journey" },
];

const NavItems = () => {

  const pathName = usePathname();

  return (
    <nav className='flex items-center gap-4'>
      {navItems.map(({href, label}) => (
        <Link 
          key={label} 
          href={href} 
          className={cn(pathName === href && 'text-primary font-semibold')}>
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default NavItems
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div >
            <ul className='Navbar'>
            <li> <Link href="/"> Home </Link> </li>
            <li><Link href="/About"> About </Link></li>
            <li><Link href="/Contact"> Contact </Link></li>
            <li><Link href="/Products"> Products </Link></li>
            <li><Link href={"/Users"}> Users </Link></li>
            <li><Link href="/posts"> Posts </Link></li>
            <li><Link href="/api/users"> zod </Link></li>
        </ul>
    </div>
  )
}

export default Navbar
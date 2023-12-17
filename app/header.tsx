'use client';

import Link from "next/link"
import { useState } from "react";

export default function Header() {
  const [menuIsActive, setMenuIsActive] = useState(true);

  return(
    <header className="p-4 lg:px-16 lg:py-8 pb-0 sticky top-0 z-50 ">
      <div className="p-4 lg:p-8 flex justify-between items-center bg-black/50 backdrop-blur rounded-lg border border-white/20 relative">
        <Link href="/">
          <img
            className="h-[45px] lg:h-[65px]"
            src="/ad-store.svg"
            alt="Logo AD Store"
          />
        </Link>
        <nav>
          <ul className="flex gap-8 xl:gap-16 text-lg hidden lg:flex">
            <li>
              <Link href="/products">
                Tous les produits
              </Link>
            </li>
            <li>T-shirts</li>
            <li>Accessoires</li>
            <li>
              <Link href="/about">
                À propos
              </Link>
            </li>
          </ul>
          <div className="p-2 md:p-4 flex lg:hidden rounded-lg border border-white/20">
          <img
            onClick={() => {setMenuIsActive(!menuIsActive)}}
            className="h-[32px]"
            src="/menu.svg"
            alt="Menu"
            />
        </div>
        </nav>
        <div className="p-4 hidden lg:flex rounded-lg border border-white/20">
          <img
            className="h-[32px]"
            src="/cart.svg"
            alt="Panier"
            />
        </div>
      </div>
      { menuIsActive && (
          <div className="absolute -bottom-0 translate-y-full right-0 z-50 lg:hidden">
            <ul className="flex flex-col p-4 gap-4 mt-4 mr-4 text-lg bg-black/30 backdrop-blur rounded-lg border border-white/20">
              <li>
                <Link href="/products">
                  Tous les produits
                </Link>
              </li>
              <li>T-shirts</li>
              <li>Accessoires</li>
              <li>
                <Link href="/about">
                  À propos
                </Link>
              </li>
            </ul>
          </div>
        )}
    </header>

  )
}
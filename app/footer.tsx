import Link from "next/link"

export default function Footer() {
  return(
    <footer className="p-4 lg:px-16 py-8">
      <div className="p-4 sm:p-8 lg:p-16 flex flex-col gap-8 items-start md:flex-row justify-between bg-black/20 backdrop-blur rounded-lg border border-white/20">
        <img
          className="h-[45px] lg:h-[65px]"
          src="/ad-store-black.svg"
          alt="Logo AD Store"
        />
        <nav>
          <ul className="flex flex-col gap-4">
            <li className="font-bold text-lg">Menu</li>
            <li>
              <Link href="/products">
                Tous les produits
              </Link>
            </li>
            <li>
              <Link href="/album">
                JVLIVS
              </Link>
            </li>
            <li>
              <Link href="/about">
                À propos
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flex flex-col gap-4">
            <li className="font-bold text-lg">Légal</li>
            <li>
              <Link href="/legal-notices">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/terms">
                Conditions générales de ventes
              </Link>
            </li>
            <li>
              <Link href="/conditions-of-use">
                Conditions d&apos;utilisation
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col gap-4 max-w-[650px]">
          <p className="font-bold text-lg">À propos</p>
          <p>AD Store vous propose une gamme exclusive de vêtements, accessoires et objets de collection qui vous permettront d&apos;afficher votre amour pour AD Verse avec style. Notre engagement envers la qualité et l&apos;authenticité transparaît dans chaque produit que nous offrons. Plongez dans l&apos;aventure AD Verse avec AD Store - où la passion rencontre la qualité, et où chaque achat est une expérience mémorable.</p>
        </div>
      </div>
    </footer>
  )
}
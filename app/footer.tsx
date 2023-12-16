export default function Footer() {
  return(
    <footer className="px-16 py-8">
      <div className="p-16 flex justify-between bg-black/20 backdrop-blur rounded-lg border border-white/20">
        <img
          className="h-[65px]"
          src="./ad-store-black.svg"
          alt="Logo AD Store"
        />
        <nav>
          <ul className="flex flex-col gap-4 text-lg">
            <li className="font-bold">Menu</li>
            <li>Tous les produits</li>
            <li>T-shirts</li>
            <li>Accessoires</li>
          </ul>
        </nav>
        <nav>
          <ul className="flex flex-col gap-4 text-lg">
            <li className="font-bold">Légal</li>
            <li>Mentions légales</li>
            <li>Conditions générales de ventes</li>
            <li>Conditions d&apos;utilisation</li>
          </ul>
        </nav>
        <div className="flex flex-col gap-4 max-w-[650px]">
          <p className="font-bold">À propos</p>
          <p>AD Store vous propose une gamme exclusive de vêtements, accessoires et objets de collection qui vous permettront d&apos;afficher votre amour pour AD Verse avec style. Notre engagement envers la qualité et l&apos;authenticité transparaît dans chaque produit que nous offrons. Plongez dans l&apos;aventure AD Verse avec AD Store - où la passion rencontre la qualité, et où chaque achat est une expérience mémorable.</p>
        </div>
      </div>
    </footer>
  )
}
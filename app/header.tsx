export default function Header() {
  return(
    <header className="px-16 py-8 pb-0 sticky top-0 z-50 ">
      <div className="p-8 flex justify-between items-center bg-black/50 backdrop-blur rounded-lg border border-white/20">
        <img
          className="h-[65px]"
          src="./ad-store.svg"
          alt="Logo AD Store"
        />
        <nav>
          <ul className="flex gap-16 text-lg">
            <li>Tous les produits</li>
            <li>T-shirts</li>
            <li>Accessoires</li>
          </ul>
        </nav>
        <div className="p-4 rounded-lg border border-white/20">
          <img
            className="h-[32px]"
            src="./cart.svg"
            alt="Panier"
            />
        </div>
      </div>
    </header>
  )
}
export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
            <div className='w-22'><img src="/ostren-icon-black.svg" alt="" /></div>
            </div>
            <p className="mt-3 text-sm text-neutral-600 max-w-xs">Hydration made simple. Clean ingredients, bold flavour, premium feel.</p>
          </div>

          <div>
            <h4 className="font-medium text-neutral-900">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a className="hover:text-neutral-900" href="#">Flavours</a></li>
              <li><a className="hover:text-neutral-900" href="#">Bottles</a></li>
              <li><a className="hover:text-neutral-900" href="#">Bundles</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-neutral-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a className="hover:text-neutral-900" href="#">About</a></li>
              <li><a className="hover:text-neutral-900" href="#">Sustainability</a></li>
              <li><a className="hover:text-neutral-900" href="#">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-neutral-900">Newsletter</h4>
            <p className="mt-3 text-sm text-neutral-600">Get early access to drops and exclusive offers.</p>
            <form className="mt-4 flex flex-wrap gap-2">
              <input type="email" placeholder="you@example.com" className="h-10 flex-1 rounded-full border mb-1 border-neutral-300 px-4 focus:outline-none focus:ring-2 focus:ring-neutral-900" />
              <button className="h-10 rounded-full bg-neutral-900 px-5 text-white">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Ostren. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-700">Privacy</a>
            <a href="#" className="hover:text-neutral-700">Terms</a>
            <a href="#" className="hover:text-neutral-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

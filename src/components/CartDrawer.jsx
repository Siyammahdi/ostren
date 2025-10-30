import { FiX, FiTrash2 } from 'react-icons/fi'
import { createPortal } from 'react-dom'

export default function CartDrawer({ open, onClose }) {
  if (typeof document === 'undefined') return null

  return createPortal(
    <div className={`fixed inset-0 z-1000 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-lg transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Panel - from right */}
      <aside
        className={`absolute right-0 top-0 h-full w-[92%] sm:w-[420px] max-w-[92%] bg-white shadow-2xl transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-neutral-200 px-4 sm:px-5 py-4">
            <h3 className="text-base font-semibold text-neutral-900">Your Cart</h3>
            <button onClick={onClose} className="h-9 w-9 grid place-content-center rounded-md hover:bg-neutral-100">
              <FiX className="h-5 w-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-auto px-4 sm:px-5 py-4 space-y-4">
            {[1,2].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-neutral-100">
                  <img src="/single-product.png" alt="Product" className="h-full w-full object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium text-neutral-900">Sample Product {i}</div>
                  <div className="text-xs text-neutral-500">€9,90</div>
                </div>
                <button className="h-8 w-8 grid place-content-center rounded-md hover:bg-neutral-100">
                  <FiTrash2 className="h-4 w-4 text-neutral-500" />
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-neutral-200 p-4 sm:p-5 bg-white">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">Subtotal</span>
              <span className="font-semibold">€19,80</span>
            </div>
            <button className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-4 py-3 text-sm font-semibold text-white hover:bg-neutral-800">Checkout</button>
            <button className="border-2 border-neutral-800 mt-2 inline-flex w-full items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-semibold text-black hover:text-white hover:bg-neutral-800">View Full Cart</button>
          </div>
        </div>
      </aside>
    </div>,
    document.body
  )
}

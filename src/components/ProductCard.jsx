import { FiStar, FiShoppingBag } from 'react-icons/fi'

export default function ProductCard({
  title,
  price,
  oldPrice,
  tag,
  image,
  rating = 0,
  discount,
}) {
  return (
    <div className="group rounded-2xl bg-white overflow-hidden h-full flex flex-col">
      <div className="relative">
        <div className="w-full overflow-hidden rounded-2xl aspect-[3/4] sm:aspect-[3/4]">
          {image ? (
            <img src="/product.png" alt={title} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-neutral-100" />
          )}
        </div>

        {/* Discount */}
        {discount && (
          <div className="absolute left-2 sm:left-3 top-2 sm:top-3 rounded-full bg-rose-500/90 px-2 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-white">
            -{discount}%
          </div>
        )}

        {/* Rating */}
        {rating > 0 && (
          <div className="absolute right-2 sm:right-3 top-2 sm:top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-medium text-neutral-900 shadow-sm">
            <span>{rating.toFixed(1)}/5</span>
            <FiStar className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-amber-400" />
          </div>
        )}

        {/* Hover Add to Cart (sits above the tag) */}
        <div className="pointer-events-none absolute z-20 inset-x-2 sm:inset-x-3 bottom-2 sm:bottom-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <button className="pointer-events-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-neutral-900 cursor-pointer hover:bg-neutral-200">
            <FiShoppingBag className="h-4 w-4" />
            Add to cart
          </button>
        </div>

        {/* Persistent tag under the button */}
        {tag && (
          <div className="absolute z-10 left-4 sm:left-5 bottom-2 inline-flex items-center py-0.5 text-[10px] sm:text-[11px] font-semibold tracking-wide text-neutral-800">
            {tag}
          </div>
        )}
      </div>

      <div className="px-2 sm:px-3 pt-3 sm:pt-4 flex-1">
        {/* Title */}
        <h3 className="mt-1 text-sm sm:text-base font-medium text-neutral-900 line-clamp-2">{title}</h3>

        {/* Price */}
        <div className=" flex items-center gap-2">
          <span className="text-[14px] sm:text-[15px] font-semibold text-rose-600">{price}</span>
          {oldPrice && (
            <span className="text-xs sm:text-sm text-neutral-500 line-through">{oldPrice}</span>
          )}
        </div>
      </div>
    </div>
  )
}

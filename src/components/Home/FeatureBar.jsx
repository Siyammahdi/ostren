const items = [
  { label: 'Free Shipping from 30€' },
  { label: 'No Sugar' },
  { label: 'Free Goodies from 40€' },
  { label: 'With Natural Ingredients' },
  { label: 'Zero Sugar' },
  { label: 'With Extra Vitamins ' },
  { label: 'Zero Artificial Flavors' },
]

export default function FeatureBar() {
  return (
    <div className='px-8 max-w-[1600px] mx-auto mt-4'>
      <div className=" max-w-[1600px] mx-auto rounded-lg bg-emerald-300 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 py-3 text-sm text-neutral-800">
          {items.map((it, idx) => (
            <div key={idx} className="inline-flex items-center gap-2 font-bold">
              <span className="text-emerald-600">✓</span>
              <span>{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

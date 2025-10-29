export default function SubscribeBanner() {
  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-neutral-50 sm:grid-cols-2">
          <div className="p-6 sm:p-10 lg:p-14">
            <h3 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
              Save up to 20% when you subscribe
            </h3>
            <p className="mt-3 text-neutral-600 max-w-md">
              Subscribe to your favourite flavours and enjoy free shipping from 15€.
              Make it personal: swap, add or remove flavours at any time.
            </p>
            <button className="mt-6 inline-flex h-10 items-center rounded-full bg-neutral-900 px-5 text-sm font-semibold text-white hover:bg-neutral-800">
              SUBSCRIBE NOW
            </button>
          </div>
          <div className="relative h-56 sm:h-full">
            <img
              src="/subscribe.png"
              alt="Subscription Basket"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

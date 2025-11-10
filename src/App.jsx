import { useState } from 'react'
import { Menu, X, Sparkles, Rocket, Shield, Zap, Check, Quote, ArrowRight } from 'lucide-react'

function App() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Fitur', href: '#features' },
    { label: 'Harga', href: '#pricing' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Kontak', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/40 to-white text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-white/40 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 grid place-items-center text-white">
                <Sparkles size={18} />
              </div>
              <span className="font-semibold tracking-tight">Flames Landing</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-gray-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                Mulai Sekarang <ArrowRight size={16} />
              </a>
            </nav>

            <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden pb-6">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 hover:bg-gray-100">
                    {item.label}
                  </a>
                ))}
                <a href="#cta" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 bg-gray-900 text-white text-center">
                  Mulai Sekarang
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32" id="home">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-48 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-400/20 blur-3xl" />
          <div className="absolute -bottom-48 left-10 h-[400px] w-[400px] rounded-full bg-pink-400/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Sparkles size={14} /> Powered by AI
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Bangun website cantik dalam hitungan menit
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Dapatkan landing page modern dengan performa tinggi, desain responsif, dan pengalaman pengguna yang mulus. Cocok untuk produk, startup, dan kampanye pemasaran.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-indigo-700 transition-colors">
                Mulai Gratis <ArrowRight size={18} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                Lihat Fitur
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Check className="text-green-600" size={18} />Tanpa kartu kredit</div>
              <div className="flex items-center gap-2"><Check className="text-green-600" size={18} />SEO Friendly</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-gray-200 bg-white/70 p-2 shadow-xl backdrop-blur">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                <div className="h-full w-full grid place-items-center text-white">
                  <Rocket size={72} className="drop-shadow-xl" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white shadow-lg border border-gray-200 px-4 py-3">
              <div className="flex items-center gap-2 text-sm"><Shield className="text-indigo-600" size={18} /> Teroptimasi keamanan</div>
            </div>
            <div className="absolute -top-6 -right-6 rounded-xl bg-white shadow-lg border border-gray-200 px-4 py-3">
              <div className="flex items-center gap-2 text-sm"><Zap className="text-pink-600" size={18} /> Performa kilat</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Fitur yang kamu butuhkan</h2>
            <p className="mt-3 text-gray-600">Semua komponen utama untuk meluncurkan landing page profesional.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Rocket className="text-indigo-600" size={24} />, title: 'Cepat Diluncurkan',
                desc: 'Template modern dengan praktik terbaik sehingga kamu langsung siap tayang.'
              },
              {
                icon: <Shield className="text-indigo-600" size={24} />, title: 'Keamanan & SEO',
                desc: 'Struktur yang ramah SEO dan dilengkapi praktik keamanan dasar.'
              },
              {
                icon: <Zap className="text-indigo-600" size={24} />, title: 'Performa Tinggi',
                desc: 'Optimasi gambar, bundle ringan, dan responsif di semua perangkat.'
              },
            ].map((f, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 grid place-items-center rounded-lg bg-indigo-50">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold">{f.title}</h3>
                </div>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-white to-indigo-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Harga sederhana, tanpa ribet</h2>
            <p className="mt-3 text-gray-600">Pilih paket sesuai kebutuhanmu. Bisa upgrade kapan saja.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              name: 'Starter', price: 'Gratis', features: ['1 Halaman', 'Komponen dasar', 'Dukungan komunitas'], highlight: false
            }, {
              name: 'Pro', price: '$9/bulan', features: ['Semua Starter', 'Analytics dasar', 'Form kontak', 'Tanpa watermark'], highlight: true
            }, {
              name: 'Business', price: '$29/bulan', features: ['Semua Pro', 'Integrasi kustom', 'Support prioritas', 'Kinerja maksimal'], highlight: false
            }].map((tier, i) => (
              <div key={i} className={`relative rounded-2xl border ${tier.highlight ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'} bg-white p-6 shadow-sm`}>
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">Paling Populer</span>
                )}
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-2 text-3xl font-extrabold">{tier.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {tier.features.map((ft, idx) => (
                    <li key={idx} className="flex items-center gap-2"><Check className="text-green-600" size={18} />{ft}</li>
                  ))}
                </ul>
                <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-medium transition-colors ${tier.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'border border-gray-300 text-gray-800 hover:bg-gray-50'}`}>
                  Pilih Paket
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Apa kata mereka</h2>
            <p className="mt-3 text-gray-600">Pendapat pengguna yang sudah mencoba.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              name: 'Rani — Founder', quote: 'Dalam satu sore landing page kami sudah live. Desainnya modern dan cepat.'
            }, {
              name: 'Bima — Marketer', quote: 'Konversi meningkat 30% setelah pakai template ini. Sangat rekomendasi!'
            }, {
              name: 'Sinta — Indie Maker', quote: 'Setup gampang, dokumentasi jelas, tampilannya cakep.'
            }].map((t, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <Quote className="text-indigo-500" size={28} />
                <p className="mt-3 text-gray-700">“{t.quote}”</p>
                <p className="mt-4 text-sm font-medium text-gray-900">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-600 to-purple-600 p-1 shadow-xl">
            <div className="rounded-3xl bg-white p-10">
              <h3 className="text-2xl sm:text-3xl font-bold">Siap meluncurkan landing page impianmu?</h3>
              <p className="mt-3 text-gray-600">Mulai gratis, upgrade kapan saja. Cocok untuk MVP, event, atau produk baru.</p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="/test" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-indigo-700 transition-colors">
                  Coba Koneksi Backend <ArrowRight size={18} />
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-200 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 grid place-items-center text-white">
                  <Sparkles size={18} />
                </div>
                <span className="font-semibold tracking-tight">Flames Landing</span>
              </div>
              <p className="mt-3 text-sm text-gray-600 max-w-sm">Landing page modern untuk memamerkan produk dan idemu. Ringan, cepat, dan siap produksi.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Tautan</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {navItems.map(n => (
                  <li key={n.href}><a className="hover:text-gray-900" href={n.href}>{n.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Kontak</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Email: hello@example.com</li>
                <li>Twitter: @flames</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Flames. Semua hak dilindungi.</p>
            <div className="flex items-center gap-6">
              <a className="hover:text-gray-700" href="#">Kebijakan Privasi</a>
              <a className="hover:text-gray-700" href="#">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

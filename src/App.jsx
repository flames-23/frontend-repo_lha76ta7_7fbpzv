import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles, Rocket, Shield, Zap, Check, Quote, ArrowRight } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

const floatKeyframes = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  }
}

function App() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Fitur', href: '#features' },
    { label: 'Harga', href: '#pricing' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Kontak', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/50 to-white text-gray-900">
      {/* Animated background decorations */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-400/25 blur-3xl"
          animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-10 h-[420px] w-[420px] rounded-full bg-fuchsia-400/20 blur-3xl"
          animate={{ y: [0, -15, 0], scale: [1, 0.98, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl"
          animate={{ x: [0, 10, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-white/40 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <motion.div
                className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 grid place-items-center text-white"
                whileHover={{ rotate: 8, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 350, damping: 16 }}
              >
                <Sparkles size={18} />
              </motion.div>
              <span className="font-semibold tracking-tight">Flames Landing</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ y: -2, color: '#111827' }}
                  className="transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 260, damping: 16 }}
              >
                Mulai Sekarang <ArrowRight size={16} />
              </motion.a>
            </nav>

            <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden pb-6"
              >
                <div className="grid gap-2">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i }}
                      className="rounded-md px-3 py-2 hover:bg-gray-100"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <motion.a
                    href="#cta"
                    onClick={() => setOpen(false)}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-md px-3 py-2 bg-gray-900 text-white text-center"
                  >
                    Mulai Sekarang
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32" id="home">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <motion.p variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <Sparkles size={14} /> Powered by AI
            </motion.p>
            <motion.h1 variants={fadeInUp} className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Bangun website cantik dalam hitungan menit
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-gray-600 leading-relaxed">
              Dapatkan landing page modern dengan performa tinggi, desain responsif, dan pengalaman pengguna yang mulus. Cocok untuk produk, startup, dan kampanye pemasaran.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-6 flex flex-col sm:flex-row gap-3">
              <motion.a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow-sm"
                whileHover={{ y: -2, boxShadow: '0 10px 24px rgba(79,70,229,0.35)' }}
                whileTap={{ scale: 0.98 }}
              >
                Mulai Gratis <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#features"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-gray-700 font-medium"
                whileHover={{ y: -2, backgroundColor: 'rgba(0,0,0,0.03)' }}
                whileTap={{ scale: 0.98 }}
              >
                Lihat Fitur
              </motion.a>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Check className="text-green-600" size={18} />Tanpa kartu kredit</div>
              <div className="flex items-center gap-2"><Check className="text-green-600" size={18} />SEO Friendly</div>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div
              className="relative rounded-2xl border border-gray-200 bg-white/70 p-2 shadow-xl backdrop-blur"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% 200%' }}
              >
                <motion.div className="h-full w-full grid place-items-center text-white" {...floatKeyframes}>
                  <Rocket size={72} className="drop-shadow-xl" />
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div {...floatKeyframes} className="absolute -bottom-6 -left-6 rounded-xl bg-white shadow-lg border border-gray-200 px-4 py-3">
              <div className="flex items-center gap-2 text-sm"><Shield className="text-indigo-600" size={18} /> Teroptimasi keamanan</div>
            </motion.div>
            <motion.div {...floatKeyframes} className="absolute -top-6 -right-6 rounded-xl bg-white shadow-lg border border-gray-200 px-4 py-3" transition={{ duration: 3, repeat: Infinity }}>
              <div className="flex items-center gap-2 text-sm"><Zap className="text-pink-600" size={18} /> Performa kilat</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Fitur yang kamu butuhkan</h2>
            <p className="mt-3 text-gray-600">Semua komponen utama untuk meluncurkan landing page profesional.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
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
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(2,6,23,0.08)' }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 grid place-items-center rounded-lg bg-indigo-50">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold">{f.title}</h3>
                </div>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-white to-indigo-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Harga sederhana, tanpa ribet</h2>
            <p className="mt-3 text-gray-600">Pilih paket sesuai kebutuhanmu. Bisa upgrade kapan saja.</p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter', price: 'Gratis', features: ['1 Halaman', 'Komponen dasar', 'Dukungan komunitas'], highlight: false
              },
              {
                name: 'Pro', price: '$9/bulan', features: ['Semua Starter', 'Analytics dasar', 'Form kontak', 'Tanpa watermark'], highlight: true
              },
              {
                name: 'Business', price: '$29/bulan', features: ['Semua Pro', 'Integrasi kustom', 'Support prioritas', 'Kinerja maksimal'], highlight: false
              }
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
                whileHover={{ y: -6, rotate: tier.highlight ? 0.1 : 0, boxShadow: '0 16px 40px rgba(2,6,23,0.10)' }}
                className={`relative rounded-2xl border ${tier.highlight ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'} bg-white p-6 shadow-sm`}
              >
                {tier.highlight && (
                  <motion.span layoutId="popular-pill" className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
                    Paling Populer
                  </motion.span>
                )}
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-2 text-3xl font-extrabold">{tier.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {tier.features.map((ft, idx) => (
                    <li key={idx} className="flex items-center gap-2"><Check className="text-green-600" size={18} />{ft}</li>
                  ))}
                </ul>
                <motion.a
                  href="#cta"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-medium ${tier.highlight ? 'bg-indigo-600 text-white' : 'border border-gray-300 text-gray-800'}`}
                >
                  Pilih Paket
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Apa kata mereka</h2>
            <p className="mt-3 text-gray-600">Pendapat pengguna yang sudah mencoba.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                name: 'Rani — Founder', quote: 'Dalam satu sore landing page kami sudah live. Desainnya modern dan cepat.'
              },
              {
                name: 'Bima — Marketer', quote: 'Konversi meningkat 30% setelah pakai template ini. Sangat rekomendasi!'
              },
              {
                name: 'Sinta — Indie Maker', quote: 'Setup gampang, dokumentasi jelas, tampilannya cakep.'
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(2,6,23,0.08)' }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <Quote className="text-indigo-500" size={28} />
                <p className="mt-3 text-gray-700">“{t.quote}”</p>
                <p className="mt-4 text-sm font-medium text-gray-900">{t.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-600 to-purple-600 p-1 shadow-xl"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl bg-white p-10">
              <motion.h3 className="text-2xl sm:text-3xl font-bold" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                Siap meluncurkan landing page impianmu?
              </motion.h3>
              <motion.p className="mt-3 text-gray-600" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                Mulai gratis, upgrade kapan saja. Cocok untuk MVP, event, atau produk baru.
              </motion.p>
              <motion.div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3" initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
                <motion.a
                  href="/test"
                  className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow-sm"
                  whileHover={{ y: -2, boxShadow: '0 10px 24px rgba(79,70,229,0.35)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Coba Koneksi Backend <ArrowRight size={18} />
                </motion.a>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-gray-700 font-medium"
                  whileHover={{ y: -2, backgroundColor: 'rgba(0,0,0,0.03)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Hubungi Kami
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
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

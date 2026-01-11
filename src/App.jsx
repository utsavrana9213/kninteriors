import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const imageFiles = useMemo(() => [
    '/images/photo1.jpeg',
    '/images/photo2.jpeg',
    '/images/photo3.jpeg',
    '/images/photo4.jpeg',
    '/images/photo5.jpeg',
    '/images/photo6.jpeg',
    '/images/photo7.jpeg',
    '/images/photo8.jpeg',
    '/images/photo9.jpeg',
    '/images/photo10.jpeg',
    '/images/photo11.jpeg',
    '/images/photo12.jpeg',
    '/images/photo13.jpeg',
    '/images/photo14.jpeg',
    '/images/photo15.jpeg',
    '/images/photo16.jpeg',
    '/images/photo17.jpeg',
    '/images/photo18.jpeg',
    '/images/photo19.jpeg',
    '/images/photo20.jpeg',
    '/images/photo21.jpeg',
    '/images/photo23.jpeg'
  ], [])

  const getCaption = (file) => {
    if (file.includes('photo1')) return '3D Korean Temple design – Kavi Nagar, Kaladham Park'
    if (file.includes('photo2')) return 'Living room 3D wall design – Kavi Nagar, Ghaziabad, Kaladham Park'
    if (file.includes('photo3')) return '3D Korean Temple – Kavi Nagar, Ghaziabad, DI Block'
    if (file.includes('photo4')) return 'Kids room interior – Nehru Nagar, Ghaziabad'
    if (file.includes('photo5')) return 'Corridor wooden floor paneling – Diya Green City, Raj Nagar Extension'
    if (file.includes('photo6')) return 'Living room partition, TV panel, false ceiling & wall moulding'
    return 'Premium residential and commercial interior projects – KN Interiors'
  }

  const galleryItems = useMemo(() => imageFiles.map(src => ({ src, caption: getCaption(src) })), [imageFiles])
  const [showAllGallery, setShowAllGallery] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in-view')
      })
    }, { threshold: 0.15 })
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">KN Interiors</div>
          <nav className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="https://wa.me/919211315530?text=Hi%20KN%20Interiors%2C%20I%27d%20like%20to%20book%20a%20consultation." className="btn whatsapp" target="_blank" rel="noreferrer">WhatsApp</a>
          </nav>
        </div>
      </header>

      <TopBanner
        image1="/images/office_photo.jpeg"
        image2="/images/office_photo2.jpeg"
      />

      <section className="section" id="about">
        <div className="container about fade-in">
          <div>
            <h2 className="section-title">About Us</h2>
            <p className="muted">We craft refined interiors that blend function and emotion. With years of experience across residential and commercial spaces, our studio delivers timeless aesthetics, premium materials, and thoughtful details tailored to each client.</p>
            <div className="chips">
              <div className="chip"><span className="gold">●</span> Years of experience</div>
              <div className="chip"><span className="gold">●</span> Client-focused approach</div>
              <div className="chip"><span className="gold">●</span> Design philosophy</div>
            </div>
          </div>
          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1600&auto=format&fit=crop" alt="About KN Interiors" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section beige-bg" id="services">
        <div className="container fade-in">
          <h2 className="section-title">Services</h2>
          <div className="services-grid">
            {[
              { t: 'Residential Interior Design', d: 'Personalized spaces with premium finishes.' },
              { t: 'Modular Kitchen Design', d: 'Ergonomic layouts with durable materials.' },
              { t: 'Bedroom & Living Room Design', d: 'Comfort-forward, cohesive ambiance.' },
              { t: 'Office & Commercial Interiors', d: 'Functional, brand-aligned environments.' },
              { t: '3D Design & Visualization', d: 'Realistic renders to finalize decisions.' },
              { t: 'Turnkey Interior Solutions', d: 'End-to-end execution and delivery.' }
            ].map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-title">{s.t}</div>
                <div className="service-desc">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container fade-in">
          <h2 className="section-title">Image Gallery</h2>
          <GalleryGrid items={showAllGallery ? galleryItems : galleryItems.slice(0, 9)} />
          {!showAllGallery && galleryItems.length > 9 && (
            <div className="section-actions" style={{ marginTop: 16 }}>
              <button className="btn btn-outline" onClick={() => setShowAllGallery(true)}>See All</button>
            </div>
          )}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container fade-in">
          <h2 className="section-title">Portfolio</h2>
          <div className="portfolio-grid">
            {galleryItems.map((p, idx) => (
              <div key={idx} className="project-card">
                <SmartImage src={p.src} alt={p.caption} />
                <div className="project-overlay">
                  <div>{p.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section beige-bg" id="videos">
        <div className="container fade-in">
          <h2 className="section-title">Project Walkthroughs</h2>
          <VideoGrid
            videos={[
              '/videos/video1.mp4',
              '/videos/video2.mp4',
              '/videos/video3.mp4',
              '/videos/video4.mp4',
              '/videos/video5.mp4',
              '/videos/video6.mp4',
              '/videos/video7.mp4',
              '/videos/video8.mp4',
              '/videos/video9.mp4',
              '/videos/video10.mp4'
            ]}
          />
        </div>
      </section>

      <section className="section beige-bg" id="why">
        <div className="container fade-in">
          <h2 className="section-title">Why Choose KN Interiors</h2>
          <div className="features-grid">
            {[
              'Premium quality materials',
              'On-time delivery',
              'Transparent pricing',
              'Personalized designs',
              'Experienced designers'
            ].map((f, i) => (
              <div key={i} className="feature">{f}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container fade-in">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="testimonials-grid">
            {[
              { n: 'A. Mehta', r: 5, t: 'Transformed our home into a serene, elegant space.' },
              { n: 'R. Sharma', r: 5, t: 'Thoughtful design and flawless execution.' },
              { n: 'K. Patel', r: 4, t: 'Professional, responsive, and premium finishes.' },
              { n: 'D. Singh', r: 5, t: 'Our office now reflects our brand perfectly.' },
              { n: 'S. Gupta', r: 4, t: 'Great design clarity with helpful 3D visuals.' },
              { n: 'N. Rao', r: 5, t: 'On time, transparent, and beautiful results.' }
            ].map((x, i) => (
              <div key={i} className="testimonial">
                <div className="stars">{'★'.repeat(x.r)}</div>
                <div className="muted">{x.t}</div>
                <div style={{ marginTop: 8, fontWeight: 600 }}>{x.n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta" id="cta">
        <div className="container cta-inner fade-in">
          <h2 className="section-title" style={{ color: '#fff' }}>Let’s Design Your Dream Space</h2>
          <a href="#contact" className="btn btn-primary">Book a Consultation</a>
        </div>
      </section>

      <ContactSection />

      <footer className="footer">
        <div className="container footer-inner">
          <div>KN Interiors</div>
          <div className="footer-links">
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="socials">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TopBanner({ image1, image2 }) {
  return (
    <section className="section top-banner" id="home">
      <div className="container">
        <div className="banner-grid">
          <div className="banner-img">
            <SmartImage src={image1} alt="Office interior banner 1" loading="eager" />
          </div>
          <div className="banner-img">
            <SmartImage src={image2} alt="Office interior banner 2" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  )
}

function GalleryGrid({ items }) {
  return (
    <div className="gallery">
      {items.map((it, i) => (
        <figure className="gallery-card" key={i}>
          <SmartImage src={it.src} alt={it.caption} />
          <figcaption className="gallery-caption">{it.caption}</figcaption>
        </figure>
      ))}
    </div>
  )
}

function SmartImage({ src, alt, loading = 'lazy' }) {
  const [current, setCurrent] = useState(src)
  const onError = () => {
    if (current.endsWith('.jpg')) setCurrent(current.replace('.jpg', '.jpeg'))
    else if (current.endsWith('.jpeg')) setCurrent(current.replace('.jpeg', '.jpg'))
  }
  return <img src={current} alt={alt} loading={loading} onError={onError} />
}

function VideoGrid({ videos }) {
  return (
    <div className="video-grid">
      {videos.map((src, i) => (
        <div className="video-card" key={i}>
          <video src={src} controls playsInline preload="metadata" />
        </div>
      ))}
    </div>
  )
}

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('')
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus('Please fill all fields.')
      return
    }
    setStatus('Thank you. We will contact you shortly.')
  }
  return (
    <section className="section" id="contact">
      <div className="container contact fade-in">
        <div className="contact-card">
          <h2 className="section-title">Contact</h2>
          <form className="form" onSubmit={onSubmit}>
            <input className="input" name="name" placeholder="Name" value={form.name} onChange={onChange} />
            <input className="input" type="email" name="email" placeholder="Email" value={form.email} onChange={onChange} />
            <input className="input" name="phone" placeholder="Phone" value={form.phone} onChange={onChange} />
            <textarea className="textarea" name="message" placeholder="Message" value={form.message} onChange={onChange} />
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button className="btn btn-primary" type="submit">Send Message</button>
              <a className="btn whatsapp" target="_blank" rel="noreferrer" href="https://wa.me/919211315530?text=Hi%20KN%20Interiors%2C%20I%27d%20like%20to%20book%20a%20consultation.">WhatsApp</a>
            </div>
            {status && <div className="muted" style={{ marginTop: 10 }}>{status}</div>}
          </form>
        </div>
        <div className="contact-card">
          <h3 style={{ marginBottom: 8 }}>Reach Us</h3>
          <div className="muted">Address: Shop No, LGF 002, Jyoti Super Village, Anandibai Joshi Rd, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201003</div>
          <div className="muted">Phone: 092113 15530</div>
          <div className="muted">Email: contact@kninteriors.com</div>
        </div>
      </div>
    </section>
  )
}

export default App

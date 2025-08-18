import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
    
      <Head>
        <title>About Us | Dream Sky Tech</title>
        
      </Head>
      <Header />

      {/* Fixed Background */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-fixed mt-10 brightness-100 -z-20"
        style={{ backgroundImage: "url('/us.jpg') " }}
   

      />
  <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/90 via-white-900/80 to-cyan-900/90 -z-10" />

  {/* Floating Bubbles Animation */}
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
    {/* Small Bubbles */}
    <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
    <div className="absolute top-40 left-32 w-3 h-3 bg-yellow-400/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
    <div className="absolute top-60 right-20 w-5 h-5 bg-cyan-400/25 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}></div>
    <div className="absolute top-80 left-1/4 w-3 h-3 bg-white/15 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>
    <div className="absolute top-96 right-1/3 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
    
    {/* Medium Bubbles */}
    <div className="absolute top-32 right-40 w-6 h-6 bg-yellow-400/20 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '5s' }}></div>
    <div className="absolute top-72 left-20 w-7 h-7 bg-cyan-400/15 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
    <div className="absolute bottom-40 right-16 w-5 h-5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
    <div className="absolute bottom-60 left-1/3 w-6 h-6 bg-blue-400/25 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
    
    {/* Floating Movement Bubbles */}
    <div className="absolute top-24 right-1/4 w-4 h-4 bg-yellow-400/25 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s' }}></div>
    <div className="absolute top-56 left-1/2 w-5 h-5 bg-cyan-400/20 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute bottom-32 left-16 w-3 h-3 bg-white/30 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '2s' }}></div>
    <div className="absolute bottom-72 right-1/2 w-6 h-6 bg-blue-400/15 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    
    {/* More scattered bubbles */}
    <div className="absolute top-44 left-3/4 w-2 h-2 bg-yellow-400/40 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
    <div className="absolute top-88 right-1/5 w-3 h-3 bg-cyan-400/30 rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
    <div className="absolute bottom-20 left-1/5 w-4 h-4 bg-white/25 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
    <div className="absolute bottom-96 right-3/4 w-2 h-2 bg-blue-400/35 rounded-full animate-ping" style={{ animationDelay: '3.5s' }}></div>
  </div>

  <h1 className="text-7xl font-bold text-shadow-cyan-600 ">

  </h1>
{/* </div> */}

      <main className="relative z-10 py-20 px-6 md:px-16 max-w-6xl mx-auto mt-59 text-white min-h-screen space-y-12">
        <Section title="Who We Are" imgSrc="/whowe.svg">
          <p>
            <strong>Dream Sky Tech</strong> is more than just a tech company — we are a team of creators,
            thinkers, developers, and digital strategists who believe in building a better digital future.
            Our foundation is built on innovation, reliability, and a passion for solving real-world business problems through technology.
          Since our inception, we've been committed to delivering transformative digital solutions that not only look exceptional but also perform with precision.
            We blend deep technical expertise with creative insight to craft custom web applications, scalable platforms, and powerful brand experiences that connect with audiences and deliver measurable value.
           {/* What sets us apart is our culture — a combination of bold innovation, agile execution, and client-first thinking.
            We don't just write code or design interfaces; we build long-term digital partnerships.
            Whether it's a startup chasing its first MVP or an established brand aiming to scale, we immerse ourselves fully in the challenge and bring vision to life with clarity and confidence.
            At Dream Sky Tech, we believe that technology should be intuitive, design should inspire trust, and results should speak louder than promises.
            That's why we stay ahead of trends, continuously refine our process, and always deliver with integrity.
        
            We are not just building products — we're helping shape digital futures. And we're just getting started. */}
          </p>
        </Section>

        <Section title="Our Mission" imgSrc="/mission.jpg">
          <p>At DreamSkyTech, our mission is to deliver innovative, reliable, and scalable IT solutions that empower businesses to thrive in the digital era. We combine advanced technology, creative thinking, and a customer-first approach to design and develop solutions that not only meet but exceed expectations. Our goal is to simplify complexities, enhance efficiency, and create lasting value for our clients through cutting-edge software, seamless integrations, and strategic digital transformation. With a focus on quality, innovation, and long-term partnerships, we aim to be the trusted technology partner that helps businesses achieve sustainable growth and stay ahead in a rapidly evolving digital world.

</p>
        </Section>

        <Section title="What We Do" imgSrc="/what.jpg">
          <p>At DreamSkyTech, we specialize in delivering end-to-end IT solutions that help businesses innovate, grow, and succeed in the digital age. Our expertise spans custom software development, web and mobile app solutions, cloud services, UI/UX design, and IT consulting. We design and build scalable, secure, and high-performing solutions tailored to each client's unique needs, ensuring seamless integration and exceptional user experiences. Whether it's transforming ideas into powerful applications, modernizing existing systems, or providing ongoing technical support, we are committed to helping our clients achieve their goals with technology that works smarter, faster, and better.

</p>
        </Section>

        <Section title="Why Choose Us" imgSrc="/whyy.webp">
          <p>At DreamSkyTech, we believe choosing the right technology partner can make all the difference in your business success. We stand out because we combine technical expertise with a deep understanding of business needs, ensuring solutions that are both innovative and practical. Our team is driven by a passion for quality, a commitment to deadlines, and a customer-first approach that guarantees personalized attention to every project. With a proven track record of delivering scalable, secure, and future-ready solutions, we go beyond just building technology — we build trust, long-term relationships, and measurable results. When you choose DreamSkyTech, you choose reliability, innovation, and a partner dedicated to helping you reach new heights.</p>
        </Section>
      </main>

      <Footer />


    </>
  )
}

function Section({ title, children, imgSrc }) {
  return (
    <div className="flex flex-col md:flex-row items-start bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,215,0,0.3)] overflow-hidden gap-6">
      
      {/* Text Section */}
      <div className="flex-1">
        <h2 className="text-3xl font-extrabold text-yellow-400 mb-4 text-center md:text-left">
          {title}
          <span className="block mt-1 h-1 w-14 mx-auto md:mx-0 bg-yellow-400 rounded-full transition-all duration-500 group-hover:w-20" />
        </h2>
        <div className="text-white/90 text-lg leading-relaxed space-y-4">
          {children}
        </div>
      </div>

      {/* Image Box - Responsive & Consistent */}
      <div className="w-full md:w-[400px] flex-shrink-0 self-stretch">
        <div className="h-full bg-white rounded-lg overflow-hidden shadow-md">
          <Image
            src={imgSrc}
            alt={title}
            width={700}
            height={200}
            className="w-full h-full "
          />
        </div>
      </div>
    </div>
  )
}
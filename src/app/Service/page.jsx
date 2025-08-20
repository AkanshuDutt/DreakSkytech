import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
   

  return (
    <>
      <Head>
        <title>Services | Dream Sky Tech</title>
      </Head>
      <Header />

      {/* Fixed Background with Overlay */}
      <div
        className="fixed top-0 left-0 w-full h-full mt-10 bg-cover bg-center bg-fixed brightness-75 -z-20"
        style={{ backgroundImage: "url('/ser.jpg')" }}
      />
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/90 via-white-900/80 to-cyan-900/90 -z-10" />

      {/* Floating Animation Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-teal-500/15 rounded-full blur-3xl animate-pulse" />
      </div>
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
      {/* Hero Section */}
      <div className="relative z-10 pt-10 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white-950  to-white mb-1 animate-pulse mt-25">
            Our Services
          </h1>
          {/* <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transforming digital dreams into reality with cutting-edge technology solutions
          </p> */}
          <div className=""></div>
        </div>
      </div>

      <main className="relative z-2 px-6 md:px-16 max-w-7xl mx-auto text-white min-h-screen mt-1 space-y-16  pb-10">
        <Section title="Web Development" imgSrc="/web.avif" gradient="from-yellow-400 to-yellow-500" icon="🌐">
          <p>
            We create stunning, responsive websites that combine modern design with powerful functionality. Our web development services include custom website design, e-commerce platforms, content management systems, and progressive web applications. We use cutting-edge technologies like React, Next.js, and Node.js to build fast, secure, and scalable websites that provide exceptional user experiences across all devices. From simple landing pages to complex enterprise portals, we deliver web solutions that drive business growth and engage your audience effectively.
          </p>
          <a href="/Contact" className="mt-4 px-6 py-3 bg-gradient-to-r bg-yellow-500  rounded-2xl trounded-lg hover:scale-100 transition-transform duration-200">
            Let's Enquiry
          </a>
        </Section>

        <Section title="Mobile App Development" imgSrc="/app.avif" gradient="from-yellow-400 to-yellow-500" icon="📱">
          <p>
            Transform your ideas into powerful mobile applications that captivate users and drive engagement. We specialize in developing native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter. Our mobile app development process focuses on creating intuitive user interfaces, seamless performance, and robust functionality. Whether you need a business app, social platform, or e-commerce solution, we build mobile experiences that connect with your audience and deliver real value to your business.
          </p>
          <a href="/Contact" className="mt-4 px-6 py-3 bg-gradient-to-r bg-yellow-500  rounded-2xl trounded-lg hover:scale-100 transition-transform duration-200">
            Let's Enquiry
          </a>
        </Section>

        <Section title="UI/UX Design" imgSrc="/ui.png" gradient= "from-yellow-400 to-yellow-500"icon="🎨">
          <p>
            Great design is the foundation of exceptional digital experiences. Our UI/UX design services focus on creating visually stunning and highly functional interfaces that users love. We conduct thorough user research, create detailed wireframes and prototypes, and design interfaces that are both beautiful and intuitive. Our design process ensures optimal user journeys, increased engagement, and better conversion rates. From brand identity to complete digital experiences, we craft designs that tell your story and connect with your audience on an emotional level.
          </p>
          <a href="/Contact" className="mt-4 px-6 py-3 bg-gradient-to-r bg-yellow-500  rounded-2xl trounded-lg hover:scale-100 transition-transform duration-200">
            Let's Enquiry
          </a>
        </Section>

        <Section title="Cloud Solutions" imgSrc="/cloudy.jpg" gradient="from-yellow-400 to-yellow-500" icon="☁️">
          <p>
            Leverage the power of cloud computing to scale your business efficiently and securely. Our cloud solutions include cloud migration, infrastructure setup, serverless architecture, and ongoing cloud management. We work with leading cloud providers like AWS, Google Cloud, and Azure to deliver scalable, cost-effective solutions that grow with your business. From data storage and backup to advanced analytics and AI services, we help you harness the full potential of cloud technology to improve performance, reduce costs, and enhance security.
          </p>
          <a 
  href="/Contact" 
  className="mt-4 inline-block px-6 py-3 bg-yellow-500 rounded-2xl hover:scale-105 transition-transform duration-200 text-white font-semibold"
>
  Let's Enquiry
</a>

        </Section>
      </main>

      <Footer />
    </>
  )
}

function Section({ title, children, imgSrc, gradient, icon }) {
  return (
    <div className="group relative">
      {/* Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-3xl blur opacity-15 group-hover:opacity-35 transition duration-1000 group-hover:duration-200`}></div>
      
              <div className="relative flex flex-col md:flex-row items-start bg-gradient-to-br from-slate-800/80 via-gray-800/70 to-slate-900/90 backdrop-blur-2xl border border-gray-600/30 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] overflow-hidden gap-8">
        
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
          {icon}
        </div>
        
        {/* Text Section */}
        <div className="flex-1 z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {icon}
            </div>
            <div>
              <h2 className={`text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${gradient} group-hover:scale-105 transition-transform duration-300`}>
                {title}
              </h2>
              <div className={`mt-2 h-1.5 w-20 bg-gradient-to-r ${gradient} rounded-full transition-all duration-500 group-hover:w-32`}></div>
            </div>
          </div>
          <div className="text-gray-200 text-lg leading-relaxed space-y-4 group-hover:text-white transition-colors duration-300">
            {children}
          </div>
        </div>

        {/* Image Box */}
        <div className="w-full md:w-[450px] flex-shrink-0 self-stretch">
          <div className="h-full relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-500">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
            ></div>
            <Image
              src={imgSrc}
              alt={title}
              width={700}
              height={300}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>
    </div>
  )
}
"use client";

// File suggestion: app/terms/page.tsx (or page.jsx)
// Tailwind CSS required. Optional: add `prose` plugin for nicer typography.
// DISCLAIMER: This template is general information, not legal advice. 
// Have a qualified lawyer review and customize it for your jurisdiction and business.

import React from "react";

export default function Terms() {
//   const lastUpdated = "August 19, 2025";

  return (
    <>
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
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <section className="px-6 md:px-10 lg:px-24 pt-16 pb-10 border-b border-slate-800 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 to-slate-950">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Terms & Conditions</h1>
          <p className="text-slate-300 leading-relaxed mb- 10 max-w-3xl">
            These Terms and Conditions ("<span className="font-semibold">Terms</span>") govern your access to and use of DreamSkyTech’s websites, products, software, APIs, and services (collectively, the "<span className="font-semibold">Services</span>"). By accessing or using our Services, you agree to be bound by these Terms.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs md:text-sm text-slate-400">
            {/* <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" /> */}
        
          </div>

          {/* Quick Disclaimer Badge */}
          {/* <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-100">
            <p className="text-sm md:text-base">
              <strong>Important:</strong> This page is a template and does not constitute legal advice. Please consult your legal counsel to adapt it for your specific business, jurisdiction, and industry requirements.
            </p>
          </div> */}
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-5 lg:px-24 py-10">
        <div className="max-w-5xl mx-auto">
          {/* Table of Contents */}
          <nav className="mb-10 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
            <ol className="grid md:grid-cols-2 gap-y-2 text-slate-300 list-decimal list-inside">
              {[
                "Acceptance of Terms",
                "About DreamSkyTech",
                "Eligibility & Account Registration",
                "Use of Services",
                "Orders, Pricing & Payments",
                "Subscriptions, Trials & Renewal",
                "User Content & License",
                "Intellectual Property",
                "Acceptable Use Policy",
                "Third‑Party Services & Links",
                "Confidentiality",
                "Privacy & Data Protection",
                "Security & Responsible Disclosure",
                "Service Levels & Support",
                "Beta Features & Experimental Tools",
                "Open‑Source Components",
                "Compliance, Export & Anti‑Corruption",
                "Disclaimers",
                "Limitation of Liability",
                "Indemnification",
                "Force Majeure",
                "Changes to the Services or Terms",
                "Term, Suspension & Termination",
                "Governing Law & Dispute Resolution",
                "Notices & Contact",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#section-${i + 1}`}
                    className="hover:text-white underline underline-offset-4 decoration-slate-600 hover:decoration-slate-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="space-y-10 leading-relaxed">
            {/* 1 */}
            <section id="section-1" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h3>
              <p className="text-slate-300">
                By accessing or using the Services, you confirm that you have read, understood, and agree to be bound by these Terms and any policies referenced herein. If you do not agree, you must not use the Services. If you are using the Services on behalf of an entity, you represent that you have authority to bind that entity to these Terms.
              </p>
            </section>

            {/* 2 */}
            <section id="section-2" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">2. About DreamSkyTech</h3>
              <p className="text-slate-300">
                “<span className="font-semibold">DreamSkyTech</span>” refers to DreamSkyTech Private Limited (or its relevant affiliates), an information technology solutions provider offering web development, design, product engineering, and related digital services. For invoicing, contracting entity, and support details, see Section 25.
              </p>
            </section>

            {/* 3 */}
            <section id="section-3" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">3. Eligibility & Account Registration</h3>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>You must be at least the age of majority in your jurisdiction and capable of entering into a binding contract.</li>
                <li>When creating an account, you agree to provide accurate, current, and complete information and to keep it updated.</li>
                <li>You are responsible for maintaining the confidentiality of your credentials and for all activities under your account.</li>
                <li>We may refuse or suspend accounts at our discretion to prevent fraud, abuse, or legal risk.</li>
              </ul>
            </section>

            {/* 4 */}
            <section id="section-4" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">4. Use of Services</h3>
              <p className="text-slate-300 mb-2">Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable right to access and use the Services for your internal business or personal purposes.</p>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>Do not reverse engineer, decompile, or attempt to derive source code except to the extent permitted by law.</li>
                <li>Do not interfere with or disrupt the integrity, performance, or security of the Services.</li>
                <li>Do not access the Services to build a competing product or service.</li>
                <li>Comply with all applicable laws, regulations, and third‑party rights.</li>
              </ul>
            </section>

            {/* 5 */}
            <section id="section-5" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">5. Orders, Pricing & Payments</h3>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>Pricing, fees, and taxes for paid Services are as set out at purchase, in an order form, statement of work, or invoice.</li>
                <li>Unless otherwise stated, prices are exclusive of all taxes. You are responsible for applicable GST/VAT and other levies.</li>
                <li>We may use third‑party payment processors. Your payment information is handled according to their policies and our Privacy Policy.</li>
                <li>Amounts due are non‑cancellable and non‑refundable except as expressly stated in these Terms or required by law.</li>
              </ul>
            </section>

            {/* 6 */}
            <section id="section-6" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">6. Subscriptions, Trials & Renewal</h3>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>Subscription terms and entitlements are defined in your plan or order form.</li>
                <li>Trials may be offered at our discretion and can be modified or withdrawn at any time.</li>
                <li>Subscriptions renew automatically unless you cancel before the renewal date.</li>
                <li>Post‑trial charges begin automatically unless you cancel before the trial ends.</li>
              </ul>
            </section>

            {/* 7 */}
            <section id="section-7" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">7. User Content & License</h3>
              <p className="text-slate-300 mb-2">You retain ownership of content you submit, upload, or otherwise make available through the Services ("User Content"). You grant DreamSkyTech a worldwide, non‑exclusive, royalty‑free license to host, store, process, transmit, display, and perform User Content solely to provide, maintain, and improve the Services, and as otherwise permitted by our Privacy Policy.</p>
              <p className="text-slate-300">You represent that you have the rights necessary for us to use your User Content as described and that it does not violate law or third‑party rights.</p>
            </section>

            {/* 8 */}
            <section id="section-8" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">8. Intellectual Property</h3>
              <p className="text-slate-300">The Services, including software, designs, logos, trademarks, content, and underlying technology, are owned or licensed by DreamSkyTech and protected by intellectual property laws. No rights are granted except as expressly set forth in these Terms.</p>
            </section>

            {/* 9 */}
            <section id="section-9" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">9. Acceptable Use Policy</h3>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>No illegal, harmful, fraudulent, infringing, harassing, or deceptive activities.</li>
                <li>No distribution of malware, unauthorized scraping, or automated account creation.</li>
                <li>No content that is obscene, hateful, or violates privacy or publicity rights.</li>
                <li>Respect rate limits and fair use guidelines we may publish from time to time.</li>
              </ul>
            </section>

            {/* 10 */}
            <section id="section-10" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">10. Third‑Party Services & Links</h3>
              <p className="text-slate-300">The Services may enable access to third‑party websites, software, or services. We are not responsible for third‑party materials, and your use is governed by their terms and policies. Integrations are provided as‑is and may change or be discontinued.</p>
            </section>

            {/* 11 */}
            <section id="section-11" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">11. Confidentiality</h3>
              <p className="text-slate-300">Each party may receive confidential information of the other. The receiving party will use the same degree of care it uses to protect its own similar information (but no less than reasonable care) and will use such information only to perform obligations or exercise rights under these Terms.</p>
            </section>

            {/* 12 */}
            <section id="section-12" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">12. Privacy & Data Protection</h3>
              <p className="text-slate-300 mb-2">Our collection and use of personal data are described in our Privacy Policy. Where applicable, data processing terms may apply for business customers. You are responsible for obtaining necessary consents and providing legally compliant notices to end users.</p>
              <p className="text-slate-400 text-sm">Link placeholder: <span className="underline decoration-dotted">/privacy</span></p>
            </section>

            {/* 13 */}
            <section id="section-13" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">13. Security & Responsible Disclosure</h3>
              <p className="text-slate-300">We implement reasonable technical and organizational measures to protect the Services. No method of transmission or storage is 100% secure. If you discover a vulnerability, please report it responsibly to our security team. We may offer recognition for valid reports at our discretion.</p>
            </section>

            {/* 14 */}
            <section id="section-14" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">14. Service Levels & Support</h3>
              <p className="text-slate-300">Unless otherwise agreed in a separate service level agreement (SLA), the Services are provided on a commercially reasonable efforts basis. Support hours and channels may be described on our website or in your order form.</p>
            </section>

            {/* 15 */}
            <section id="section-15" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">15. Beta Features & Experimental Tools</h3>
              <p className="text-slate-300">We may make alpha/beta or experimental features available for testing. Such features are provided “as is,” may be subject to additional terms, and may be modified, suspended, or discontinued at any time without notice.</p>
            </section>

            {/* 16 */}
            <section id="section-16" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">16. Open‑Source Components</h3>
              <p className="text-slate-300">Some components may be offered under open‑source licenses. To the extent of any conflict, the open‑source license terms will govern for those components.</p>
            </section>

            {/* 17 */}
            <section id="section-17" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">17. Compliance, Export & Anti‑Corruption</h3>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>You agree to comply with applicable export control and sanctions laws.</li>
                <li>You will not use the Services for any prohibited end‑use or transfer to restricted parties.</li>
                <li>You will comply with anti‑corruption and anti‑bribery laws and maintain accurate records.</li>
              </ul>
            </section>

            {/* 18 */}
            <section id="section-18" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">18. Disclaimers</h3>
              <p className="text-slate-300">Except as expressly set out, the Services are provided on an “as is” and “as available” basis. We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non‑infringement. We do not warrant uninterrupted, error‑free, or secure operation.</p>
            </section>

            {/* 19 */}
            <section id="section-19" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">19. Limitation of Liability</h3>
              <p className="text-slate-300">To the maximum extent permitted by law, DreamSkyTech and its affiliates will not be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenues, data, or goodwill. Our total liability for any claim relating to the Services is limited to the amount you paid to us for the Services giving rise to the claim in the 12 months preceding the event.</p>
            </section>

            {/* 20 */}
            <section id="section-20" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">20. Indemnification</h3>
              <p className="text-slate-300">You agree to defend, indemnify, and hold harmless DreamSkyTech, its directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys’ fees) arising out of or related to your use of the Services, your User Content, or your violation of these Terms or applicable law.</p>
            </section>

            {/* 21 */}
            <section id="section-21" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">21. Force Majeure</h3>
              <p className="text-slate-300">Neither party will be liable for any delay or failure to perform due to events beyond reasonable control, including acts of God, natural disasters, war, terrorism, civil unrest, labor disputes, internet or telecommunication failures, or government actions.</p>
            </section>

            {/* 22 */}
            <section id="section-22" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">22. Changes to the Services or Terms</h3>
              <p className="text-slate-300">We may modify the Services or these Terms from time to time. Material changes will be notified by posting on our website or by other reasonable means. Changes are effective upon posting unless otherwise stated. Your continued use of the Services after changes take effect constitutes acceptance of the updated Terms.</p>
            </section>

            {/* 23 */}
            <section id="section-23" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">23. Term, Suspension & Termination</h3>
              <ul className="list-disc pl-6 text-slate-300 space-y-2">
                <li>These Terms remain in effect while you use the Services.</li>
                <li>We may suspend or terminate access for breach, legal risk, non‑payment, or to protect the Services or users.</li>
                <li>Upon termination, your right to use the Services ceases, but Sections intended to survive will continue (e.g., IP, confidentiality, disclaimers, liability limits).</li>
              </ul>
            </section>

            {/* 24 */}
            <section id="section-24" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">24. Governing Law & Dispute Resolution</h3>
              <p className="text-slate-300">These Terms are governed by the laws of India, without regard to conflict of laws principles. Subject to applicable law, the courts at New Delhi, India will have exclusive jurisdiction. If required, the parties may first attempt to resolve disputes through good‑faith negotiations or mediation before litigation.</p>
            </section>

            {/* 25 */}
            <section id="section-25" className="scroll-mt-24">
              <h3 className="text-2xl font-bold mb-2">25. Notices & Contact</h3>
              <div className="text-slate-300 space-y-2">
                <p>Contracting Entity: <span className="font-semibold">DreamSkyTech Private Limited</span></p>
                <p>Registered Office: <span className="text-slate-200">A-43, Noida Sector 63, Uttar Pradesh, 201301</span></p>
                {/* <p>CIN / Registration No.: <span className="text-slate-200">[Add company identifier]</span></p>
                <p>GSTIN (if applicable): <span className="text-slate-200">[Add GST number]</span></p> */}
                <p>Primary Email: <a href="mailto:support@dreamskytech.com" className="underline underline-offset-4">support@dreamskytech.com</a></p>
                <p>Notices: @info@dreamskytech.com </p>
                <p>Grievance Officer (IT Act, India): <span className="text-slate-200"> DreamSkyTech, @info@dreamskytech.com , 8750610304</span></p>
              </div>
            </section>
          </div>

          {/* Footer note */}
          {/* <div className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <p className="text-slate-400 text-sm">
              If any provision of these Terms is found unenforceable, the remaining provisions will remain in full force and effect. These Terms constitute the entire agreement between you and DreamSkyTech regarding the Services and supersede any prior or contemporaneous agreements on the subject matter.
            </p>
          </div> */}
 
          {/* Back to top */}
          <div className="mt-8 flex justify-end">
            <a href="#top" className="px-4 py-2 rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition">Back to top</a>
          </div>
        </div>
      </section>
    </main>

    </>
  );
}

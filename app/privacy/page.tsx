import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">Last updated: May 16, 2025</p>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
              <h2 className="mb-4 text-2xl font-bold">1. Introduction</h2>
              <p className="mb-6 text-muted-foreground">
                At CogniSim AI, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our website and services.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">2. Information We Collect</h2>
              <p className="mb-6 text-muted-foreground">
                We may collect personal information that you provide directly to us, such as your name, email address,
                and company information. We also collect usage data and information about your device and browser.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">3. How We Use Your Information</h2>
              <p className="mb-6 text-muted-foreground">
                We use your information to provide, maintain, and improve our services, to communicate with you, to
                analyze usage patterns, and to develop new products and services.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">4. Cognitive Intelligence and Your Data</h2>
              <p className="mb-6 text-muted-foreground">
                Our cognitive intelligence features analyze your team's workflow patterns to provide personalized
                recommendations. This analysis is performed securely and in compliance with applicable data protection
                laws.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">5. Data Sharing and Disclosure</h2>
              <p className="mb-6 text-muted-foreground">
                We do not sell your personal information. We may share your information with third-party service
                providers who help us operate our business, but only as necessary to provide our services to you.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">6. Data Security</h2>
              <p className="mb-6 text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, disclosure, alteration, and destruction.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">7. Your Rights</h2>
              <p className="mb-6 text-muted-foreground">
                Depending on your location, you may have certain rights regarding your personal information, such as the
                right to access, correct, or delete your data. Please contact us to exercise these rights.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">8. Changes to This Privacy Policy</h2>
              <p className="mb-6 text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">9. Contact Us</h2>
              <p className="mb-6 text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at privacy@cognisim.ai.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">Last updated: May 16, 2025</p>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
              <h2 className="mb-4 text-2xl font-bold">1. Introduction</h2>
              <p className="mb-6 text-muted-foreground">
                Welcome to CogniSim AI. These Terms of Service govern your use of our website and services. By accessing
                or using CogniSim AI, you agree to be bound by these Terms.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">2. Use of Services</h2>
              <p className="mb-6 text-muted-foreground">
                CogniSim AI provides project management tools with cognitive intelligence features. You may use our
                services only as permitted by these Terms and any applicable laws.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">3. User Accounts</h2>
              <p className="mb-6 text-muted-foreground">
                To access certain features, you may need to create an account. You are responsible for maintaining the
                confidentiality of your account information and for all activities that occur under your account.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">4. Privacy</h2>
              <p className="mb-6 text-muted-foreground">
                Our Privacy Policy explains how we collect, use, and protect your information. By using CogniSim AI, you
                agree to our collection and use of information as described in our Privacy Policy.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">5. Intellectual Property</h2>
              <p className="mb-6 text-muted-foreground">
                CogniSim AI and its content, features, and functionality are owned by us and are protected by
                international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">6. Termination</h2>
              <p className="mb-6 text-muted-foreground">
                We may terminate or suspend your account and access to our services at our sole discretion, without
                notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third
                parties.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">7. Limitation of Liability</h2>
              <p className="mb-6 text-muted-foreground">
                In no event shall CogniSim AI be liable for any indirect, incidental, special, consequential, or
                punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                intangible losses.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">8. Changes to Terms</h2>
              <p className="mb-6 text-muted-foreground">
                We may revise these Terms at any time by updating this page. By continuing to use CogniSim AI after
                those revisions become effective, you agree to be bound by the revised Terms.
              </p>

              <h2 className="mb-4 mt-12 text-2xl font-bold">9. Contact Us</h2>
              <p className="mb-6 text-muted-foreground">
                If you have any questions about these Terms, please contact us at legal@cognisim.ai.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground">
                BillGoods ("we", "us", "our", or "Company") operates the BillGoods website and mobile applications. 
                This page informs you of our policies regarding the collection, use, and disclosure of personal data when 
                you use our Service and the choices you have associated with that data.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Information Collection and Use</h2>
              <p className="text-muted-foreground">
                We collect several different types of information for various purposes to provide and improve our Service to you.
              </p>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-foreground">Types of Data Collected:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Account and profile information (name, email, company details)</li>
                  <li>Invoice and financial data you create within our platform</li>
                  <li>Payment information processed through secure payment providers</li>
                  <li>Usage data and analytics to improve our services</li>
                  <li>Communication data when you contact our support team</li>
                  <li>Device information and IP addresses</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Use of Data</h2>
              <p className="text-muted-foreground">InvoiceHub uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical and security issues</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Security of Data</h2>
              <p className="text-muted-foreground">
                The security of your data is important to us, but remember that no method of transmission over the Internet 
                or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect 
                your personal data, we cannot guarantee its absolute security. We implement industry-standard security measures 
                including encryption, secure servers, and regular security audits.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, correct, and delete your personal data. You may also have the right to restrict 
                processing and to object to certain processing of your data. To exercise any of these rights, please contact us 
                using the information provided below.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
                Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at privacy@billgoods.com
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

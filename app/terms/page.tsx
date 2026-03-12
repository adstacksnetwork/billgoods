'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function Terms() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using BillGoods ("Service"), you accept and agree to be bound by the terms and provision 
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Use License</h2>
              <p className="text-muted-foreground">
                Permission is granted to temporarily download one copy of the materials (information or software) on 
                BillGoods for personal, non-commercial transitory viewing only. This is the grant of a license, not 
                a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on InvoiceHub</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Uploading viruses or malicious code</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Disclaimer</h2>
              <p className="text-muted-foreground">
                The materials on BillGoods are provided on an 'as is' basis. BillGoods makes no warranties, expressed 
                or implied, and hereby disclaims and negates all other warranties including, without limitation, implied 
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of 
                intellectual property or other violation of rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Limitations</h2>
              <p className="text-muted-foreground">
                In no event shall BillGoods or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                to use the materials on BillGoods.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground">
                The materials appearing on BillGoods could include technical, typographical, or photographic errors. 
                BillGoods does not warrant that any of the materials on its website are accurate, complete, or current. 
                BillGoods may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Links</h2>
              <p className="text-muted-foreground">
                BillGoods has not reviewed all of the sites linked to its website and is not responsible for the contents 
                of any such linked site. The inclusion of any link does not imply endorsement by BillGoods of the site. 
                Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Modifications</h2>
              <p className="text-muted-foreground">
                BillGoods may revise these terms of service for its website at any time without notice. By using this 
                website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">8. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms and conditions are governed by and construed in accordance with the laws of United States, 
                and you irrevocably submit to the exclusive jurisdiction of the courts located in that location.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">9. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at legal@billgoods.com
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AI Face Swap Studio",
  description: "Terms and conditions for using the AI Face Swap Studio platform.",
  robots: "noindex, follow",
};

export default function TermsOfServicePage() {
  return (
    <div className="page-enter">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="glass-card rounded-3xl p-8 sm:p-12 prose prose-invert prose-blue max-w-none">
          <h1 className="text-3xl sm:text-5xl font-black mb-8">Terms of Service</h1>
          <p className="text-white/60 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              By accessing and using AI Face Swap Studio, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Acceptable Use Policy</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              You agree not to use the service to generate:
            </p>
            <ul className="list-disc pl-6 text-white/70 space-y-2 mb-4">
              <li>Non-consensual deepfakes or explicit content.</li>
              <li>Content that violates copyright or intellectual property rights.</li>
              <li>Content intended to harass, defame, or harm others.</li>
              <li>Misleading, deceitful, or malicious content (e.g., identity theft, fraud).</li>
            </ul>
            <p className="text-white/70 leading-relaxed mb-4">
              You are solely responsible for obtaining necessary permissions from any individuals depicted in the media you upload.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer of Warranties</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Our service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the reliability, accuracy, or availability of the service. We heavily rely on third-party APIs (such as Hugging Face) and cannot guarantee continuous uptime or processing speeds.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              In no event shall AI Face Swap Studio or its operators be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use or inability to use the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Modifications to Service</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We reserve the right to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

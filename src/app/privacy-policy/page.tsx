import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Face Swap Studio",
  description: "Read our privacy policy to understand how we handle your data, images, and videos when using our AI tools.",
  robots: "noindex, follow", // Usually good practice to noindex boilerplate legal pages
};

export default function PrivacyPolicyPage() {
  return (
    <div className="page-enter">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="glass-card rounded-3xl p-8 sm:p-12 prose prose-invert prose-purple max-w-none">
          <h1 className="text-3xl sm:text-5xl font-black mb-8">Privacy Policy</h1>
          <p className="text-white/60 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Welcome to AI Face Swap Studio ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please stop using our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              <strong>Images and Videos:</strong> When you use our AI tools (Video Face Swap, Virtual Try-On, AI Face Swap), you upload images and videos. These media files are processed solely for the purpose of generating the requested AI output.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">
              <strong>Usage Data:</strong> We may collect anonymous analytics data regarding how the website is accessed and used to improve our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We use the media you upload strictly to provide the service. We proxy your requests to third-party APIs (specifically, public Hugging Face Spaces).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Retention</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              We do not permanently store your uploaded images, videos, or the generated results on our servers. Processing happens in real-time, and results are returned directly to your browser session. Please be aware that processing utilizes third-party APIs (such as Hugging Face) and you are subject to their respective data retention policies during the computation window.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Our site interacts with third-party APIs (e.g., Hugging Face Gradio client). We do not control and are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Changes to This Policy</h2>
            <p className="text-white/70 leading-relaxed">
              We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

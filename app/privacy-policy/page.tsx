import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="relative text-center my-8 bg-black text-white mt-20" id='faqs'>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[10%] h-1 bg-pink-700 "></div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold p-3">
          Privacy Policy
        </h2>
      </div>
      <div className="max-w-4xl mx-auto p-8 ">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Opt-In and Opt-Out Privacy Policy</h2>
          <p className="text-lg">
            At Ahead of the Rest Freight, we value your privacy and take all necessary steps to safeguard your personal information. The following is an overview of how we handle your data upon opting in or out of our communications and services.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-pink-700">1. Consent to Opt-In</h3>
          <p className="text-lg">
            When using the services of Ahead of the Rest Freight, you may be provided the option to subscribe or opt-in for communications, updates, and other information related to our dispatching services. By opting in, you agree to the following:
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li className="mb-2">
              <strong>Data Collection:</strong> We may collect personal data such as your name, phone number, email address, and other relevant details that help us provide services to you.
            </li>
            <li className="mb-2">
              <strong>Use of Information:</strong> We will use your personal information solely to deliver dispatching services, operational updates, industry expertise, and promotional materials, if you’ve opted to receive them. This may include emails, SMS messages, or direct phone calls based on your preferences.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-pink-700">2. Opt-Out Choice</h3>
          <p className="text-lg">
            We respect your decision to stop receiving communications from us. You can opt-out from receiving updates or messages anytime.
          </p>
          <ul className="list-disc pl-6 mt-4">
            <li className="mb-2">
              <strong>Opt-out:</strong> You can unsubscribe by following the unsubscribe link in our emails, replying &#39;&#39;STOP&#39;&#39; to text messages, or contacting us directly at [insert contact details].
            </li>
            <li className="mb-2">
              <strong>Continued Service Communications:</strong> After opting out, you will only receive essential communications related to ongoing services or pending legal requirements.
            </li>
            <li className="mb-2">
              <strong>Re-subscription:</strong> If you wish to opt back in, you can re-subscribe via our website or contact us to restart receiving updates.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-pink-700">3. Data Security and Confidentiality</h3>
          <p className="text-lg">
            We prioritize the security of your personal information. All the data you provide is encrypted and securely stored in our systems. We do not sell, rent, or share your information with third parties without your consent unless required by law.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-pink-700">4. Changes to Our Privacy Policy</h3>
          <p className="text-lg">
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. If these changes impact your privacy, we will notify you and seek your consent where required by law.
          </p>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy

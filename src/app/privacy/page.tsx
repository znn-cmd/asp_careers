export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-black px-6 py-24 text-brand-smoke">
      <div className="max-w-2xl space-y-6 text-center">
        <h1 className="font-serif text-4xl">Privacy Notice</h1>
        <p className="text-base text-brand-gray">
          Alpha Star Properties treats every conversation with discretion. We
          collect only the information required to process applications,
          maintain regulatory compliance, and deliver market intelligence you
          request. Data is encrypted, never sold, and erased on request.
        </p>
        <p className="text-sm text-brand-gray/80">
          For formal documentation, email{" "}
          <a
            className="text-brand-gold underline-offset-4 hover:underline"
            href="mailto:privacy@alphastar.properties"
          >
            privacy@alphastar.properties
          </a>
          .
        </p>
      </div>
    </main>
  );
}



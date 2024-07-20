import Layout from '@theme/Layout';

export default function Opportunities(): JSX.Element {
  return (
    <Layout
      title="Opportunities"
      description="Description will go into a meta tag in <head />"
    >
      <header className="max-w-screen-2xl mx-auto">
        <h1>Current Opportunities</h1>
      </header>
      <main className="max-w-screen-2xl mx-auto">
        <p>Introduction</p>
        <div>
          <iframe
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-[90rem] h-[30rem] border-0"
            src="https://dash.adam-rms.com/public/embed/jobs.php?i=25"
            title="AdamRMS Crew Vacancies"
          ></iframe>
        </div>
      </main>
    </Layout>
  );
}

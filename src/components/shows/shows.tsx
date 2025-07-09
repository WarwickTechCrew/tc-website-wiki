import Layout from '@theme/Layout';
import Introduction from '@site/src/components/shows/shows-introduction.md';
import { ShowYearData } from '@site/src/lib/show';
import { FiCamera, FiExternalLink, FiInstagram } from 'react-icons/fi';

export default function Shows({ showYears }: { showYears: ShowYearData[] }) {
  return (
    <Layout title="Shows">
      <header className="max-w-screen-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold my-2">Tech Crew Shows</h1>
      </header>
      <main className="w-full max-w-screen-2xl mx-auto flex-grow flex flex-col">
        <div className="content-styling mb-4 px-4">
          <Introduction />
        </div>
        <div className="space-y-6 px-4 mb-8">
          {showYears.map((showYear) => (
            <div key={showYear.year}>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-xl">{showYear.year}</h3>
                <div className="border-b-black border-b flex-grow" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {showYear.terms.map((term) => (
                  <div key={term.name}>
                    <h4 className="font-bold text-lg">{term.name}</h4>
                    <div className="space-y-4">
                      {term.shows.map((show) => (
                        <article key={show.name}>
                          <h5 className="font-bold uppercase flex">
                            <span className="w-min flex-grow max-w-max">{show.name}</span>
                            {show.society && (
                              <span className="text-xs mt-0.5 ml-1 text-neutral-600"> {show.society}</span>
                            )}
                          </h5>
                          {show.venue && <p className="text-xs uppercase font-medium mb-0.5">{show.venue}</p>}
                          {show.instagram && (
                            <p className="text-xs -mt-0.5">
                              <a
                                href={`https://instagram.com/${show.instagram}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FiInstagram className="mb-0.5 mr-0.5" />
                                {show.instagram}
                              </a>
                            </p>
                          )}
                          <ul className="text-sm">
                            {show.people.map((person) => (
                              <li key={person.name}>
                                {person.role}: {person.name}
                              </li>
                            ))}
                          </ul>
                          {show.links.length > 0 && (
                            <ul className="text-xs mt-1">
                              {show.links.map((link) => (
                                <li key={link.url}>
                                  <strong>{link.name}:</strong>{' '}
                                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.label}
                                  </a>{' '}
                                  <FiExternalLink className="mb-1" />
                                </li>
                              ))}
                            </ul>
                          )}
                          {show.photos && (
                            <p className="text-xs">
                              <a href={show.photos.url} target="_blank" rel="noopener noreferrer">
                                <FiCamera className="mr-0.5 mb-0.5" />
                                <strong>Photos</strong>
                                {show.photos.credit && ` by ${show.photos.credit}`}
                              </a>
                            </p>
                          )}
                        </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

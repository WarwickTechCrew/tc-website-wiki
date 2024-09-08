import React from 'react';
import type { Props } from '@theme/NotFound/Content';
import SearchBar from '@theme/SearchBar';

export default function NotFoundContent({ className }: Props): JSX.Element {
  return (
    <>
      <header className="max-w-screen-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold my-2">Page Not Found</h1>
      </header>
      <main className="w-full max-w-screen-2xl mx-auto flex-grow flex flex-col text-center">
        <div className="px-4">
          <p>We could not find what you're looking for.</p>
          <p className="mb-4">
            If you were linked this page, please tell the owner of the resource
            (or the Tech Crew Exec) that the link is no longer working.
          </p>
          <p className="mb-1">You can also try searching for the page below:</p>
          <div className="flex flex-col items-center">
            <SearchBar />
          </div>
        </div>
      </main>
    </>
  );
}

import React from 'react';
import type { ShowYearData } from '@site/src/lib/show';

const StatCard = ({ value, pre, post }) => (
  <div className="bg-white flex flex-col justify-around rounded-lg shadow-sm border text-black border-gray-200 p-2 sm:p-4">
    {pre && <p className="text-left">{pre}</p>}
    <p className="italic text-xl sm:text-2xl font-bold text-center bg-gradient-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
      {value}
    </p>
    {post && <p className="text-right">{post}</p>}
  </div>
);

type DistributionProps = {
  title: string;
  data: [string, number][];
  barColor: string;
};

const DistributionChart = ({ title, data, barColor }: DistributionProps) => {
  const maxCount = Math.max(...data.map(([, count]) => count));

  return (
    <div className="bg-gray-50 rounded-lg border border-black-4">
      <h3 className="text-lg sticky top-0 m-6 bg-gray-50 font-semibold text-gray-900">{title}</h3>
      <div className="space-y-2 overflow-auto h-60 p-6">
        {data.map(([label, count]) => (
          <div key={label} className="grid grid-cols-2 w-full">
            <span className="text-sm font-medium text-gray-700 mr-4">{label}</span>
            <div className="flex items-center">
              <div className="bg-gray-200 rounded-full h-2 flex-1 min-w-0">
                <div className={`${barColor} h-2 rounded-full`} style={{ width: `${(count / maxCount) * 100}%` }}></div>
              </div>
              <span className="text-sm font-bold text-gray-900 ml-4 w-8 text-right">{count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

type Props = {
  showYears: ShowYearData[];
};

function ShowStats({ showYears }: Props) {
  const numberOfShows = showYears.reduce(
    (count, year) => count + year.terms.reduce((sum, term) => sum + term.shows.length, 0),
    0,
  );
  const numberOfYears = showYears.length;

  // Calculate earliest and latest years
  const years = showYears
    .map((y) => {
      const numYear = parseInt(y.year, 10);
      return isNaN(numYear) ? null : numYear;
    })
    .filter((year): year is number => year !== null);
  const minYear = years.length > 0 ? Math.min(...years) : 0;
  const maxYear = years.length > 0 ? Math.max(...years) + 1 : 0;

  // Flatten all shows into one array
  const allShows = showYears.flatMap((year) => year.terms.flatMap((term) => term.shows));

  // Role frequencies
  const roleCountMap = new Map<string, number>();
  for (const show of allShows) {
    for (const person of show.people) {
      roleCountMap.set(person.role, (roleCountMap.get(person.role) ?? 0) + 1);
    }
  }

  // Sort roles by frequency (descending)
  const sortedRoles = [...roleCountMap.entries()].sort((a, b) => b[1] - a[1]);

  // Society frequencies
  const societyCountMap = new Map<string, number>();
  for (const show of allShows) {
    if (show.society) {
      societyCountMap.set(show.society, (societyCountMap.get(show.society) ?? 0) + 1);
    }
  }

  // Sort societies by frequency (descending)
  const sortedSocieties = [...societyCountMap.entries()].sort((a, b) => b[1] - a[1]);

  // Year with most shows
  const yearShowCounts = showYears.map((yearData) => {
    const showCount = yearData.terms.reduce((sum, term) => sum + term.shows.length, 0);
    return { year: yearData.year, count: showCount };
  });
  const yearWithMostShows = yearShowCounts.reduce((max, entry) => (entry.count > max.count ? entry : max), {
    year: '',
    count: 0,
  });
  // Venue frequencies
  const venueCountMap = new Map<string, number>();
  for (const show of allShows) {
    if (show.venue) {
      venueCountMap.set(show.venue, (venueCountMap.get(show.venue) ?? 0) + 1);
    }
  }
  // Sort venues by frequency (descending)
  const sortedVenues = [...venueCountMap.entries()].sort((a, b) => b[1] - a[1]);

  // Calculate average number of shows per person
  const personShowsMap = new Map<string, Set<string>>();
  for (const show of allShows) {
    for (const person of show.people) {
      if (!personShowsMap.has(person.name)) {
        personShowsMap.set(person.name, new Set());
      }
      personShowsMap.get(person.name)!.add(show.name);
    }
  }

  // Average tech team size
  const averageTechTeamSize = allShows.reduce((sum, show) => sum + show.people.length, 0) / numberOfShows || 0;

  const totalPersons = personShowsMap.size;
  const totalPersonShowCounts = [...personShowsMap.values()].reduce((sum, showSet) => sum + showSet.size, 0);
  const averageShowsPerPerson = totalPersons === 0 ? 0 : totalPersonShowCounts / totalPersons;
  const totalNumberOfShowRoles = [...roleCountMap.values()].reduce((sum, count) => sum + count, 0);

  // Average shows per year
  const averageShowsPerYear = numberOfYears === 0 ? 0 : numberOfShows / numberOfYears;

  return (
    <section className="px-2 sm:px-4 mb-14">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Show Statistics</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-8">
        <StatCard value={`${minYear} - ${maxYear}`} pre="Active between" post={`thats ${numberOfYears} years!`} />
        <StatCard value={numberOfShows} pre="We've put on" post="total shows!" />
        <StatCard value={averageShowsPerYear.toFixed(1)} pre="On average we do" post="shows per year!" />
        <StatCard value={totalPersons} pre="We've got" post="unique people involved in tech!" />
        <StatCard value={averageTechTeamSize.toFixed(1)} pre="Shows have on average" post="tech team members!" />
        <StatCard value={averageShowsPerPerson.toFixed(1)} pre="Each person averages" post="tech crew shows!" />
        <StatCard value={totalNumberOfShowRoles} pre="We've provided" post="total opportunities!" />
        <StatCard
          value={yearWithMostShows.year}
          pre="Our busiest year was"
          post={`with ${yearWithMostShows.count} shows!`}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <DistributionChart title="Role Distribution" data={sortedRoles} barColor="bg-blue-700" />
        <DistributionChart title="Society Distribution" data={sortedSocieties} barColor="bg-green-700" />
        <DistributionChart title="Venue Distribution" data={sortedVenues} barColor="bg-purple-700" />
      </div>
    </section>
  );
}

export default ShowStats;

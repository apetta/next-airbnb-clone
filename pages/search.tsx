import { format } from "date-fns";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchResults }: { searchResults: SearchResults[] }) {
  const router = useRouter();

  const {
    location,
    startDate = new Date(),
    endDate = new Date(),
    guestNumber,
  } = router.query;

  const formattedStartDate = format(
    new Date(startDate as unknown as Date),
    "dd MMMM yy"
  );
  const formattedEndDate = format(
    new Date(endDate as unknown as Date),
    "dd MMMM yy"
  );

  const dateRange = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${location} | ${dateRange} | ${guestNumber} Guest`}
      />

      <main className="flex">
        <section className="grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays - {dateRange} for {guestNumber} Guests
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">Stays in London</h1>
          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">
              Type of Place and other random things with a long string
            </p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div>
            {searchResults?.map((result, _) => (
              <InfoCard key={_} {...result} />
            ))}
          </div>
        </section>

        <section className="sticky top-0 hidden h-screen xl:inline xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}

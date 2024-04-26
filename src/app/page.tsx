import Card from "../pages/components/card/card";

export default function Home({ searchParams }:any) {
  const page = parseInt(searchParams.page) || 1; 


  return (
    <main className="flex flex-col items-center justify-between p-12">
      <Card pageNumber={page} />
    </main>
  );
}

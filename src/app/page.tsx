import { Banner } from "./components/Banner/Banner";
import { FeaturedCard } from "./components/FeaturedCard/FeaturedCard";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { getCategories, getProducts } from "./lib/featuredFetch";

export default async function LandingPage() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <>
      <Wrapper sectionHeader headerText="Udvalgte Produkter">
        <FeaturedCard data={products} />
      </Wrapper>
      <Wrapper sectionHeader>
        <Banner
          type="mission"
          headerText="Den Grønne Avis"
          subText="Vi går forest i kampen om klimaet ved at give 2 kr. til
              klima-venlige formål, hver gang du handler brugt på Den Grønne
              Avis"
        />
      </Wrapper>
      <Wrapper sectionHeader headerText="Populære Kategorier">
        <FeaturedCard data={categories} topHeader />
      </Wrapper>
      <Wrapper sectionHeader>
        <Banner
          type="toDate"
          headerText="Donationer til Dato"
          subText="Sammen med dig har vi siden starten indsamlet:"
          moneyText="452.231,50 kr"
          footerText="Tak fordi du handler brugt, med omtanke for klimaet"
        />
        <Banner
          type="thisYear"
          headerText="Donationer i År"
          subText="Sammen med dig har vi i år indsamlet:"
          moneyText="112.452,75 kr"
          footerText="Tak fordi du handler brugt, med omtanke for jorden"
        />
      </Wrapper>
    </>
  );
}

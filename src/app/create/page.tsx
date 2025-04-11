import { ProductForm } from "../components/ProductForm/ProductForm";
import { Wrapper } from "../components/Wrapper/Wrapper";

export default function CreatePage() {
  return (
    <>
      <Wrapper
        sectionHeader
        headerText="Opret ny annonce"
        subHeaderText="Her kan du oprette en ny annoce. Du har mulighed for at slette dine annoncer igen under 'min konto' siden"
      >
        <ProductForm />
      </Wrapper>
    </>
  );
}

import s from "./ProductDetails.module.scss";

interface ProductDetailsInterface {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductDetailsInterface) => {
  return (
    <figure className={s.detailsStyling}>
      <img src={data?.image} alt={data?.name} />
      <figcaption>
        <header>
          <h3>{data?.name}</h3>
        </header>
        <p>{data?.description}</p>
        <footer>
          <h4>Pris: {data?.price} kr</h4>
        </footer>
      </figcaption>
    </figure>
  );
};

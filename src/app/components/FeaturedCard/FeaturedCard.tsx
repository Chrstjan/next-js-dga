import s from "./FeaturedCard.module.scss";

interface FeaturedCardInterface {
  data: Product[] | Category[];
  topHeader?: boolean;
  productListing?: boolean;
}

export const FeaturedCard = ({
  data,
  topHeader,
  productListing,
}: FeaturedCardInterface) => {
  return (
    <>
      {data?.map((item: Product | Category) => {
        return (
          <figure
            className={`${s.cardStyling} ${
              productListing ? s.borderStyling : ""
            }`}
            key={item?.id}
          >
            {topHeader ? (
              <figcaption className={s.topCaptionStyling}>
                <h4>{item?.name}</h4>
              </figcaption>
            ) : null}
            <img src={item?.image || item?.category_image} alt={item?.name} />
            {!topHeader ? (
              <figcaption className={s.captionStyling}>
                {!productListing ? (
                  <h4>{item?.name}</h4>
                ) : (
                  <h5>Pris: {item?.price} kr</h5>
                )}
              </figcaption>
            ) : null}
            {productListing ? (
              <div className={s.listingStyling}>
                <h4>{item?.name}</h4>
                <p>{item?.description}</p>
              </div>
            ) : null}
          </figure>
        );
      })}
    </>
  );
};

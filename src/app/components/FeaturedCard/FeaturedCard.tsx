import s from "./FeaturedCard.module.scss";

interface FeaturedCardInterface {
  data: Product[] | Category[];
  topHeader?: boolean;
}

export const FeaturedCard = ({ data, topHeader }: FeaturedCardInterface) => {
  return (
    <>
      {data?.map((item: Product | Category) => {
        return (
          <figure className={s.cardStyling} key={item?.id}>
            {topHeader ? (
              <figcaption className={s.topCaptionStyling}>
                <h4>{item?.name}</h4>
              </figcaption>
            ) : null}
            <img src={item?.image || item?.category_image} alt={item?.name} />
            {!topHeader ? (
              <figcaption className={s.captionStyling}>
                <h4>{item?.name}</h4>
              </figcaption>
            ) : null}
          </figure>
        );
      })}
    </>
  );
};

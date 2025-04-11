import { Dispatch, SetStateAction } from "react";
import s from "./Pageination.module.scss";

interface PageinationInterface {
  totalProducts: number;
  productsPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}

export const Pageination = ({
  totalProducts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}: PageinationInterface) => {
  let pages = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i < totalPages; i++) {
    pages.push(i);
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={s.containerStyling}>
      <button onClick={() => goToPrevPage()} disabled={currentPage === 1}>
        Forrige side
      </button>
      <p>
        side {currentPage} / {totalPages}
      </p>
      <button
        onClick={() => goToNextPage()}
        disabled={currentPage === totalPages}
      >
        Næste side
      </button>
    </div>
  );
};

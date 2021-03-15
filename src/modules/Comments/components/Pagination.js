import React, { useState, useEffect } from "react";
import { getNumberOfPages } from "../api/comments-api";
import ArrowSVG from "../assets/ArrowSVG";
import "../styles/Pagination.css";

export default function Pagination({ props }) {
  const { commentsPage, setCommentsPage } = props;
  const [paginationButtons, setPaginationButtons] = useState([]);
  const [lastPage, setLastPage] = useState(null);

  const getNumsToDisplay = async (pageNumber, numberOfPages) => {
    let numsToDisplay = [];
    if (pageNumber === 1) {
      for (let i = 1; i <= numberOfPages; i++) {
        if (numsToDisplay.length === 3) {
          break;
        } else {
          numsToDisplay.push(i);
        }
      }
    } else if (pageNumber === numberOfPages) {
      for (let i = numberOfPages; i <= numberOfPages; i--) {
        if (numsToDisplay.length === 3) {
          break;
        } else {
          numsToDisplay.push(i);
        }
      }
      return numsToDisplay.reverse();
    } else {
      numsToDisplay = [pageNumber - 1, pageNumber, pageNumber + 1];
    }
    return numsToDisplay;
  };

  const displayPagination = async (pageNumber) => {
    let buttons = [1];
    const numberOfPages = await getNumberOfPages();
    setLastPage(numberOfPages);
    let numsToDisplay = await getNumsToDisplay(pageNumber, numberOfPages);
    numsToDisplay &&
      numsToDisplay.forEach(
        (n) => n !== 1 && n !== numberOfPages && buttons.push(n)
      );
    numberOfPages > 1 && buttons.push(numberOfPages);
    numsToDisplay[0] > 2 && buttons.splice(1, 0, "...");
    numsToDisplay[2] < numberOfPages - 1 &&
      buttons.splice(buttons.length - 1, 0, "...");
    setPaginationButtons(buttons);
  };

  useEffect(() => {
    displayPagination(commentsPage);
  }, [commentsPage]);

  return (
    <ul className="Pagination">
      <li
        className="page-arrow"
        onClick={() =>
          commentsPage !== 1 && setCommentsPage((prev) => prev > 1 && prev - 1)
        }
      >
        <ArrowSVG
          viewBox={"6 -1 12 24"}
          fill={"grey"}
          transform={"rotate(90)"}
        />
      </li>
      {paginationButtons &&
        paginationButtons.map((pageNumber, index) => {
          return pageNumber === "..." ? (
            <li>...</li>
          ) : (
            <li
              onClick={() => setCommentsPage(pageNumber)}
              key={index}
              className={pageNumber === commentsPage ? "active" : "page-number"}
            >
              {pageNumber}
            </li>
          );
        })}
      <li
        className="page-arrow"
        onClick={() =>
          commentsPage !== lastPage &&
          setCommentsPage((prev) => {
            return prev + 1;
          })
        }
      >
        <ArrowSVG
          viewBox={"6 -1 12 24"}
          fill={"grey"}
          transform={"rotate(270)"}
        />
      </li>
    </ul>
  );
}

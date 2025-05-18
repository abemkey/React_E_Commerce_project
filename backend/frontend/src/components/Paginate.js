import React from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

function Paginate({ pages, page, keyword = "", isAdmin = false }) {
  if (keyword) {
    keyword = keyword.split("?keyword=")[1]?.split("&")[0] || "";
  }

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => {
          const targetPage = x + 1;
          const path = !isAdmin
            ? `/?keyword=${keyword}&page=${targetPage}`
            : `/admin/productlist/?keyword=${keyword}&page=${targetPage}`;

          return (
            <Pagination.Item
              key={targetPage}
              active={targetPage === page}
              as={Link}
              to={path}
            >
              {targetPage}
            </Pagination.Item>
          );
        })}
      </Pagination>
    )
  );
}

export default Paginate;


import React, { useState } from "react";
import styles from "./Products.module.css";
import { useSelector } from "react-redux";
import Product from "./Product/Product";
import { Grid, Container } from "@chakra-ui/react";
import Pagination from "./Product/Pagination";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  
  const product = useSelector((state) => state.api.apiData);
  // console.log("products", product);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = product.slice(indexOfFirstPost, indexOfLastPost);
console.log("currentPosts",currentPosts)
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return product ? (
    <Container maxW="md" centerContent>
      <Grid
        className={styles.products}
        templateColumns="repeat(3, 1fr)"
        gap={10}
      >
        {currentPosts.map((prod) => (
          <Product productData={prod} key={prod.id} />
        ))}
        {console.log("products", product)}
      </Grid>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={product.length}
        paginate={paginate}
      />
    </Container>
  ) : (
    "loading"
  );
};

export default Products;

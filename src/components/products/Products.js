import React from "react";
import styles from "./Products.module.css";
import { useSelector } from "react-redux";
import Product from "./Product/Product";
import { Grid, Container,ChakraProvider } from "@chakra-ui/react";
const Products = () => {
  const product = useSelector((state) => state.api.apiData);
  console.log("products", product);
  return product ? (
    <Container maxW='md' centerContent>
      
      <Grid
        className={styles.products}
        templateColumns="repeat(3, 1fr)"
        gap={10}
      >
        {product.map((prod) => (
          <Product productData={prod} key={prod.id} />
        ))}
        {console.log("products", product)}
      </Grid>
      
    </Container>
   
  ) : (
    "loading"
  );
};

export default Products;

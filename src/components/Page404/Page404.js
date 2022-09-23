import React from "react";
// import Page404StyleWrapper from "./Page404.styles";
import styles from "./Page404.module.css"
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Page404() {
  const navigate = useNavigate();
  return (
    <>
     <div className={styles.main_div}>
      
        <img className={styles.error__image} src="https://thumbs.dreamstime.com/z/page-not-found-28300339.jpg" alt="404image" />
      
     
        <h1 className={styles.details__title}>Whoops! Page Not Found!</h1>
        <p className={styles.product__details}>
          Sorry we can't find the page you are looking for! Please try something
          else.
        </p>
        <Button className={`${styles.buttons__btn} ${styles.buttons__view}`} onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    {/* // </Page404StyleWrapper> */}
    </>
  );
}

export default Page404;

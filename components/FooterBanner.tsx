import React from "react";

import styles from "../components/sass_components/FooterBanner.module.scss";
import Square from "@/shapes/Square";

const FooterBanner = () => {
  const allPositions = Array.from({ length: 50 }).map((_, index) => index);
  const columnOne = [0, 40];
  const columnTwo = [0,5,40,41,42,49]
  const columnThree = [1,5,40]

  return (
    <div className={styles.footer_banner}>
      <div className={styles.column}>

        {allPositions.map((element) => (
          <>
            {
              columnOne.includes(element) ? (
                <Square isTransparent={false} isWhite={true} />
              ) : (
                <Square isTransparent={true} isWhite={false} />

              )
            }
          </>

        ))}

      </div>
      <div className={styles.column}>
      {allPositions.map((element) => (
          <>
            {
              columnTwo.includes(element) ? (
                <Square isTransparent={false} isWhite={true} />
              ) : (
                <Square isTransparent={true} isWhite={false} />

              )
            }
          </>

        ))}
      </div>
      <div className={styles.column}>
      {allPositions.map((element) => (
          <>
            {
              columnThree.includes(element) ? (
                <Square isTransparent={true} isWhite={false} />
              ) : (
                <Square isTransparent={false} isWhite={true} />

              )
            }
          </>

        ))}
      </div>
      <div className={styles.column}>
        {Array.from({ length: 50 }).map((_, index) => (
          <Square isTransparent={false} isWhite={true} />
        ))}
      </div>
      <div className={styles.column}>
        {Array.from({ length: 50 }).map((_, index) => (
          <Square isTransparent={false} isWhite={true} />
        ))}
      </div>
      <div className={styles.column}>
        {Array.from({ length: 50 }).map((_, index) => (
          <Square isTransparent={false} isWhite={true} />
        ))}
      </div>
      <div className={styles.column}>
        {Array.from({ length: 50 }).map((_, index) => (
          <Square isTransparent={false} isWhite={true} />
        ))}
      </div>
      <div className={styles.column}>
        {Array.from({ length: 50 }).map((_, index) => (
          <Square isTransparent={false} isWhite={true} />
        ))}
      </div>
    </div>
  );
};

export default FooterBanner;

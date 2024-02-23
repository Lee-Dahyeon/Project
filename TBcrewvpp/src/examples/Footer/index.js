/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function Footer() {
  return (
    <VuiBox
      display="flex"
      flexDirection={{ xs: "column", lg: "column" }}
      direction="column"
      component="footer"
      py={2}
      pb={0}
    >
      
      <VuiBox item xs={12} sx={{ textAlign: "center" }}>
        <VuiBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
          <VuiBox mr={{ lg: "15px" }}>
            <VuiTypography
              component="a"
              href="https://turbinecrew.co.kr/"
              variant="button"
              color="white"
              sx={{ textAlign: "center", fontWeight: "400 !important" }}
            >
              Address : 50, Cheomdangwagi-ro 208beon-gil, Buk-gu, Gwangju, Republic of Korea Business
            </VuiTypography>
          </VuiBox>
          <VuiBox mr={{ lg: "15px" }}>
            <VuiTypography
              component="a"
              href="https://turbinecrew.co.kr/"
              variant="button"
              color="white"
              sx={{ textAlign: "center", fontWeight: "400 !important" }}
            >
              License : 111-81-94369
            </VuiTypography>
          </VuiBox>
          <VuiBox>
            <VuiTypography
              component="a"
              href="https://turbinecrew.co.kr/"
              variant="button"
              color="white"
              sx={{ textAlign: "center", fontWeight: "400 !important" }}
            >
              Mall : ceo@turbinecrew.co.kr
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
      <VuiBox item xs={12} sx={{ textAlign: "center" }}>
        <VuiTypography
          component="a"
          variant="button"
          href="https://turbinecrew.co.kr/"
          sx={{ textAlign: "center", fontWeight: "400 !important" }}
          color="white"
        >
          Copyright © Turbine Crew Co., Ltd All Rights Reserved
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

export default Footer;

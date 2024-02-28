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

/* eslint-disable react/prop-types */
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";

// Images
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";
import avatar5 from "assets/images/avatar5.png";
import avatar6 from "assets/images/avatar6.png";

function Author({ image, name, email }) {
  return (
    <VuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <VuiBox mr={2}>
        <VuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </VuiBox>
      <VuiBox display="flex" flexDirection="column">
        <VuiTypography variant="button" color="white" fontWeight="medium">
          {name}
        </VuiTypography>
        <VuiTypography variant="caption" color="text">
          {email}
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

function Function({ job, org }) {
  return (
    <VuiBox display="flex" flexDirection="column">
      <VuiTypography variant="caption" fontWeight="medium" color="white">
        {job}
      </VuiTypography>
      <VuiTypography variant="caption" color="text">
        {org}
      </VuiTypography>
    </VuiBox>
  );
}

export default {
  columns: [
    // { name: "userid", align: "left" },
    { name: "SMP", align: "center" },
    { name: "status", align: "center" },
    { name: "전력판매량(kWh)", align: "center" },
    { name: "전력판매액(원)", align: "center" },
  ],

  rows: [
    {
      // userid: <Author name="Esthera Jackson" email="esthera@simmmple.com" />,
      SMP: 93,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="구입"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "unset",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      '전력판매량(kWh)': (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          240
        </VuiTypography>
      ),
      '전력판매액(원)': (
        <VuiTypography  variant="caption" color="white" fontWeight="medium">
          22,320
        </VuiTypography>
      ),
    },
    {
      SMP: 92,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="구입"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "unset",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      '전력판매량(kWh)': (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          186
        </VuiTypography>
      ),
      '전력판매액(원)': (
        <VuiTypography  variant="caption" color="white" fontWeight="medium">
          17,112
        </VuiTypography>
      ),
    },
    {
      SMP: 97,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="구입"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "unset",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      '전력판매량(kWh)': (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          360
        </VuiTypography>
      ),
      '전력판매액(원)': (
        <VuiTypography  variant="caption" color="white" fontWeight="medium">
          34,920
        </VuiTypography>
      ),
    },
    {
      SMP: 97,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="구입"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "unset",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      '전력판매량(kWh)': (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          360
        </VuiTypography>
      ),
      '전력판매액(원)': (
        <VuiTypography  variant="caption" color="white" fontWeight="medium">
          34,920
        </VuiTypography>
      ),
    },
    {
      SMP: 97,
      status: (
        <VuiBadge
          variant="standard"
          badgeContent="구입"
          size="xs"
          container
          sx={({ palette: { white }, borders: { borderRadius, borderWidth } }) => ({
            background: "unset",
            border: `${borderWidth[1]} solid ${white.main}`,
            borderRadius: borderRadius.md,
            color: white.main,
          })}
        />
      ),
      '전력판매량(kWh)': (
        <VuiTypography variant="caption" color="white" fontWeight="medium">
          360
        </VuiTypography>
      ),
      '전력판매액(원)': (
        <VuiTypography  variant="caption" color="white" fontWeight="medium">
          34,920
        </VuiTypography>
      ),
    },
    // ///////////////////////////////////////////////////////////
    
  ],
};

// {
    //   project: (
    //     <VuiBox display="flex" alignItems="center">
    //       <AdobeXD size="20px" />
    //       <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
    //         Chakra Vision UI Version
    //       </VuiTypography>
    //     </VuiBox>
    //   ),
    //   budget: (
    //     <VuiTypography variant="button" color="white" fontWeight="medium">
    //       $14,000
    //     </VuiTypography>
    //   ),
    //   status: (
    //     <VuiTypography variant="button" color="white" fontWeight="medium">
    //       Working
    //     </VuiTypography>
    //   ),
    //   completion: <Completion value={60} color="info" />,
    //   action,
    // },
    
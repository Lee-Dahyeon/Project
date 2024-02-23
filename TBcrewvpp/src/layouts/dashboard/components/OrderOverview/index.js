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

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// React icons
import { BsCheckCircleFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { SiDropbox } from "react-icons/si";

// Vision UI Dashboard React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import AdobeXD from "examples/Icons/AdobeXD";

// Vision UI Dashboard theme imports
import palette from "assets/theme/base/colors";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <VuiBox mb="16px" just>
        <VuiTypography variant="lg" fontWeight="bold" mb="5px" color="white">
          Alarm overview
        </VuiTypography>
        <VuiBox mb={2}>
          <VuiBox display="flex" alignItems="center">
            <BsCheckCircleFill color="green" size="15px" mr="5px" />
            <VuiTypography variant="button" color="text" fontWeight="medium" ml="5px" mr="2px">
              +30%
            </VuiTypography>{" "}
            <VuiTypography variant="button" color="text" fontWeight="regular">
              {" "}
              this month
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
      <VuiBox paddingLeft='40px'>
        <TimelineItem
          icon={<FaBell size="16px" color={palette.info.main} />}
          title="New order : REC +4"
          dateTime="21 FEB 7:20 PM"
        />
        <TimelineItem
          icon={<FaFileDownload size="16px" color={palette.warning.main} />}
          title="Power Trade: 200 Mwh"
          dateTime="20 FEB 11 PM"
        />
        <TimelineItem
          icon={<FaBell size="16px" color={palette.info.main} />}
          title="New order : REC +14"
          dateTime="20 FEB 9:34 PM"
        />
        <TimelineItem
          icon={<FaFileDownload size="16px" color={palette.warning.main} />}
          title="Power Trade: 150 Mwh"
          dateTime="19 FEB 2:20 AM"
        />
        <TimelineItem
          icon={<BsCreditCardFill size="16px" color={palette.warning.main} />}
          title="New Client order"
          dateTime="19 FEB 2:20 AM"
        />
        <TimelineItem
          icon={<FaBell size="16px" color={palette.info.main} />}
          title="New order : REC +8"
          dateTime="18 FEB 9:34 PM"
        />
        <TimelineItem
          icon={<FaFileDownload size="16px" color={palette.warning.main} />}
          title="Power Trade: 320 Mwh"
          dateTime="17 FEB 2:20 AM"
        />
      </VuiBox>
    </Card>
  );
}

export default OrdersOverview;

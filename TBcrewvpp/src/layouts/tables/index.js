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
import VuiProgress from "components/VuiProgress";
import VuiButton from "components/VuiButton";


// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import LineChart from "examples/Charts/LineCharts/LineChart";


// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData_smp";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions_smp";

function Tables() {
  const { columns, rows } = authorsTableData;
  const columns_turbine = [{
    name: "매도", align: "center"
  },
  { name: "SMP", align: "center" },
  { name: "매수", align: "center" },];
  const rows_turbine = [{
    '매도': (
      <VuiBox width="8rem" textAlign="center" >
        <VuiTypography color="white" variant="button" fontWeight="bold">
          120
        </VuiTypography>
        <VuiProgress value={70} color="info" label={false} sx={{ background: "#2D2E5F" }} />
      </VuiBox>
    ),
    'SMP':
      <VuiTypography variant="caption" color="white" fontWeight="medium">
        98.56
      </VuiTypography>,
    '매수':
      <VuiTypography variant="caption" color="white" fontWeight="medium">
        0
      </VuiTypography>


  }];
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox display="flex" flexDirection="row" >
        <VuiBox mb={2} width="50%" mr='20px' >
          <Card >
            <VuiBox display="flex" flexDirection="column" justifyContent="space-between" mb="22px">
              <VuiTypography variant="l" color="white">
                터빈크루
              </VuiTypography>
              <VuiTypography variant="lg" color="text" ml='15px'>
                거래량: 1,150
              </VuiTypography>
            </VuiBox>
            <VuiBox mb='40px'
              sx={{
                "& th": {
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                      `${borderWidth[1]} solid ${grey[700]}`,
                  },
                },
              }}
            >
              <Table columns={columns_turbine} rows={rows_turbine} />
            </VuiBox>
            <VuiBox display="flex" flexDirection="row" justifyContent="space-evenly" mb="22px">
              <VuiTypography variant="lg" color="white">
                kWh: 670 {/* 670부분은 사용자가 직접 입력하도록 수정해야함 */}
              </VuiTypography>
              <VuiTypography variant="lg" color="white">
                금액: 66,035원
              </VuiTypography>
            </VuiBox>
            <VuiBox display="flex" flexDirection="row" justifyContent="space-evenly">
              <VuiButton variant="contained" color="primary">
                매도하기
              </VuiButton>
              <VuiButton variant="contained" color="light">
                매수하기
              </VuiButton>
            </VuiBox>
          </Card>
        </VuiBox >
        <VuiBox mb={2} width="50%" mr='20px' >
          <Card >
            <VuiBox display="flex" flexDirection="column" justifyContent="space-between" mb="6px">
              <VuiTypography variant="lg" color="white">
                SMP 변동추이
              </VuiTypography>
            </VuiBox>
            <VuiBox>
              <VuiBox display="flex" mb="20px">
                <VuiTypography variant="button" color="text" fontWeight="regular">
                  단위:원
                </VuiTypography>
              </VuiBox>
              <VuiBox sx={{ height: "230px" }}>
                <LineChart
                  lineChartData={lineChartDataDashboard}
                  lineChartOptions={lineChartOptionsDashboard}
                />
              </VuiBox>
            </VuiBox>
          </Card>
        </VuiBox>
      </VuiBox>

      <VuiBox py={3} display='flex' justifyContent="space-evenly" flexDirection='row'>
        <VuiBox mb={3} width="50%" mr='20px' >
          <Card >
            <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
              <VuiTypography variant="lg" color="white">
                전력판매 내역
              </VuiTypography>
            </VuiBox>
            <VuiBox
              sx={{
                "& th": {
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                      `${borderWidth[1]} solid ${grey[700]}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </VuiBox>
          </Card>
        </VuiBox>
        <VuiBox mb={3} width="50%">
          <Card  >
            <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
              <VuiTypography variant="lg" color="white">
                전력구입 내역
              </VuiTypography>
            </VuiBox>
            <VuiBox
              sx={{
                "& th": {
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                      `${borderWidth[1]} solid ${grey[700]}`,
                  },
                },
              }}
            >
              <Table columns={prCols} rows={prRows} />
            </VuiBox>
          </Card>
        </VuiBox>
        {/* <Card flex={1} >
          <VuiBox display="flex" justifyContent="space-between" alignItems="center">
            <VuiTypography variant="lg" color="white">
              Projects table
            </VuiTypography>
          </VuiBox>
          <VuiBox
            sx={{
              "& th": {
                borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                  `${borderWidth[1]} solid ${grey[700]}`,
              },
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </VuiBox>
        </Card> */}
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;

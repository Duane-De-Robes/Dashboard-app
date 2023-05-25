import "./Dashboard.css";
import Header from "../../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../Theme";
import { mockTransactions } from "../../data/MockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box className="dashboard-header">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}>
            <DownloadOutlinedIcon sx={{ mr: "10px" }} /> Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS  */}
      <Box className="charts">
        {/* ROW 1  */}

        <Box className="statbox" backgroundColor={colors.primary[400]}>
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box className="statbox" backgroundColor={colors.primary[400]}>
          <StatBox
            title="431,526"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box className="statbox" backgroundColor={colors.primary[400]}>
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+20%"
            icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box className="statbox" backgroundColor={colors.primary[400]}>
          <StatBox
            title="1,352,246"
            subtitle="Traffic Inbound"
            progress="0.80"
            increase="+62%"
            icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>

        {/* Row 2 */}
        <Box className="row-2" backgroundColor={colors.primary[400]}>
          <Box className="line-header">
            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
              Revenue Generated
            </Typography>
            <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[100]}>
              $59,342,15
            </Typography>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
          </Box>
          <Box className="graph-box">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* TRANSACTIONS */}
        <Box className="transactions-main" backgroundColor={colors.primary[400]}>
          <Box className="transactions" borderBottom={`4px solid ${colors.primary[500]}`} colors={colors.grey[100]}>
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              className="transactions"
              borderBottom={`4px solid ${colors.primary[500]}`}>
              <Box>
                <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>{transaction.user}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box backgroundColor={colors.greenAccent[500]} className="transactions-amount">
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box className="row-3" backgroundColor={colors.primary[400]}>
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box className="progress-circle">
            <ProgressCircle size="125" />
            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt: "15px" }}>
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box className="sales-quantity" backgroundColor={colors.primary[400]}>
          <Typography variant="h5" fontWeight="600" sx={{ padding: "30px 30px 0 30px" }}>
            Sales Quantity
          </Typography>
          <Box className="graph-box">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box className="row-3" backgroundColor={colors.primary[400]}>
          <Typography variant="h5" fontWeight="600" sx={{ marginBottom: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

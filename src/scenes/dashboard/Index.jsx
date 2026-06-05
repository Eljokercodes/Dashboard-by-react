import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import DownloadOutLinedIcon from "@mui/icons-material/DownloadOutLined";
import EmailIcon from "@mui/icons-material/Email";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import StateBox from "../../components/StateBox";
import { tokens } from "../../Theme";
import LineChart from "../../components/LineCharts";
import { mockTransactions } from "../../data/MockData";
import ProgressCircle from "../../components/ProgressCircle";
import BarChart from "../../components/BarChart";
import LineCharts from "../../components/LineCharts";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        m: "20px",
        overflowX: "hidden",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          gap: 2,
          mb: 2,
        }}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            width: {
              xs: "100%",
              sm: "auto",
            },
          }}
        >
          <DownloadOutLinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>

      {/* GRID */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: "140px",
          gap: "20px",
        }}
      >
        {/* CARD 1 */}
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              sm: "span 6",
              md: "span 3",
            },
            backgroundColor: colors.primary[400],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StateBox
            title="12,361"
            subtitle="Emails Sent"
            progress={0.75}
            increase="+14%"
            icon={
              <EmailIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        {/* CARD 2 */}
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              sm: "span 6",
              md: "span 3",
            },
            backgroundColor: colors.primary[400],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StateBox
            title="431,225"
            subtitle="Sales Obtained"
            progress={0.5}
            increase="+21%"
            icon={
              <ShoppingCartIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        {/* CARD 3 */}
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              sm: "span 6",
              md: "span 3",
            },
            backgroundColor: colors.primary[400],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StateBox
            title="32,441"
            subtitle="New Clients"
            progress={0.3}
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        {/* CARD 4 */}
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              sm: "span 6",
              md: "span 3",
            },
            backgroundColor: colors.primary[400],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StateBox
            title="1,325,134"
            subtitle="Traffic Inbound"
            progress={0.8}
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        {/* LINE CHART */}
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              lg: "span 8",
            },
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              mt: "25px",
              p: "0 30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: colors.greenAccent[500],
                }}
              >
                $59,342,32
              </Typography>
            </Box>

            <IconButton>
              <DownloadOutLinedIcon
                sx={{
                  fontSize: "26px",
                  color: colors.greenAccent[500],
                }}
              />
            </IconButton>
          </Box>

          <Box
            sx={{
              flex: 1,
              minHeight: 0,
              width: "100%",
              mt: "5px",
            }}
          >
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* TRANSACTIONS */}
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              lg: "span 4",
            },
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: `4px solid ${colors.primary[500]}`,
              color: colors.grey[100],
              p: "15px",
            }}
          >
            <Typography variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>

          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: `4px solid ${colors.primary[500]}`,
                p: "15px",
              }}
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>

                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>

              <Typography color={colors.grey[100]}>
                {transaction.date}
              </Typography>

              <Box
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  p: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* CAMPAIGN */}
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              md: "span 6",
              lg: "span 4",
            },
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            p: 3,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "600" }}>
            Campaign
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              mt: "25px",
            }}
          >
            <ProgressCircle size="125" />

            <Typography
              variant="h5"
              sx={{
                color: colors.greenAccent[500],
                mt: "15px",
              }}
            >
              $48,352 revenue generated
            </Typography>

            <Typography>
              Includes extra misc expenditures and costs
            </Typography>
          </Box>
        </Box>

        {/* BAR CHART */}
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              md: "span 6",
              lg: "span 4",
            },
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              p: "30px 30px 0 30px",
            }}
          >
            Sales Quantity
          </Typography>

          <Box
            sx={{
              height: "250px",
              mt: "-20px",
            }}
          >
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* LINE CHART 2 */}
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              md: "span 12",
              lg: "span 4",
            },
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            p: "30px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              mb: "15px",
            }}
          >
            Sales Quantity
          </Typography>

          <Box
            sx={{
              height: "250px",
              mt: "-20px",
            }}
          >
            <LineCharts isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
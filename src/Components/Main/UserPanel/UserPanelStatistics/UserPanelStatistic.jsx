import React from 'react'
import "./UserPanelStatistic.css"
import { Card, CardContent, Typography } from '@mui/joy';

function UserPanelStatistic() {
  return (
    <div className="userPanelStatisticsContainer">
        <div className="userPanelStatisticsBox">
          <Card
            className="userPanelCard orderCard"
            sx={{
              width: "13vw",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.5rem",
              margin: "0.5rem",
            }}
          >
            <CardContent>
              <Typography
                startDecorator={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.25 3.75H5.25V21.75H18.75V3.75H15.75M8.25 12.75L11.25 15.75L16.5 10.5M8.25 2.25H15.75L14.8125 5.25H9.1875L8.25 2.25Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              ></Typography>
            </CardContent>
            <CardContent>
              <Typography sx={{ display: "flex", justifyContent: "flex-end" }}>
                0
              </Typography>
              <Typography sx={{ display: "flex", justifyContent: "flex-end" }}>
                Orders
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: "13vw",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.5rem",
              margin: "0.5rem",
            }}
          >
            <CardContent>
              <Typography
                startDecorator={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 7V18C3 19.886 3 20.828 3.586 21.414C4.172 22 5.114 22 7 22H17C18.886 22 19.828 22 20.414 21.414C21 20.828 21 19.886 21 18V7M17 7C17 5.67392 16.4732 4.40215 15.5355 3.46447C14.5979 2.52678 13.3261 2 12 2C10.6739 2 9.40215 2.52678 8.46447 3.46447C7.52678 4.40215 7 5.67392 7 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 22V18C14 17.4696 13.7893 16.9609 13.4142 16.5858C13.0391 16.2107 12.5304 16 12 16C11.4696 16 10.9609 16.2107 10.5858 16.5858C10.2107 16.9609 10 17.4696 10 18V22M9 3H4.472C4.162 3 3.847 3.082 3.598 3.329C2.856 4.064 2.428 5.288 2 7H7M15 3H19.528C19.838 3 20.153 3.082 20.402 3.329C21.144 4.064 21.572 5.288 22 7H17M6 11H6.5M6 14.5H6.5M17.5 11H18M17.5 14.5H18M10.5 8V9.5M10.5 9.5V11M10.5 9.5H13.5M13.5 8V9.5M13.5 9.5V11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              ></Typography>
            </CardContent>
            <CardContent>
              <Typography sx={{ display: "flex", justifyContent: "flex-end" }}>
                0
              </Typography>
              <Typography sx={{ display: "flex", justifyContent: "flex-end" }}>
                Hotels
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: "13vw",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.5rem",
              margin: "0.5rem",
            }}
          >
            <CardContent>
              <Typography
                startDecorator={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                  >
                    <path
                      d="M10 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V11C0 11.7956 0.316071 12.5587 0.87868 13.1213C1.44129 13.6839 2.20435 14 3 14L2 15V16H3L5 13.97L7 14V9H2V2H11V4H13V3C13 2.20435 12.6839 1.44129 12.1213 0.87868C11.5587 0.316071 10.7956 0 10 0ZM3 10C3.26522 10 3.51957 10.1054 3.70711 10.2929C3.89464 10.4804 4 10.7348 4 11C4 11.2652 3.89464 11.5196 3.70711 11.7071C3.51957 11.8946 3.26522 12 3 12C2.73478 12 2.48043 11.8946 2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11C2 10.7348 2.10536 10.4804 2.29289 10.2929C2.48043 10.1054 2.73478 10 3 10ZM18.57 5.66C18.43 5.26 18.05 5 17.6 5H10.41C9.95 5 9.58 5.26 9.43 5.66L8 9.77V15.28C8 15.66 8.32 16 8.7 16H9.32C9.7 16 10 15.62 10 15.24V14H18V15.24C18 15.62 18.31 16 18.69 16H19.3C19.68 16 20 15.66 20 15.28V9.77L18.57 5.66ZM10.41 6H17.6L18.63 9H9.38L10.41 6ZM10 12C9.73478 12 9.48043 11.8946 9.29289 11.7071C9.10536 11.5196 9 11.2652 9 11C9 10.7348 9.10536 10.4804 9.29289 10.2929C9.48043 10.1054 9.73478 10 10 10C10.2652 10 10.5196 10.1054 10.7071 10.2929C10.8946 10.4804 11 10.7348 11 11C11 11.2652 10.8946 11.5196 10.7071 11.7071C10.5196 11.8946 10.2652 12 10 12ZM18 12C17.7348 12 17.4804 11.8946 17.2929 11.7071C17.1054 11.5196 17 11.2652 17 11C17 10.7348 17.1054 10.4804 17.2929 10.2929C17.4804 10.1054 17.7348 10 18 10C18.2652 10 18.5196 10.1054 18.7071 10.2929C18.8946 10.4804 19 10.7348 19 11C19 11.2652 18.8946 11.5196 18.7071 11.7071C18.5196 11.8946 18.2652 12 18 12Z"
                      fill="currentColor"
                    />
                  </svg>
                }
              ></Typography>
            </CardContent>
            <CardContent>
              <Typography sx={{ display: "flex", justifyContent: "flex-end" }}>
                0
              </Typography>
              <Typography sx={{ display: "flex", justifyContent: "flex-end" }}>
                Transport
              </Typography>
            </CardContent>
          </Card>
        </div>
    </div>
  )
}

export default UserPanelStatistic
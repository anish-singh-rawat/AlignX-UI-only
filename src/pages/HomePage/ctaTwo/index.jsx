import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CtaTwo = () => {
  const handleClick = () => {
    fetch("http://52.15.155.31:8000/api/FetchChatAssessments")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Box>
      <Box mx="auto" maxWidth={"1250px"} px={2}>
        <Box bgcolor="#fff" overflow="hidden" borderRadius="12px" mx={1} my={2}>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "center", md: "space-between" }}
            alignItems="center"
            width="100%"
            minWidth={"343px"}
            gap={5}
          >
            <Box
              display="flex"
              flexDirection="column"
              width="100%"
              gap={3}
              order={{ xs: "1", md: "0" }}
              paddingBottom={{ xs: "68px", md: "0px" }}
              margin={{ xs: "0px 20px", md: "0px 0px" }}
            >
              <Typography
                variant="h2"
                color={"#000"}
                fontWeight={"700"}
                fontFamily={"Urbanist"}
                fontSize={{ xs: "29px", md: "44px" }}
                textAlign={{ xs: "center", md: "start" }}
              >
                Explore Our AI Capabilities - <br />
                Try our sample APIs now!
              </Typography>
              {/* <Typography
                fontWeight={"400"}
                fontFamily={"DM Sans"}
                variant="body1"
                style={{
                  color: "#000",
                  width: "100%",
                }}
                textAlign={{ xs: "center", md: "start" }}
              >
                Our SaaS template is the key to unlocking your full
                potential.Don't miss out – try it now and experience the
                difference!
              </Typography> */}
              <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                gap={3}
                margin={{ xs: "0px 15px", md: "0px 0px" }}
              >
                <Box display="flex" justifyContent={"center"}>
                  <Link to="http://52.15.155.31:8000/docs#/" target="_blank">
                    <Button
                      variant="contained"
                      onClick={handleClick}
                      sx={{
                        backgroundColor: "#155EEF",
                        display: "flex",
                        alignItems: "center",
                        width: { xs: "303px", md: "auto" },
                        ":hover": { backgroundColor: "#3876f2" },
                      }}
                    >
                      Try Here
                      <img
                        src="images/img_ic_arrow_right_white_a700.svg"
                        alt="ic_arrow right"
                        style={{ height: "14px", width: "14px" }}
                      />
                    </Button>
                  </Link>
                </Box>

                <Box display="flex" justifyContent={"center"}>
                  <Button
                    variant="text"
                    sx={{
                      backgroundColor: "#EFF4FF",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      width: { xs: "303px", md: "auto" },
                      ":hover": { backgroundColor: "#D1E0FF" },
                    }}
                  >
                    Contact Sales
                    <img
                      src="images/img_ic_arrow_right_white_a700.svg"
                      alt="ic_arrow right"
                      style={{ height: "14px", width: "14px" }}
                    />
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box order={{ xs: "0", md: "1" }}>
              <img
                src="images/img_mask_group.png"
                alt="image"
                style={{ maxWidth: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CtaTwo;

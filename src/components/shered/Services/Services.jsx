import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import serviceImage from "../../../assets/images/services.svg";
import Title from "../../ui/Title/Title";

const Services = () => {
  return (
    <section
      id="services"
      style={{ paddingBottom: "50px", background: "#eef2f6" }}
    >
      <Title title={"Services"} backgroundText={"Services"} />
      <Container>
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={5}
        >
          <p className="font-popins text-3xl">
            A streamlined list of the core software development services offered
          </p>
        </Stack>
        <Grid container gap={1} justifyContent={"center"} alignItems={"center"}>
          <Grid items xs={12} md={6}>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {/* <Stack
                width={{ xs: "100%", md: "500px" }}
                height={{ xs: "300px", md: "500px" }}
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  borderRight: "5px solid #43A047",
                  borderBottom: "5px solid #43A047",
                }}
                borderRadius={5}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                p={10}
              >
                <img src={serviceImage} style={{ width: "350px" }} />
              </Stack> */}
              <img src={serviceImage} style={{ width: "450px" }} />
            </Stack>
          </Grid>
          <Grid items xs={12} md={5}>
            <Stack direction={"column"} spacing={4}>
              <Box
                width={"100%"}
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  transition: "all linear 0.3s",
                }}
                borderRadius={5}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                p={5}
                sx={{
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Box>
                  <Typography
                    component={"p"}
                    fontSize={{ xs: "18px", md: "22px" }}
                    style={{ fontWeight: "600", color: "#43A047" }}
                  >
                    Web Development
                  </Typography>
                  <div style={{ fontSize: "16px" }}>
                    (Custom websites and applications)
                  </div>
                </Box>
              </Box>

              <Box
                width={"100%"}
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  transition: "all linear 0.3s",
                }}
                borderRadius={5}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                p={5}
                sx={{
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Typography
                  component={"p"}
                  fontSize={{ xs: "18px", md: "22px" }}
                >
                  <div style={{ fontWeight: "600", color: "#43A047" }}>
                    Mobile App Development
                  </div>
                  <div style={{ fontSize: "16px" }}>
                    (Native and cross-platform mobile apps)
                  </div>
                </Typography>
              </Box>

              <Box
                width={"100%"}
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  transition: "all linear 0.3s",
                }}
                borderRadius={5}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                p={5}
                sx={{
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Typography
                  component={"p"}
                  fontSize={{ xs: "18px", md: "22px" }}
                >
                  <div style={{ fontWeight: "600", color: "#43A047" }}>
                    Enterprise Software Solutions
                  </div>
                  <div style={{ fontSize: "16px" }}>
                    (Scalable software for large organizations)
                  </div>
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          my={5}
        >
          <Button
            sx={{ px: 5, py: 1, textTransform: "capitalize" }}
            size="large"
          >
            Learn More
          </Button>
        </Stack>
      </Container>
    </section>
  );
};

export default Services;

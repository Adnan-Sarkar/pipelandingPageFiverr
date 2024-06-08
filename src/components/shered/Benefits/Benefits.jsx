import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import benefits1 from "../../../assets/images/benefits-1.png";
import benefits2 from "../../../assets/images/benefits-2.png";
import benefits3 from "../../../assets/images/benefits-3.png";
import benefits4 from "../../../assets/images/benefits-4.png";
import benefits5 from "../../../assets/images/benefits-5.png";
import Title from "../../ui/Title/Title";

const Benefits = () => {
  return (
    <section style={{ paddingBottom: "50px" }}>
      <Title title={"Benefits"} backgroundText={"Benefits"} />
      <Container>
        <Grid
          container
          columnSpacing={5}
          justifyContent={"center"}
          rowSpacing={10}
        >
          {/* benefit 1 */}
          <Grid item xs={12} md={4}>
            <Stack direction={"row"} gap={3}>
              <Box width={"70px"}>
                <img src={benefits1} alt="icon" style={{ width: "70px" }} />
              </Box>
              <Box>
                <Typography variant="h6" color={"#F9A825"}>
                  Effortless Efficiency
                </Typography>
                <Typography component={"p"}>
                  We streamline your operations with custom software designed to
                  fit your unique business needs.
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* benefit 2 */}
          <Grid item xs={12} md={4}>
            <Stack direction={"row"} gap={3}>
              <Box width={"70px"}>
                <img src={benefits2} alt="icon" style={{ width: "70px" }} />
              </Box>
              <Box>
                <Typography variant="h6" color={"#F9A825"}>
                  Expert Craftsmanship
                </Typography>
                <Typography component={"p"}>
                  Our experienced developers leverage their proven track record
                  to craft reliable and scalable solutions.
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* benefit 3 */}
          <Grid item xs={12} md={4}>
            <Stack direction={"row"} gap={3}>
              <Box width={"70px"}>
                <img src={benefits3} alt="icon" style={{ width: "70px" }} />
              </Box>
              <Box>
                <Typography variant="h6" color={"#F9A825"}>
                  On Time, On Budget
                </Typography>
                <Typography component={"p"}>
                  We prioritize efficient development processes to deliver your
                  software solutions within your timeframe and budget.
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* benefit 4 */}
          <Grid item xs={12} md={4}>
            <Stack direction={"row"} gap={3}>
              <Box width={"70px"}>
                <img src={benefits4} alt="icon" style={{ width: "70px" }} />
              </Box>
              <Box>
                <Typography variant="h6" color={"#F9A825"}>
                  On Time, On Budget
                </Typography>
                <Typography component={"p"}>
                  Our software is built to scale, adapting and expanding
                  alongside your growing business.
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* benefit 5 */}
          <Grid item xs={12} md={4}>
            <Stack direction={"row"} gap={3}>
              <Box width={"70px"}>
                <img src={benefits5} alt="icon" style={{ width: "70px" }} />
              </Box>
              <Box>
                <Typography variant="h6" color={"#F9A825"}>
                  Seamless Support
                </Typography>
                <Typography component={"p"}>
                  We offer ongoing support and maintenance to ensure your
                  software runs smoothly, maximizing its value.
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Benefits;

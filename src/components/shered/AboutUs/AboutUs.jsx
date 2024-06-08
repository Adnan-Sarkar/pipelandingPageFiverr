import { Box, Container, Grid, Stack } from "@mui/material";
import AboutImg from "../../../assets/images/hero_bg.jpg";
import Title from "../../ui/Title/Title";

const AboutUs = () => {
  return (
    <>
      <section id="aboutUs" className="pb-[50px]">
        <Title title={"About Us"} backgroundText={"About Us"} />
        <div className="lg:my-[60px]"></div>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box width={"100%"} className="lg:relative">
                  <div className="lg:absolute lg:top-[-0.75rem] lg:left-[-0.75rem] xl:top-[-2.75rem] xl:left-[-2.75rem] lg:w-[470px] lg:h-[275px] xl:w-[575px] xl:h-[340px]  lg:bg-[#20C997] lg:z-[-1]"></div>
                  <img src={AboutImg} className="w-full" />
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                textAlign={"start"}
                spacing={4}
              >
                <div className="p-2">
                  <h4 className="text-4xl font-semibold text-[#F9A825]">
                    Our Mission
                  </h4>
                  <p className="text-lg mt-5">
                    Pipe Tek is dedicated to empowering Nigerian businesses
                    through custom software solutions that drive innovation and
                    growth.
                  </p>
                </div>
                <div className="p-2">
                  <h4 className="text-4xl font-semibold text-[#43A047]">
                    Our Team
                  </h4>
                  <p className="text-lg mt-5">
                    Our team of passionate and experienced developers is
                    committed to excellence, combining their expertise to
                    deliver exceptional results for our clients.
                  </p>
                </div>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;

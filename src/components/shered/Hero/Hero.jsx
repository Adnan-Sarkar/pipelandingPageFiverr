import { Button, Container, Stack, Typography } from "@mui/material";
import heroBgImage from "../../../assets/images/hero_bg.jpg";

const Hero = () => {
  return (
    <>
      <section
        className="hero-bg-overlay"
        style={{
          backgroundImage: `url(${heroBgImage})`,
        }}
      >
        <Container>
          <Stack
            sx={{ position: "relative", zIndex: 2 }}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={4}
          >
            <Typography
              width={{ xs: "95%", md: "100%" }}
              variant="h1"
              fontSize={{ xs: "30px", md: "55px" }}
              textAlign={"center"}
              lineHeight={1.5}
              color={"#dcdde1"}
              fontWeight={700}
            >
              Pipe Tek: Your Pipeline to Powerful Software Solutions
            </Typography>

            <Typography
              width={{ xs: "95%", md: "100%" }}
              variant="h2"
              fontSize={{ xs: "18px", md: "25px" }}
              textAlign={"center"}
              lineHeight={1.5}
              color={"#dcdde1"}
            >
              Pipe Tek is your trusted partner in Nigeria, delivering efficient
              and innovative custom software solutions that empower your
              business to achieve its full potential.
            </Typography>
            <Button
              sx={{
                px: 8,
                py: 2,
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Container>
      </section>
    </>
  );
};

export default Hero;

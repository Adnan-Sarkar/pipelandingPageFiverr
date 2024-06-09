import Title from "../../ui/Title/Title";
import { Container, Grid, Stack, Typography } from "@mui/material";

const WhyChoose = () => {
  return (
    <>
      <section className="pb-[50px] bg-[#F9A825]">
        <Title title={"Why Choose Pipe Tek"} />
        <Container>
          <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={3}
          >
            <Typography fontWeight={600} fontSize={{ xs: 20, md: 30 }}>
              Pipeline to Success
            </Typography>
            <Typography fontWeight={400} fontSize={20} textAlign={"center"}>
              At Pipe Tek, we believe in a streamlined approach. Imagine your
              software development as a smooth-flowing pipeline - efficient,
              reliable, and delivering the results you need to achieve your
              goals.
            </Typography>
          </Stack>
          <Grid container my={5} columnGap={2} justifyContent={"center"}>
            <Grid item xs={12} md={3}>
              <div className="w-full mx-auto rounded-lg bg-[#20C997] border p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=1" alt="avatar" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-md uppercase text-[#111]">
                      John Doe
                    </h6>
                  </div>
                </div>
                <div className="w-full min-h-[140px]">
                  <p className="text-sm leading-tight">
                    <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                      &quot;
                    </span>
                    Pipe Tek truly transformed our business with their custom
                    software solutions. Their dedication, expertise, and timely
                    delivery exceeded our expectations. Highly recommended!
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      &quot;
                    </span>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="w-full mx-auto rounded-lg bg-[#20C997] border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=1" alt="avatar" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-md uppercase text-[#111]">
                      Jane Smith
                    </h6>
                  </div>
                </div>
                <div className="w-full min-h-[140px]">
                  <p className="text-sm leading-tight">
                    <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                      &quot;
                    </span>
                    Working with Pipe Tek was a game-changer for us. Their
                    team&apos;s professionalism and attention to detail ensured
                    a seamless development process, resulting in a software
                    solution that perfectly met our needs.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      &quot;
                    </span>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="w-full mx-auto rounded-lg bg-[#20C997] border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border">
                    <img src="https://i.pravatar.cc/100?img=1" alt="avatar" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-md uppercase text-[#111]">
                      Michael Johnson
                    </h6>
                  </div>
                </div>
                <div className="w-full min-h-[140px]">
                  <p className="text-sm leading-tight">
                    <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                      &quot;
                    </span>
                    I can&apos;t thank Pipe Tek enough for their outstanding
                    work. From start to finish, they demonstrated a deep
                    understanding of our requirements and delivered a product
                    that has significantly improved our efficiency. We look
                    forward to future collaborations!
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      &quot;
                    </span>
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default WhyChoose;

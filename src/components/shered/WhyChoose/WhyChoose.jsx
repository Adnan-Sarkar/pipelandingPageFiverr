import Title from "../../ui/Title/Title";
import { Container, Grid, Stack, Typography } from "@mui/material";

const WhyChoose = () => {
  return (
    <>
      <section className="pb-[50px]">
        <Title title={"Why Choose Pipe Tek"} backgroundText={"Choose"} />
        <Container>
          <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={3}
          >
            <Typography fontWeight={600} fontSize={30}>
              Pipeline to Success
            </Typography>
            <Typography fontWeight={400} fontSize={20} textAlign={"center"}>
              At Pipe Tek, we believe in a streamlined approach. Imagine your
              software development as a smooth-flowing pipeline - efficient,
              reliable, and delivering the results you need to achieve your
              goals.
            </Typography>
          </Stack>
          <Grid container my={5} gap={4} justifyContent={"center"}>
            <Grid item xs={12} md={3}>
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=1" alt="avatar" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-md uppercase text-[#F9A825]">
                      Kenzie Edgar.
                    </h6>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm leading-tight">
                    <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                      &quot;
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sunt ratione dolor exercitationem minima quas itaque
                    saepe quasi architecto vel! Accusantium, vero sint
                    recusandae cum tempora nemo commodi soluta deleniti.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      &quot;
                    </span>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=1" alt="avatar" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-md uppercase text-[#F9A825]">
                      Kenzie Edgar.
                    </h6>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm leading-tight">
                    <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                      &quot;
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sunt ratione dolor exercitationem minima quas itaque
                    saepe quasi architecto vel! Accusantium, vero sint
                    recusandae cum tempora nemo commodi soluta deleniti.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      &quot;
                    </span>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=1" alt="avatar" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-md uppercase text-[#F9A825]">
                      Kenzie Edgar.
                    </h6>
                  </div>
                </div>
                <div className="">
                  <p className="text-sm leading-tight">
                    <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                      &quot;
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sunt ratione dolor exercitationem minima quas itaque
                    saepe quasi architecto vel! Accusantium, vero sint
                    recusandae cum tempora nemo commodi soluta deleniti.
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

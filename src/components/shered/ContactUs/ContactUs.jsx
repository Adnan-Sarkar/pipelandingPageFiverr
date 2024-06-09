import { Container } from "@mui/material";
import Title from "../../ui/Title/Title";

const ContactUs = () => {
  return (
    <>
      <section className="lg:pb-[50px]">
        <Title title={"Contact Us"} />

        <Container>
          <div className="lg:mb-32">
            <div className="flex justify-center">
              <div className="text-center md:max-w-xl lg:max-w-3xl"></div>
            </div>

            <div className="flex justify-center items-center">
              <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                <div className="mb-3 w-full">
                  <label
                    className="block font-medium mb-[2px] text-teal-700"
                    htmlFor="exampleInput90"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="px-2 py-2 border w-full outline-none rounded-md"
                    id="exampleInput90"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div className="mb-3 w-full">
                  <label
                    className="block font-medium mb-[2px] text-teal-700"
                    htmlFor="exampleInput90"
                  >
                    Phone
                  </label>
                  <input
                    type="email"
                    className="px-2 py-2 border w-full outline-none rounded-md"
                    id="exampleInput90"
                    placeholder="Enter Your Phone"
                  />
                </div>

                <div className="mb-3 w-full">
                  <label
                    className="block font-medium mb-[2px] text-teal-700"
                    htmlFor="exampleInput90"
                  >
                    Social Media Links
                  </label>
                  <input
                    type="phone"
                    className="px-2 py-2 border w-full outline-none rounded-md"
                    id="exampleInput90"
                    placeholder="Enter Your Social Media Links"
                  />
                </div>

                <button
                  type="button"
                  className="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;

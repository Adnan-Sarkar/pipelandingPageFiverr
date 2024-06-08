import { Container } from "@mui/material";
import Title from "../../ui/Title/Title";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React from "react";

// eslint-disable-next-line react/prop-types
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const FAQ = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section id="aboutUs" className="pb-[50px]">
      <Title title={"FAQs"} backgroundText={"FAQs"} />
      <Container>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            1. What services does Pipe Tek offer?
          </AccordionHeader>
          <AccordionBody>
            Pipe Tek offers a range of software development services including
            web development for custom websites and applications, mobile app
            development for native and cross-platform mobile apps, and
            enterprise software solutions tailored for large organizations.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            2. How does Pipe Tek ensure project success?
          </AccordionHeader>
          <AccordionBody>
            Pipe Tek ensures project success through its streamlined approach,
            treating software development like a smooth-flowing pipeline. With a
            focus on efficiency, reliability, and delivering results, Pipe Tek
            prioritizes client goals and utilizes experienced developers to
            craft innovative solutions.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            3. What sets Pipe Tek apart from other software development
            companies?
          </AccordionHeader>
          <AccordionBody>
            Pipe Tek stands out due to its commitment to delivering efficient
            and innovative custom software solutions tailored to each
            client&apos;s unique business needs. With a dedication to expert
            craftsmanship, on-time delivery, and scalable growth-oriented
            solutions, Pipe Tek ensures client satisfaction and ongoing support
            to maximize software value.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            4. How can I get in touch with Pipe Tek?
          </AccordionHeader>
          <AccordionBody>
            Getting in touch with Pipe Tek is easy! You can fill out the contact
            form on our website, send us an email, give us a call, or connect
            with us through our social media channels. We&apos;re here to answer
            any questions and discuss how we can help empower your business
            through powerful software solutions.
          </AccordionBody>
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;

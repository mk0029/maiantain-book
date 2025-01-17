import Cta from "../custom-ui/Cta";
import Heading from "../custom-ui/Heading";
import Paragraph from "../custom-ui/Paragraph";
import ParentCard from "./ParentCard";

const GetStarted = () => {
  return (
    <>
      <ParentCard>
        {" "}
        <div>
          <Heading>Get Started</Heading>
          <Paragraph maxSize={14} className="pt-2.5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.
          </Paragraph>
          <div className="flex flex-col gap-3 mt-6">
            <Cta href="/auth/login">Log In</Cta>
            <Cta href="/auth/sign-up" variant="outline">
              Sign Up
            </Cta>
          </div>
        </div>
      </ParentCard>
    </>
  );
};

export default GetStarted;

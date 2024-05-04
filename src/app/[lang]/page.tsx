import { Trans } from "@lingui/macro";
import Switcher from "~/components/Switcher/Switcher";

const HomePage = () => {
  return (
    <>
      <h1 className="w-full my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full text-center md:text-left">
        <Trans>Welcome on the integration of linguijs using RSC with Nextjs 14.1.0 </Trans>
      </h1>
      <Switcher />
    </>
  );
};

export default HomePage;

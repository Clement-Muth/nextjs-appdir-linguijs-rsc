import { Trans } from "@lingui/macro";
import Vercel from "~/components/Icons/Vercel";
import Link from "~/components/Link/Link";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 w-full justify-center items-center p-6">
      <div>
        <p className="text-sm text-default-400">© 2024 Clément Muth</p>
      </div>
      <Link
        className="relative tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity flex justify-end items-center gap-2 text-foreground"
        href="https://www.vercel.com?utm_source=clement-muth&amp;utm_marketing=oss"
        isExternal
      >
        <p className="font-normal">
          <Trans>Deployed on</Trans>
        </p>
        <Vercel />
      </Link>
    </footer>
  );
};

export default Footer;

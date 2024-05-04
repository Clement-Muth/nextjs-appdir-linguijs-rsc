import { Trans } from "@lingui/macro";
import type { ReactNode } from "react";
import AppWithTranslation from "~/core/AppWithTranslation";
import { type AVAILABLE_LOCALES, locales } from "~/core/locale";
import { loadCatalog } from "~/translations/i18n";
import "~/app/[lang]/globals.css";
import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

interface LayoutProps {
  children: ReactNode;
  params: { lang: AVAILABLE_LOCALES };
}

const RootLayout = async ({ children, params }: LayoutProps) => {
  const messages = loadCatalog(params.lang);

  return (
    <html lang={params?.lang}>
      <body className="bg-gradient-to-br from-transparent from-70% to-blue-100">
        <AppWithTranslation locale={params.lang} messages={messages}>
          <Header />
          <div className="flex flex-col justify-center items-center h-dvh">
            <main className="flex flex-col gap-4 max-w-2xl items-center">
              <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
                <Trans>Hello everyone!</Trans>
              </h1>
              {children}
            </main>
          </div>
          <Footer />
        </AppWithTranslation>
      </body>
    </html>
  );
};

export default RootLayout;

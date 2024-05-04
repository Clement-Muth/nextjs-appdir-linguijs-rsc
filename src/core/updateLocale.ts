"use server";

import { cookies } from "next/headers";
import type { AVAILABLE_LOCALES } from "~/core/locale";

const updateLocale = async (value: AVAILABLE_LOCALES) => {
  cookies().set({ name: "lang", value: value, httpOnly: true, path: "/" });
};

export default updateLocale;

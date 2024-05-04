"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { useRouter } from "next/navigation";
import updateLocale from "~/core/updateLocale";

const Switcher = () => {
  const { replace } = useRouter();
  const locales = [
    { value: "fr", id: "fr" },
    { value: "en", id: "en" }
  ];

  return (
    <Select
      items={locales}
      onSelectionChange={async (v) => {
        await updateLocale((v as any).currentKey);
        replace((v as any).currentKey);
      }}
      label="Locale"
      color="primary"
      placeholder="Choose your locale"
      className="max-w-xl w-full"
    >
      {(locale) => (
        <SelectItem value={locale.id} key={locale.id} color="primary">
          {locale.value}
        </SelectItem>
      )}
    </Select>
  );
};

export default Switcher;

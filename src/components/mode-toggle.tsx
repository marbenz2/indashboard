import { useTheme } from "./theme-provider";
import { Select, SelectItem } from "@tremor/react";
import { RiMoonLine, RiSettingsLine, RiSunLine } from "@remixicon/react";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <Select className="w-fit" id="theme" name="theme" placeholder="Theme">
      <SelectItem onClick={() => setTheme("light")} value="1" icon={RiSunLine}>
        Light
      </SelectItem>
      <SelectItem onClick={() => setTheme("dark")} value="2" icon={RiMoonLine}>
        Dark
      </SelectItem>
      <SelectItem
        onClick={() => setTheme("system")}
        value="3"
        icon={RiSettingsLine}
      >
        System
      </SelectItem>
    </Select>
  );
}

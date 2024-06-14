import { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { RiMoonLine, RiSunLine } from "@remixicon/react";
import { Button } from "@tremor/react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setSystemTheme(systemTheme);
    }
    setSystemTheme(null);
  }, [theme]);

  return (
    <>
      <Button
        size="xs"
        color="orange"
        variant="secondary"
        onClick={() => {
          if (theme === "system") {
            setTheme(systemTheme === "dark" ? "light" : "dark");
          } else {
            setTheme(theme === "dark" ? "light" : "dark");
          }
        }}
      >
        {theme === "system" ? (
          systemTheme === "dark" ? (
            <RiMoonLine size={24} />
          ) : (
            <RiSunLine size={24} />
          )
        ) : theme === "dark" ? (
          <RiMoonLine size={24} />
        ) : (
          <RiSunLine size={24} />
        )}
      </Button>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { Switch, useSwitch, SwitchProps } from "@nextui-org/switch";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { MoonIcon } from "./moonIcon";
import { SunIcon } from "./sunIcon";
import { useTheme } from "next-themes";
import clsx from "clsx";

interface CustomSwitchProps extends SwitchProps {
  className?: string;
}

const ThemeSwitch: React.FC<CustomSwitchProps> = (props) => {
  const { Component, slots, isSelected, getBaseProps, getInputProps, getWrapperProps } = useSwitch(props);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isLight = theme === "light";

  const onChange = () => {
    setTheme(isLight ? "dark" : "light");
  };

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input
            {...getInputProps()}
            checked={!isLight}
            onChange={onChange}
          />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: clsx(
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200"
            ),
          })}
        >
          {isLight ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
    </div>
  );
};

export default function App() {
  return <ThemeSwitch />;
}

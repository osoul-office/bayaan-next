"use client";

import { Toaster as SonnerToaster, ToasterProps } from "sonner";
import {
  LuCircleCheck,
  LuInfo,
  LuTriangleAlert,
  LuCircleAlert,
} from "react-icons/lu";
import { useUIContext } from "@/providers";
import { Loader } from "@/components/ui";

export const Toaster = ({
  id,
  position,
  swipeDirections,
  visibleToasts,
}: Pick<
  ToasterProps,
  "id" | "position" | "swipeDirections" | "visibleToasts"
>) => {
  const { isDark } = useUIContext();
  return (
    <SonnerToaster
      id={id}
      position={position}
      swipeDirections={swipeDirections}
      visibleToasts={visibleToasts}
      icons={{
        success: <LuCircleCheck />,
        info: <LuInfo />,
        error: <LuTriangleAlert />,
        warning: <LuCircleAlert />,
        loading: <Loader size="small" showWrapper={false} />,
      }}
      theme={isDark ? "dark" : "light"}
      richColors
      closeButton
    />
  );
};

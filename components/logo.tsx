"use client";

import Image from "next/image";
import type * as React from "react";
import { cn } from "@/lib/utils";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md", ...props }: LogoProps) {
  const sizeStyles = {
    sm: { width: 100, height: 26, className: "h-6 w-auto" },
    md: { width: 125, height: 32, className: "h-8 w-auto" },
    lg: { width: 155, height: 40, className: "h-10 w-auto" },
  };

  const selected = sizeStyles[size];

  return (
    <div
      className={cn(
        "inline-flex items-center select-none relative shrink-0",
        className,
      )}
      {...props}
    >
      {/* Light theme logo from public/main lgo.png */}
      <Image
        src="/main lgo.png"
        alt="Scalvio"
        width={selected.width}
        height={selected.height}
        priority
        className={cn(selected.className, "object-contain block dark:hidden")}
      />

      {/* Dark theme logo from public/main logo dark.png */}
      <Image
        src="/main logo dark.png"
        alt="Scalvio"
        width={selected.width}
        height={selected.height}
        priority
        className={cn(selected.className, "object-contain hidden dark:block")}
      />
    </div>
  );
}

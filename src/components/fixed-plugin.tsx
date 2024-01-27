"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { PaperClipIcon } from "@heroicons/react/24/solid";

export function FixedPlugin() {
  return (
    <a href="/assets/mahmudul_haque.pdf" target="_blank" download>
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50" placeholder={undefined}      >
        Download Resume
      </Button>
    </a>
  );
}

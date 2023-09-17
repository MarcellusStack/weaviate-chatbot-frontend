import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

const types = [
  {
    name: "DRK-GPT-1",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
        className="text-green-600 w-4 h-4"
      >
        <path
          d="M9.586 1.526A.6.6 0 0 0 8.553 1l-6.8 7.6a.6.6 0 0 0 .447 1h5.258l-1.044 4.874A.6.6 0 0 0 7.447 15l6.8-7.6a.6.6 0 0 0-.447-1H8.542l1.044-4.874Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    href: "?answer=single",
    disabled: false,
  },
  {
    name: "DRK-GPT-5",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
        className="text-purple-600 w-4 h-4"
      >
        <path
          d="M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
    href: "?answer=multi",
    disabled: true,
  },
];

const ChooseAnswerType = () => {
  return (
    <Tabs defaultValue="DRK-GPT-1" className="w-full">
      <TabsList className="grid max-w-[300px] grid-cols-2 mx-auto sticky top-0 left-0">
        {types.map((type) => (
          <TabsTrigger
            disabled={type.disabled}
            key={type.name}
            value={type.name}
            asChild
            className={`cursor-pointer ${
              type.disabled && "pointer-events-none cursor-not-allowed"
            }}`}
          >
            <Link
              href={type.href}
              className="flex flex-row items-center gap-2 w-full h-full justify-center disabled"
            >
              {type.icon}
              {type.name}
              {type.disabled && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=" text-gray-500 w-4 h-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              )}
            </Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default ChooseAnswerType;

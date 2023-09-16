import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { IconCopy, IconCheck } from "@tabler/icons-react";

type CopyButtonProps = {
  text: string;
};

const CopyButton = ({ text }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      }}
      className="w-8 h-8 shrink-0 self-right"
      variant="secondary"
    >
      {copied ? (
        <IconCheck className="w-4 h-4 shrink-0" />
      ) : (
        <IconCopy className="w-4 h-4 shrink-0" />
      )}
    </Button>
  );
};

export default CopyButton;

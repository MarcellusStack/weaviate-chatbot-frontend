"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import axios from "axios";
import Typewriter from "@/components/typewriter";
import { IconTrash } from "@tabler/icons-react";
import CopyButton from "@/components/copy-button";

const formSchema = z.object({
  question: z.string().min(1, {
    message: "Eine Nachricht muss mindestens 1 Zeichen lang sein",
  }),
});

const btnContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const btnItem = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 200,
    },
  },
};

const questionExamples = [
  {
    question: "Wo finde ich die Telefonlisten",
  },
  {
    question: "Mein Passwort funktioniert nicht mehr",
  },
  {
    question: "Ich benötige einen neuen Laptop",
  },
  {
    question: "Ich habe eine seltsame E-Mail erhalten",
  },
];

type ChatMessage = {
  question: string;
  answer: string;
  newAnswer: boolean;
};

const Chat = () => {
  const searchParams = useSearchParams();
  const answerType = searchParams.get("answer");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { data, status } = await axios.post("/ask", {
      question: values.question,
      answerType: answerType,
      new: true,
    });

    if (status === 200) {
      setMessages((messages) => [...messages, data.data]);
      form.reset();
    }
  }

  useEffect(() => {
    // Load data from local storage when the component mounts
    const savedMessages: ChatMessage[] = JSON.parse(
      localStorage.getItem("messages")
    );
    if (savedMessages) {
      const updatedMessages = savedMessages.map((message) => ({
        ...message,
        newAnswer: false,
      }));
      setMessages(updatedMessages);
    }
  }, []);

  useEffect(() => {
    // Save data to local storage whenever it changes
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  return (
    <>
      {messages.length === 0 && (
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-red-200 mt-20 text-center">
          DRK-GPT
        </h1>
      )}
      {messages.length > 0 && (
        <div className="flex flex-col w-full">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="icon" variant="outline" className="self-end mb-4">
                <IconTrash className="w-6 h-6 text-red-600" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Sind sie sich sicher?</AlertDialogTitle>
                <AlertDialogDescription>
                  Diese Aktion kann nicht rückgängig gemacht werden. Dies wird
                  Ihren Chat löschen.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Abbrechen</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    setMessages([]);
                  }}
                >
                  Bestätigen
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          {messages.map((message, index) => (
            <div key={index} className="flex flex-col w-full gap-4">
              <div className="flex flex-row items-start w-full border-t border-border pt-4 gap-4">
                <div className="rounded-sm bg-primary h-10 w-10 shrink-0"></div>
                <p className="w-full text-black">{message.question}</p>
              </div>
              <div className="flex flex-row items-start w-full border-t border-border py-4 gap-4">
                <div className="rounded-sm bg-green-600 h-10 w-10 shrink-0"></div>

                {message.newAnswer ? (
                  <Typewriter text={message.answer} />
                ) : (
                  <p className="leading-7 [&:not(:first-child)]:mt-6">
                    {message.answer}
                  </p>
                )}
                <CopyButton text={message.answer} />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-col gap-4 w-full">
        <motion.ul
          variants={btnContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-2 w-full gap-4"
        >
          {messages.length === 0 &&
            questionExamples.map((question) => (
              <motion.li key={question.question} variants={btnItem}>
                <Button
                  onClick={() => {
                    onSubmit({
                      question: question.question,
                      answerType: answerType,
                    });
                  }}
                  size="sm"
                  variant="outline"
                  className="w-full"
                >
                  {question.question}
                </Button>
              </motion.li>
            ))}
        </motion.ul>
        <Card className="w-full sticky bottom-6 left-0">
          <CardContent className="p-3">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-row items-center h-full w-full gap-2"
              >
                <FormField
                  control={form.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Textarea
                          rows={1}
                          className="w-full border-0 resize-none min-h-10 focus-visible:ring-offset-0 focus-visible:ring-0 ring-transparent overflow-y-hidden"
                          placeholder="Eine Nachricht senden"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="shrink-0"
                  type="submit"
                  size="icon"
                  disabled={
                    form.formState.isSubmitting ||
                    form.getValues("question") === ""
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-4 h-4"
                  >
                    <path
                      d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Chat;

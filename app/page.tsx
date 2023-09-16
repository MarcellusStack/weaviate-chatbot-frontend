import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-red-200 mt-20 text-center">
        DRK-GPT
      </h1>
      <Link
        href="/chat?answer=single"
        className={buttonVariants({
          variant: "default",
          className: "self-end text-white",
        })}
      >
        Zum Chatbot
      </Link>
      <div className="flex flex-col gap-4">
        <h2 className="scroll-m-20 border-b text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Funktionsweise:
        </h2>
        <p className="leading-7">
          Der Chatbot "DRK-GPT" basiert auf GPT-3.5 einer fortschrittlichen
          KI-Technologie, die natürliche Sprache versteht und generieren kann.
          Der Chatbot interagiert mit Benutzern, indem er auf ihre Fragen und
          Anfragen in natürlicher Sprache antwortet. Dies geschieht durch die
          Eingabe von Text oder Sprache, und der Chatbot analysiert die Eingabe,
          sucht in der Datenbank nach passenden Antworten und generiert dann
          eine passende Antwort und gibt sie an den Benutzer zurück.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="scroll-m-20 border-b text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Wissen:
        </h2>
        <p className="leading-7 ">
          Der Chatbot "DRK-GPT" wurde ausschließlich mit firmeninternen Daten
          trainiert und ist darauf spezialisiert, nur relevante Informationen zu
          diesen internen Themen bereitzustellen. Er beantwortet keine Fragen zu
          unrelevanten Themen wie Hilfe beim Verfassen von E-Mails oder
          Erstellen von Excel-Formeln. Für allgemeine Anfragen und breiteres
          Wissen empfehlen wir die Verwendung der offiziellen ChatGPT-Seite von
          OpenAI:{" "}
          <a href="https://chat.openai.com/" target="_blank">
            https://chat.openai.com/
          </a>
          . Dort kann der Nutzer allgemeine Fragen zu einer Vielzahl von Themen
          stellen und umfassende Informationen erhalten.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="scroll-m-20 border-b  text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Hinweise:
        </h2>
        <ul className=" ml-6 list-disc [&>li]:mt-2">
          <li>
            <span className="font-semibold">
              Vorsicht bei ungenauen Informationen:{" "}
            </span>
            Beachten Sie, dass der Chatbot basierend auf den Daten in seiner
            Vector-Datenbank antwortet. Stellen Sie sicher, dass die
            Informationen, die er bereitstellt, korrekt und aktuell sind. Wenn
            Sie unsicher sind oder eine unklare Antwort erhalten, überprüfen Sie
            die Informationen von anderen Quellen.
          </li>
          <li>
            <span className="font-semibold">Kontext genauer erfragen: </span>
            Falls die Antwort des Chatbots nicht ganz verständlich ist, stellen
            Sie zusätzliche Fragen, um den Kontext zu klären. So können Sie
            sicherstellen, dass Sie die benötigten Informationen in vollem
            Umfang verstehen.
          </li>
          <li>
            <span className="font-semibold">
              Geben Sie nie Passwörter weiter:{" "}
            </span>
            Ein wichtiger Sicherheitshinweis ist, niemals persönliche oder
            vertrauliche Informationen wie Passwörter, Benutzernamen oder
            persönliche Identifikationsdaten an den Chatbot weiterzugeben,
            selbst wenn dieser danach fragt. Ein seriöser Chatbot wird niemals
            solche Informationen verlangen.
          </li>
          <li>
            <span className="font-semibold">Datenschutz beachten: </span>
            Achten Sie darauf, keine sensiblen oder vertraulichen Daten zu
            teilen, es sei denn, Sie sind sicher, dass die Kommunikation sicher
            und verschlüsselt ist. Chatbots sollten nicht für die Übertragung
            vertraulicher Daten verwendet werden.
          </li>
          <li>
            <span className="font-semibold">Missbrauch verhindern: </span>
            Missbrauch verhindern: Verwenden Sie den Chatbot nicht, um Spam,
            beleidigende oder unangemessene Inhalte zu verbreiten. Diese Art von
            Verhalten ist nicht akzeptabel und kann rechtliche Konsequenzen
            haben.
          </li>
          <li>
            <span className="font-semibold">Feedback geben: </span>
            Falls der Chatbot eine falsche oder unzureichende Antwort liefert
            oder Verbesserungen benötigt, geben Sie Feedback. Dies kann dazu
            beitragen, die Qualität des Chatbots zu erhöhen.
          </li>
        </ul>
      </div>
    </div>
  );
}

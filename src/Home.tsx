import { EmailList } from "./components/email-list/EmailList";
import { EmailTemplate } from "./components/email-template/EmailTemplate";

export function Home() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr .6fr",
        padding: "1.5rem",
      }}
    >
      <EmailTemplate />
      <EmailList />
    </div>
  );
}

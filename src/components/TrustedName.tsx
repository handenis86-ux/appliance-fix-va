import type { TrustedNameSection } from "@/lib/content";

interface TrustedNameProps {
  data?: TrustedNameSection;
}

const defaultData: TrustedNameSection = {
  title: "The Trusted Name For Appliance Repair in Arlington",
  intro:
    "Looking for help getting the most out of your home appliances? From the kitchen to the laundry room, Appliance Fix VA is your one-stop shop for all of your appliance repair needs. Here's how it works:",
  steps: [
    {
      title: "Schedule Your Appliance Repair:",
      description:
        "Call our 24/7 phone line, let us know about your appliance problem and we'll find a technician to help you as soon as possible.",
    },
    {
      title: "Your Appliance Gets Fixed:",
      description:
        "Once your technician arrives, they will diagnose the problem and explain what work needs to be done. If you decide to proceed, your technician will have your appliance fixed before you know it.",
    },
  ],
  outro:
    "Discover the Appliance Fix VA difference today! All you have to do is pick up the phone and call (838) 201-3789. Let us do the rest.",
};

// Render outro text, wrapping a phone number like "(838) 201-3789" in a tel: link.
function renderOutro(outro: string) {
  const phoneRegex = /\(\d{3}\)\s?\d{3}-\d{4}/;
  const match = outro.match(phoneRegex);
  if (!match) return outro;
  const phone = match[0];
  const tel = `tel:+1${phone.replace(/\D/g, "")}`;
  const [before, after] = outro.split(phone);
  return (
    <>
      {before}
      <a href={tel} className="text-blue font-bold">{phone}</a>
      {after}
    </>
  );
}

export default function TrustedName({ data = defaultData }: TrustedNameProps) {
  return (
    <section className="py-14">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="max-w-[780px] mx-auto">
          <h2 className="text-[clamp(1.4rem,3vw,1.8rem)] text-slate-900 mb-1">
            <span className="font-extrabold">Appliance Fix VA:</span>{" "}
            <span className="font-normal">{data.title}</span>
          </h2>
          <p className="text-sm text-slate-500 mt-4 mb-8 leading-[1.75]">
            {data.intro}
          </p>
          {data.steps.map((step, i) => (
            <div
              key={step.title}
              className={`bg-gray-bg rounded-[10px] p-6 sm:p-7 ${
                i === data.steps.length - 1 ? "mb-7" : "mb-4"
              }`}
            >
              <p className="text-sm text-slate-900 leading-[1.75]">
                <strong className="text-blue">{i + 1}.</strong> &nbsp;<strong>{step.title}</strong>
              </p>
              <p className="text-sm text-slate-500 mt-2 ml-5 leading-[1.75]">
                {step.description}
              </p>
            </div>
          ))}
          <p className="text-[15px] text-slate-700 leading-[1.75]">
            {renderOutro(data.outro)}
          </p>
        </div>
      </div>
    </section>
  );
}

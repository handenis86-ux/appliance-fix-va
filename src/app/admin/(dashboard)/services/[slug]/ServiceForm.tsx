"use client";

import type { FaqItem, Service, ServiceFeatureItem } from "@/lib/content";
import FormShell, { Section } from "@/components/admin/forms/FormShell";
import {
  ObjectArrayField,
  StringArrayField,
  TextField,
  TextareaField,
} from "@/components/admin/forms/fields";

interface ServiceFormProps {
  slug: string;
  initial: Service;
}

export default function ServiceForm({ slug, initial }: ServiceFormProps) {
  return (
    <FormShell<Service>
      eyebrow="Service page"
      title={initial.hero.title}
      description={`Editing /content/services/${slug}.json`}
      initialData={initial}
      contentType={`service-${slug}`}
    >
      {({ data, update }) => (
        <>
          <Section title="Hero">
            <TextField
              label="Eyebrow"
              value={data.hero.eyebrow}
              onChange={(v) => update({ hero: { ...data.hero, eyebrow: v } })}
            />
            <TextField
              label="Title"
              value={data.hero.title}
              onChange={(v) => update({ hero: { ...data.hero, title: v } })}
            />
            <TextareaField
              label="Subtitle"
              rows={3}
              value={data.hero.subtitle}
              onChange={(v) => update({ hero: { ...data.hero, subtitle: v } })}
            />
            <TextField
              label="Image path"
              value={data.hero.image}
              onChange={(v) => update({ hero: { ...data.hero, image: v } })}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                label="Primary CTA label"
                value={data.hero.primaryCtaLabel}
                onChange={(v) =>
                  update({ hero: { ...data.hero, primaryCtaLabel: v } })
                }
              />
              <TextField
                label="Primary CTA href"
                value={data.hero.primaryCtaHref}
                onChange={(v) =>
                  update({ hero: { ...data.hero, primaryCtaHref: v } })
                }
              />
              <TextField
                label="Secondary CTA label"
                value={data.hero.secondaryCtaLabel}
                onChange={(v) =>
                  update({ hero: { ...data.hero, secondaryCtaLabel: v } })
                }
              />
              <TextField
                label="Secondary CTA href"
                value={data.hero.secondaryCtaHref}
                onChange={(v) =>
                  update({ hero: { ...data.hero, secondaryCtaHref: v } })
                }
              />
            </div>
          </Section>

          <Section title="What we fix">
            <TextField
              label="Eyebrow"
              value={data.whatWeFix.eyebrow}
              onChange={(v) =>
                update({ whatWeFix: { ...data.whatWeFix, eyebrow: v } })
              }
            />
            <TextField
              label="Title"
              value={data.whatWeFix.title}
              onChange={(v) =>
                update({ whatWeFix: { ...data.whatWeFix, title: v } })
              }
            />
            <TextareaField
              label="Subtitle"
              rows={2}
              value={data.whatWeFix.subtitle}
              onChange={(v) =>
                update({ whatWeFix: { ...data.whatWeFix, subtitle: v } })
              }
            />
            <TextareaField
              label="Intro"
              rows={2}
              value={data.whatWeFix.intro}
              onChange={(v) =>
                update({ whatWeFix: { ...data.whatWeFix, intro: v } })
              }
            />
          </Section>

          <Section title="Problems we fix">
            <StringArrayField
              label="Problems"
              value={data.problems}
              onChange={(v) => update({ problems: v })}
            />
          </Section>

          <Section title="Why choose us (features)">
            <TextField
              label="Eyebrow"
              value={data.features.eyebrow}
              onChange={(v) =>
                update({ features: { ...data.features, eyebrow: v } })
              }
            />
            <TextField
              label="Title"
              value={data.features.title}
              onChange={(v) =>
                update({ features: { ...data.features, title: v } })
              }
            />
            <TextareaField
              label="Subtitle"
              rows={3}
              value={data.features.subtitle}
              onChange={(v) =>
                update({ features: { ...data.features, subtitle: v } })
              }
            />
            <ObjectArrayField<ServiceFeatureItem>
              label="Feature items"
              value={data.features.items}
              emptyItem={() => ({ title: "", description: "" })}
              onChange={(v) =>
                update({ features: { ...data.features, items: v } })
              }
              renderItem={(item, setItem) => (
                <>
                  <TextField
                    label="Title"
                    value={item.title}
                    onChange={(v) => setItem({ title: v })}
                  />
                  <TextareaField
                    label="Description"
                    rows={2}
                    value={item.description}
                    onChange={(v) => setItem({ description: v })}
                  />
                </>
              )}
            />
          </Section>

          <Section title="Appliance types">
            <StringArrayField
              label="Types"
              value={data.types}
              onChange={(v) => update({ types: v })}
            />
          </Section>

          <Section title="Replacement parts">
            <StringArrayField
              label="Parts"
              value={data.parts}
              onChange={(v) => update({ parts: v })}
            />
          </Section>

          <Section title="Brands section">
            <TextField
              label="Title"
              value={data.brandsSection.title}
              onChange={(v) =>
                update({
                  brandsSection: { ...data.brandsSection, title: v },
                })
              }
            />
            <TextField
              label="Subtitle"
              value={data.brandsSection.subtitle}
              onChange={(v) =>
                update({
                  brandsSection: { ...data.brandsSection, subtitle: v },
                })
              }
            />
            <TextareaField
              label="Description"
              rows={3}
              value={data.brandsSection.description}
              onChange={(v) =>
                update({
                  brandsSection: { ...data.brandsSection, description: v },
                })
              }
            />
            <StringArrayField
              label="Brand names"
              value={data.brands}
              onChange={(v) => update({ brands: v })}
            />
          </Section>

          <Section title="FAQ">
            <TextField
              label="Title"
              value={data.faq.title}
              onChange={(v) => update({ faq: { ...data.faq, title: v } })}
            />
            <ObjectArrayField<FaqItem>
              label="FAQ items"
              value={data.faq.items}
              emptyItem={() => ({ q: "", a: "" })}
              onChange={(v) => update({ faq: { ...data.faq, items: v } })}
              renderItem={(item, setItem) => (
                <>
                  <TextField
                    label="Question"
                    value={item.q}
                    onChange={(v) => setItem({ q: v })}
                  />
                  <TextareaField
                    label="Answer"
                    rows={3}
                    value={item.a}
                    onChange={(v) => setItem({ a: v })}
                  />
                </>
              )}
            />
          </Section>

          <Section title="Trusted Name">
            <TextField
              label="Title"
              value={data.trustedName.title}
              onChange={(v) =>
                update({ trustedName: { ...data.trustedName, title: v } })
              }
            />
            <TextareaField
              label="Intro"
              rows={3}
              value={data.trustedName.intro}
              onChange={(v) =>
                update({ trustedName: { ...data.trustedName, intro: v } })
              }
            />
            <ObjectArrayField
              label="Steps"
              value={data.trustedName.steps}
              emptyItem={() => ({ title: "", description: "" })}
              onChange={(v) =>
                update({ trustedName: { ...data.trustedName, steps: v } })
              }
              renderItem={(item, setItem) => (
                <>
                  <TextField
                    label="Step title"
                    value={item.title}
                    onChange={(v) => setItem({ title: v })}
                  />
                  <TextareaField
                    label="Step description"
                    rows={2}
                    value={item.description}
                    onChange={(v) => setItem({ description: v })}
                  />
                </>
              )}
            />
            <TextareaField
              label="Outro"
              rows={2}
              value={data.trustedName.outro}
              onChange={(v) =>
                update({ trustedName: { ...data.trustedName, outro: v } })
              }
            />
          </Section>
        </>
      )}
    </FormShell>
  );
}

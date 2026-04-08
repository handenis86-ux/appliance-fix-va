"use client";

import type { Arlington, StatItem } from "@/lib/content";
import FormShell, { Section } from "@/components/admin/forms/FormShell";
import {
  ObjectArrayField,
  StringArrayField,
  TextField,
  TextareaField,
} from "@/components/admin/forms/fields";

type ServiceCard = { title: string; description: string; href: string };

export default function ArlingtonForm({ initial }: { initial: Arlington }) {
  return (
    <FormShell<Arlington>
      eyebrow="Pages"
      title="Arlington Service Area"
      description="Editing /content/arlington.json"
      initialData={initial}
      contentType="arlington"
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

          <Section title="Services section">
            <TextField
              label="Title"
              value={data.servicesSection.title}
              onChange={(v) =>
                update({
                  servicesSection: { ...data.servicesSection, title: v },
                })
              }
            />
            <TextareaField
              label="Subtitle"
              rows={2}
              value={data.servicesSection.subtitle}
              onChange={(v) =>
                update({
                  servicesSection: { ...data.servicesSection, subtitle: v },
                })
              }
            />
            <ObjectArrayField<ServiceCard>
              label="Service cards"
              value={data.servicesSection.items}
              emptyItem={() => ({ title: "", description: "", href: "" })}
              onChange={(v) =>
                update({
                  servicesSection: { ...data.servicesSection, items: v },
                })
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
                  <TextField
                    label="Href"
                    value={item.href}
                    onChange={(v) => setItem({ href: v })}
                  />
                </>
              )}
            />
          </Section>

          <Section title="Areas section">
            <TextField
              label="Title"
              value={data.areasSection.title}
              onChange={(v) =>
                update({
                  areasSection: { ...data.areasSection, title: v },
                })
              }
            />
            <TextareaField
              label="Description"
              rows={3}
              value={data.areasSection.description}
              onChange={(v) =>
                update({
                  areasSection: { ...data.areasSection, description: v },
                })
              }
            />
            <TextField
              label="Image"
              value={data.areasSection.image}
              onChange={(v) =>
                update({
                  areasSection: { ...data.areasSection, image: v },
                })
              }
            />
            <StringArrayField
              label="Areas"
              value={data.areasSection.areas}
              onChange={(v) =>
                update({
                  areasSection: { ...data.areasSection, areas: v },
                })
              }
            />
          </Section>

          <Section title="Trust stats">
            <TextField
              label="Title"
              value={data.trustStats.title}
              onChange={(v) =>
                update({ trustStats: { ...data.trustStats, title: v } })
              }
            />
            <ObjectArrayField<StatItem>
              label="Stat items"
              value={data.trustStats.items}
              emptyItem={() => ({ value: "", label: "" })}
              onChange={(v) =>
                update({ trustStats: { ...data.trustStats, items: v } })
              }
              renderItem={(item, setItem) => (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <TextField
                    label="Value"
                    value={item.value}
                    onChange={(v) => setItem({ value: v })}
                  />
                  <TextField
                    label="Label"
                    value={item.label}
                    onChange={(v) => setItem({ label: v })}
                  />
                </div>
              )}
            />
          </Section>

          <Section title="CTA banner">
            <TextField
              label="Title"
              value={data.ctaBanner.title}
              onChange={(v) =>
                update({ ctaBanner: { ...data.ctaBanner, title: v } })
              }
            />
            <TextareaField
              label="Subtitle"
              rows={2}
              value={data.ctaBanner.subtitle}
              onChange={(v) =>
                update({ ctaBanner: { ...data.ctaBanner, subtitle: v } })
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                label="Primary CTA label"
                value={data.ctaBanner.primaryCtaLabel}
                onChange={(v) =>
                  update({
                    ctaBanner: { ...data.ctaBanner, primaryCtaLabel: v },
                  })
                }
              />
              <TextField
                label="Primary CTA href"
                value={data.ctaBanner.primaryCtaHref}
                onChange={(v) =>
                  update({
                    ctaBanner: { ...data.ctaBanner, primaryCtaHref: v },
                  })
                }
              />
              <TextField
                label="Secondary CTA label"
                value={data.ctaBanner.secondaryCtaLabel}
                onChange={(v) =>
                  update({
                    ctaBanner: { ...data.ctaBanner, secondaryCtaLabel: v },
                  })
                }
              />
              <TextField
                label="Secondary CTA href"
                value={data.ctaBanner.secondaryCtaHref}
                onChange={(v) =>
                  update({
                    ctaBanner: { ...data.ctaBanner, secondaryCtaHref: v },
                  })
                }
              />
            </div>
          </Section>
        </>
      )}
    </FormShell>
  );
}

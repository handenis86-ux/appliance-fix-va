"use client";

import type {
  FaqItem,
  Home,
  HomeServiceItem,
  HomeWhyItem,
  Review,
  StatItem,
} from "@/lib/content";
import FormShell, { Section } from "@/components/admin/forms/FormShell";
import {
  ObjectArrayField,
  StringArrayField,
  TextField,
  TextareaField,
} from "@/components/admin/forms/fields";

export default function HomeForm({ initial }: { initial: Home }) {
  return (
    <FormShell<Home>
      eyebrow="Pages"
      title="Home Page"
      description="Hero, services, reviews, FAQ and everything that appears on the homepage."
      initialData={initial}
      contentType="home"
    >
      {({ data, update }) => (
        <>
          <Section title="Hero">
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
              help="Path inside /public, e.g. /hero.jpg"
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

          <Section title="Trust strip" description="Badges under the hero.">
            <StringArrayField
              label="Items"
              value={data.trustStrip}
              onChange={(v) => update({ trustStrip: v })}
            />
          </Section>

          <Section title="Services section">
            <TextField
              label="Eyebrow"
              value={data.services.eyebrow}
              onChange={(v) =>
                update({ services: { ...data.services, eyebrow: v } })
              }
            />
            <TextField
              label="Title"
              value={data.services.title}
              onChange={(v) =>
                update({ services: { ...data.services, title: v } })
              }
            />
            <TextareaField
              label="Subtitle"
              rows={2}
              value={data.services.subtitle}
              onChange={(v) =>
                update({ services: { ...data.services, subtitle: v } })
              }
            />
            <ObjectArrayField<HomeServiceItem>
              label="Service cards"
              value={data.services.items}
              emptyItem={() => ({ id: "", title: "", description: "", href: "" })}
              onChange={(v) =>
                update({ services: { ...data.services, items: v } })
              }
              renderItem={(item, setItem) => (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <TextField
                      label="ID"
                      value={item.id}
                      onChange={(v) => setItem({ id: v })}
                    />
                    <TextField
                      label="Title"
                      value={item.title}
                      onChange={(v) => setItem({ title: v })}
                    />
                  </div>
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

          <Section title="Why choose us">
            <TextField
              label="Title"
              value={data.whyChooseUs.title}
              onChange={(v) =>
                update({ whyChooseUs: { ...data.whyChooseUs, title: v } })
              }
            />
            <TextareaField
              label="Subtitle"
              rows={2}
              value={data.whyChooseUs.subtitle}
              onChange={(v) =>
                update({ whyChooseUs: { ...data.whyChooseUs, subtitle: v } })
              }
            />
            <ObjectArrayField<HomeWhyItem>
              label="Items"
              value={data.whyChooseUs.items}
              emptyItem={() => ({
                title: "",
                description: "",
                image: "",
                imagePosition: "right",
              })}
              onChange={(v) =>
                update({ whyChooseUs: { ...data.whyChooseUs, items: v } })
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
                    rows={4}
                    value={item.description}
                    onChange={(v) => setItem({ description: v })}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <TextField
                      label="Image path"
                      value={item.image}
                      onChange={(v) => setItem({ image: v })}
                    />
                    <label className="block">
                      <span className="block text-[12px] font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                        Image position
                      </span>
                      <select
                        value={item.imagePosition}
                        onChange={(e) =>
                          setItem({
                            imagePosition:
                              e.target.value === "left" ? "left" : "right",
                          })
                        }
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-light"
                      >
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                      </select>
                    </label>
                  </div>
                </>
              )}
            />
          </Section>

          <Section title="Reviews">
            <TextField
              label="Title"
              value={data.reviews.title}
              onChange={(v) =>
                update({ reviews: { ...data.reviews, title: v } })
              }
            />
            <TextField
              label="Subtitle"
              value={data.reviews.subtitle}
              onChange={(v) =>
                update({ reviews: { ...data.reviews, subtitle: v } })
              }
            />
            <ObjectArrayField<Review>
              label="Customer reviews"
              value={data.reviews.items}
              emptyItem={() => ({ text: "", author: "", location: "" })}
              onChange={(v) =>
                update({ reviews: { ...data.reviews, items: v } })
              }
              renderItem={(item, setItem) => (
                <>
                  <TextareaField
                    label="Review text"
                    rows={3}
                    value={item.text}
                    onChange={(v) => setItem({ text: v })}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <TextField
                      label="Author"
                      value={item.author}
                      onChange={(v) => setItem({ author: v })}
                    />
                    <TextField
                      label="Location"
                      value={item.location}
                      onChange={(v) => setItem({ location: v })}
                    />
                  </div>
                </>
              )}
            />
          </Section>

          <Section title="Stats">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                label="Headline"
                value={data.stats.headline}
                onChange={(v) =>
                  update({ stats: { ...data.stats, headline: v } })
                }
              />
              <TextField
                label="Headline label"
                value={data.stats.headlineLabel}
                onChange={(v) =>
                  update({ stats: { ...data.stats, headlineLabel: v } })
                }
              />
            </div>
            <ObjectArrayField<StatItem>
              label="Stat items"
              value={data.stats.items}
              emptyItem={() => ({ value: "", label: "" })}
              onChange={(v) => update({ stats: { ...data.stats, items: v } })}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <TextField
                label="CTA title"
                value={data.stats.ctaTitle}
                onChange={(v) =>
                  update({ stats: { ...data.stats, ctaTitle: v } })
                }
              />
              <TextField
                label="CTA label"
                value={data.stats.ctaLabel}
                onChange={(v) =>
                  update({ stats: { ...data.stats, ctaLabel: v } })
                }
              />
              <TextField
                label="CTA href"
                value={data.stats.ctaHref}
                onChange={(v) =>
                  update({ stats: { ...data.stats, ctaHref: v } })
                }
              />
            </div>
          </Section>

          <Section title="Brands">
            <TextField
              label="Title"
              value={data.brands.title}
              onChange={(v) => update({ brands: { ...data.brands, title: v } })}
            />
            <TextField
              label="Subtitle"
              value={data.brands.subtitle}
              onChange={(v) =>
                update({ brands: { ...data.brands, subtitle: v } })
              }
            />
            <TextareaField
              label="Description"
              rows={3}
              value={data.brands.description}
              onChange={(v) =>
                update({ brands: { ...data.brands, description: v } })
              }
            />
            <StringArrayField
              label="Brand names"
              value={data.brands.items}
              onChange={(v) => update({ brands: { ...data.brands, items: v } })}
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

          <Section title="Trusted Name section">
            <TextField
              label="Title"
              value={data.trustedName.title}
              onChange={(v) =>
                update({ trustedName: { ...data.trustedName, title: v } })
              }
            />
            <TextareaField
              label="Intro paragraph"
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

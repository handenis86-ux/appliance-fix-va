"use client";

import type { Blog, BlogCategory } from "@/lib/content";
import FormShell, { Section } from "@/components/admin/forms/FormShell";
import {
  NumberField,
  ObjectArrayField,
  TextField,
  TextareaField,
} from "@/components/admin/forms/fields";

export default function BlogForm({ initial }: { initial: Blog }) {
  return (
    <FormShell<Blog>
      eyebrow="Pages"
      title="Blog"
      description="Blog landing page — categories, hero and section copy."
      initialData={initial}
      contentType="blog"
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
          </Section>

          <Section title="Categories section">
            <TextField
              label="Eyebrow"
              value={data.categoriesSection.eyebrow}
              onChange={(v) =>
                update({
                  categoriesSection: {
                    ...data.categoriesSection,
                    eyebrow: v,
                  },
                })
              }
            />
            <TextField
              label="Title"
              value={data.categoriesSection.title}
              onChange={(v) =>
                update({
                  categoriesSection: {
                    ...data.categoriesSection,
                    title: v,
                  },
                })
              }
            />
            <TextareaField
              label="Subtitle"
              rows={2}
              value={data.categoriesSection.subtitle}
              onChange={(v) =>
                update({
                  categoriesSection: {
                    ...data.categoriesSection,
                    subtitle: v,
                  },
                })
              }
            />
          </Section>

          <Section title="Categories">
            <ObjectArrayField<BlogCategory>
              label="Category list"
              value={data.categories}
              emptyItem={() => ({
                slug: "",
                title: "",
                count: 0,
                description: "",
              })}
              onChange={(v) => update({ categories: v })}
              renderItem={(item, setItem) => (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <TextField
                      label="Slug"
                      value={item.slug}
                      onChange={(v) => setItem({ slug: v })}
                    />
                    <TextField
                      label="Title"
                      value={item.title}
                      onChange={(v) => setItem({ title: v })}
                    />
                    <NumberField
                      label="Count"
                      value={item.count}
                      onChange={(v) => setItem({ count: v })}
                    />
                  </div>
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
        </>
      )}
    </FormShell>
  );
}

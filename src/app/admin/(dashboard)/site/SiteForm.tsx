"use client";

import type { Site } from "@/lib/content";
import FormShell, { Section } from "@/components/admin/forms/FormShell";
import {
  StringArrayField,
  TextField,
  TextareaField,
} from "@/components/admin/forms/fields";

export default function SiteForm({ initial }: { initial: Site }) {
  return (
    <FormShell<Site>
      eyebrow="Settings"
      title="Site Settings"
      description="Business-wide info used in the header, footer, and contact CTAs."
      initialData={initial}
      contentType="site"
    >
      {({ data, set, update }) => (
        <>
          <Section title="Business">
            <TextField
              label="Business name"
              value={data.businessName}
              onChange={(v) => set("businessName", v)}
            />
            <TextareaField
              label="Tagline"
              rows={2}
              value={data.tagline}
              onChange={(v) => set("tagline", v)}
            />
          </Section>

          <Section title="Contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                label="Phone (display)"
                value={data.phone}
                onChange={(v) => set("phone", v)}
              />
              <TextField
                label="Phone href"
                value={data.phoneHref}
                onChange={(v) => set("phoneHref", v)}
                help="e.g. tel:+18382013789"
              />
              <TextField
                label="Email"
                type="email"
                value={data.email}
                onChange={(v) => set("email", v)}
              />
              <TextField
                label="Address"
                value={data.address}
                onChange={(v) => set("address", v)}
              />
              <TextField
                label="Hours"
                value={data.hours}
                onChange={(v) => set("hours", v)}
              />
            </div>
          </Section>

          <Section title="Social">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <TextField
                label="Facebook URL"
                type="url"
                value={data.social.facebook}
                onChange={(v) =>
                  update({ social: { ...data.social, facebook: v } })
                }
              />
              <TextField
                label="Instagram URL"
                type="url"
                value={data.social.instagram}
                onChange={(v) =>
                  update({ social: { ...data.social, instagram: v } })
                }
              />
              <TextField
                label="Google URL"
                type="url"
                value={data.social.google}
                onChange={(v) =>
                  update({ social: { ...data.social, google: v } })
                }
              />
            </div>
          </Section>

          <Section title="Areas served">
            <StringArrayField
              label="Areas"
              value={data.areasServed}
              onChange={(v) => set("areasServed", v)}
              placeholder="e.g. Arlington"
            />
          </Section>
        </>
      )}
    </FormShell>
  );
}

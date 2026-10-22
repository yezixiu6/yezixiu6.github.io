import type { CollectionEntry } from "astro:content"

/** Explicit priority keeps selected work first without changing its real date. */
export function compareProjects(a: CollectionEntry<"projects">, b: CollectionEntry<"projects">) {
  return b.data.priority - a.data.priority
    || Number(a.data.placeholder) - Number(b.data.placeholder)
    || b.data.date.getTime() - a.data.date.getTime()
}

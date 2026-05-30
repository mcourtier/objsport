export interface HighlightPart {
  text: string
  isHighlight: boolean
}

/** MDC inline node from Nuxt Content YAML props (e.g. `<strong>` in frontmatter). */
interface MdcInlineNode {
  type?: string
  tag?: string
  name?: string
  value?: string
  children?: MdcInlineNode[]
}

/** Parse a title string or MDC inline nodes into highlight segments. */
export function parseHighlightedText(input: unknown): HighlightPart[] {
  if (input == null || input === '') return []

  if (typeof input === 'string') {
    return parseStringWithStrongTags(input)
  }

  if (Array.isArray(input)) {
    return input.flatMap((node) => nodeToParts(node))
  }

  if (typeof input === 'object') {
    return nodeToParts(input as MdcInlineNode)
  }

  return [{ text: String(input), isHighlight: false }]
}

function parseStringWithStrongTags(text: string): HighlightPart[] {
  const parts = text.split(/(<strong>.*?<\/strong>)/gi)
  return parts
    .filter(Boolean)
    .map((part) => ({
      text: part.replace(/<\/?strong>/gi, ''),
      isHighlight: /^<strong>/i.test(part),
    }))
}

function nodeToParts(node: MdcInlineNode): HighlightPart[] {
  if (!node || typeof node !== 'object') return []

  const type = node.type
  const tag = node.tag ?? node.name

  if (type === 'text' || (node.value != null && !node.children?.length)) {
    return [{ text: String(node.value ?? ''), isHighlight: false }]
  }

  const children = node.children ?? []
  const childParts = children.flatMap((child) => nodeToParts(child))

  if (type === 'root' || (type === 'element' && !tag)) {
    return childParts
  }

  if (tag === 'strong' || tag === 'b') {
    return [{ text: joinPartsText(childParts), isHighlight: true }]
  }

  return childParts
}

function joinPartsText(parts: HighlightPart[]): string {
  return parts.map((part) => part.text).join('')
}

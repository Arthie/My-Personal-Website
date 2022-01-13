export default function tw(content: TemplateStringsArray) {
  return content.toString();
}

export function transformer(content: string) {
  return (
    content.match(/tw`[^`]+`/g)?.toString() ??
    content.match(/\/\*tw\*\/"[^"]+"/g)?.toString() ??
    ""
  );
}

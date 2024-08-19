export default function interpolate(template: string, args: { [key: string]: string }): string {
  return template.replace(/{([^}]+)}/g, (match, p1) => {
    if (p1 in args) {
      return String(args[p1]);
    } else {
      return match;
    }
  });
}

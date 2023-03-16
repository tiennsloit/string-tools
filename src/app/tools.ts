export function escapeText(text: string) {
    // Replace newline characters with the escape sequence "\n"
    return text.replace(/\n/g, '\\n');
}

import React from 'react';

/**
 * Converts markdown-style text to HTML with proper formatting
 * Handles: **bold**, bullet points (- ), and line breaks
 */
export function parseMarkdownToReact(text: string): React.ReactNode {
  if (!text) return null;

  // Split by lines
  const lines = text.split('\n').filter(line => line.trim());

  return lines.map((line, lineIdx) => {
    // Check if it's a bullet point
    const isBullet = line.trim().startsWith('- ');

    // Process bold text within the line
    const processedLine = processBoldText(isBullet ? line.replace(/^-\s*/, '') : line);

    if (isBullet) {
      return (
        <li key={lineIdx} style={{ marginBottom: '10px', lineHeight: '1.8' }}>
          {processedLine}
        </li>
      );
    }

    return (
      <p key={lineIdx} style={{ marginBottom: '15px', lineHeight: '1.9' }}>
        {processedLine}
      </p>
    );
  });
}

/**
 * Process bold text markers (**text**)
 */
function processBoldText(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the bold part
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Add bold text
    parts.push(
      <strong key={match.index} style={{ fontWeight: '700', color: '#1e293b' }}>
        {match[1]}
      </strong>
    );

    lastIndex = regex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

/**
 * Extract bullet points from markdown text
 */
export function extractBulletPoints(text: string): string[] {
  return text
    .split('\n')
    .filter(line => line.trim().startsWith('- '))
    .map(line => line.replace(/^-\s*/, '').trim());
}

/**
 * Extract non-bullet text (paragraphs)
 */
export function extractParagraphs(text: string): string[] {
  return text
    .split('\n')
    .filter(line => line.trim() && !line.trim().startsWith('- '))
    .map(line => line.trim());
}

/**
 * Check if text contains markdown formatting
 */
export function hasMarkdown(text: string): boolean {
  return text.includes('**') || text.includes('- ');
}

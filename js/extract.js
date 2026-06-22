import fs from 'fs';

const transcriptPath = 'C:\\Users\\ELCOT\\.gemini\\antigravity\\brain\\77fe6c7c-ad9c-40d6-bb5a-a2b32dfe3d3b\\.system_generated\\logs\\transcript.jsonl';
const outputPath = 'C:\\Users\\ELCOT\\Desktop\\interior\\js\\data.js';

try {
  const content = fs.readFileSync(transcriptPath, 'utf8');
  const lines = content.split('\n');
  
  let found = false;
  for (const line of lines) {
    if (!line.trim()) continue;
    try {
      const parsed = JSON.parse(line);
      
      if (parsed.tool_calls) {
        for (const call of parsed.tool_calls) {
          if (call.name === 'write_to_file') {
            const args = call.args;
            if (args && args.TargetFile) {
              const targetFile = typeof args.TargetFile === 'string' && args.TargetFile.startsWith('"')
                ? JSON.parse(args.TargetFile)
                : args.TargetFile;
                
              if (targetFile.includes('data.js')) {
                console.log('Found write_to_file for data.js! Attempting to parse CodeContent...');
                try {
                  let rawCodeContent = args.CodeContent;
                  if (typeof rawCodeContent === 'string' && rawCodeContent.startsWith('"')) {
                    // Escape raw control characters inside the string before parsing
                    const escaped = rawCodeContent
                      .replace(/\n/g, '\\n')
                      .replace(/\r/g, '\\r')
                      .replace(/\t/g, '\\t');
                    rawCodeContent = JSON.parse(escaped);
                  }
                  
                  fs.writeFileSync(outputPath, rawCodeContent, 'utf8');
                  found = true;
                  break;
                } catch (parseErr) {
                  console.error('Failed to parse CodeContent:', parseErr.message);
                }
              }
            }
          }
        }
      }
      if (found) break;
    } catch (e) {
      // Ignore main JSON parse errors
    }
  }
  
  if (found) {
    console.log('Successfully restored js/data.js!');
  } else {
    console.log('Could not restore data.js');
  }
} catch (err) {
  console.error('Error:', err);
}

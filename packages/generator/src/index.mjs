import { existsSync } from "node:fs";
import { mkdir, writeFile, copyFile } from "node:fs/promises";
import path from "node:path";

export function createEnvExample(envVars) {
  return envVars.map((key) => `${key}=`).join("\n") + "\n";
}

export async function writeFileWithSafety({ sourceHash, content, relative, target, flags, hashFile }) {
  const dest = path.join(target, relative);
  const destExists = existsSync(dest);

  if (destExists) {
    const same = (await hashFile(dest)) === sourceHash;
    if (!same && !flags.force) {
      throw new Error(`Refusing to overwrite modified file: ${relative}. Use --force or inspect with diff.`);
    }
  }

  if (!flags.dryRun) {
    await mkdir(path.dirname(dest), { recursive: true });
    if (destExists && flags.force) {
      await copyFile(dest, `${dest}.stackfoundry.bak`);
    }
    await writeFile(dest, content);
  }

  console.log(`${flags.dryRun ? "would write" : "wrote"} ${relative}`);
}

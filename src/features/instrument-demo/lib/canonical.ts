import { hashObject } from "@/lib/protocol";

export async function hashContract(domain: string, value: unknown): Promise<string> {
  return `sha256:${await hashObject({ domain, value })}`;
}

export async function attachHash<
  T extends Record<string, unknown>,
  K extends string,
>(domain: string, value: T, key: K): Promise<T & Record<K, string>> {
  return {
    ...value,
    [key]: await hashContract(domain, value),
  } as T & Record<K, string>;
}

export async function assertContractHash(
  domain: string,
  value: Record<string, unknown>,
  key: string,
): Promise<void> {
  const actual = value[key];
  if (typeof actual !== "string") {
    throw new Error(`${domain} is missing ${key}`);
  }
  const preimage = Object.fromEntries(
    Object.entries(value).filter(([field]) => field !== key),
  );
  const expected = await hashContract(domain, preimage);
  if (actual !== expected) {
    throw new Error(`${domain} hash mismatch`);
  }
}

export function deepFreeze<T>(value: T): T {
  if (value && typeof value === "object" && !Object.isFrozen(value)) {
    Object.freeze(value);
    for (const child of Object.values(value as Record<string, unknown>)) {
      deepFreeze(child);
    }
  }
  return value;
}

export function uniqueSorted(values: readonly string[]): string[] {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

export function stableById<T>(values: readonly T[], getId: (value: T) => string): T[] {
  return [...values].sort((a, b) => getId(a).localeCompare(getId(b)));
}

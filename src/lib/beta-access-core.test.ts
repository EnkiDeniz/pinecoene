import { describe, expect, it } from "vitest";
import {
  BETA_COOKIE_MAX_AGE_SECONDS,
  createBetaAccessCookieValue,
  isBetaAccessConfigured,
  isBetaPasswordMatch,
  verifyBetaAccessCookieValue,
  type BetaAccessConfig,
} from "@/lib/beta-access-core";

const config: BetaAccessConfig = {
  password: "Pinecoene-Test-Key",
  signingSecret: "a-test-only-signing-secret",
  version: "gate-1",
};

describe("beta access", () => {
  it("is default-closed unless both independent secrets exist", () => {
    expect(isBetaAccessConfigured(config)).toBe(true);
    expect(isBetaAccessConfigured({ password: config.password })).toBe(false);
    expect(isBetaAccessConfigured({ signingSecret: config.signingSecret })).toBe(false);
  });

  it("matches the trimmed, case-insensitive code contract", () => {
    expect(isBetaPasswordMatch("  pinecoene-test-key ", config.password)).toBe(true);
    expect(isBetaPasswordMatch("wrong", config.password)).toBe(false);
    expect(isBetaPasswordMatch("", config.password)).toBe(false);
  });

  it("accepts only authentic, current, version-bound cookies", () => {
    const now = Date.now();
    const value = createBetaAccessCookieValue(config, now);

    expect(verifyBetaAccessCookieValue(value, config, now)).toBe(true);
    expect(verifyBetaAccessCookieValue(`${value}x`, config, now)).toBe(false);
    expect(verifyBetaAccessCookieValue(value, { ...config, version: "gate-2" }, now)).toBe(false);
    expect(
      verifyBetaAccessCookieValue(
        value,
        config,
        now + (BETA_COOKIE_MAX_AGE_SECONDS + 1) * 1000,
      ),
    ).toBe(false);
  });
});

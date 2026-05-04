export const PAIRING_KEYS = [
  "ink-dark-on-paper-light",
  "ink-light-on-paper-dark",
  "action-on-light",
  "action-on-dark",
  "alert",
] as const;

export type PairingKey = (typeof PAIRING_KEYS)[number];

const STATUS_TONES = {
  PROFESSIONAL: "green",
  PRIMARY: "green",
  CURRENT: "cyan",
  LEAD: "orange",
  CORE: "green",

  PORTFOLIO: "purple",
  STRONG: "purple",
  "MULTI-INSTRUMENTALIST": "purple",
  "ALWAYS LISTENING": "purple",
  "ALWAYS WATCHING": "purple",

  SECONDARY: "blue",
  ACTIVE: "blue",
  "REGULAR PLAYER": "blue",
  TOOLKIT: "blue",

  ENTHUSIAST: "orange",
  "LOUDLY INVESTED": "orange",
  "OUT AND ABOUT": "orange",

  SUPPORTING: "yellow",
  ONGOING: "yellow",
}

export function getStatusTone(status = "") {
  const normalized = String(status).trim().toUpperCase()

  if (STATUS_TONES[normalized]) {
    return STATUS_TONES[normalized]
  }

  if (normalized.includes("PRESENT")) {
    return "cyan"
  }

  if (/^\d{4}[–-]\d{4}$/.test(normalized)) {
    return "neutral"
  }

  return "yellow"
}

export function getStatusToneClass(status) {
  return `status-tone--${getStatusTone(status)}`
}

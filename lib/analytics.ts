export function trackEvent(name: string, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("skillSignalEvent", { detail: { name, ...data } }));
  const existing = JSON.parse(window.localStorage.getItem("skillsignal_events") || "[]");
  window.localStorage.setItem(
    "skillsignal_events",
    JSON.stringify([...existing.slice(-50), { name, data, timestamp: new Date().toISOString() }])
  );
}

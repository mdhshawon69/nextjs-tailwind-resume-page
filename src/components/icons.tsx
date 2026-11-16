type IconProps = { className?: string };

export function GithubIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 3.9 0 4.4 2.5 4.4 5.8V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9z" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3 5h18c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1zm9 7.1L4.2 6.5 4 6.7v10.8h16V6.7l-.2-.2L12 12.1z" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1l-2.2 2.2z" />
    </svg>
  );
}

export function PinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

export function GlobeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-2.9a15.6 15.6 0 0 0-1.3-3.4A8 8 0 0 1 18.9 8zM12 4.1c.6.9 1.2 2.1 1.6 3.9h-3.2c.4-1.8 1-3 1.6-3.9zM4.3 14a7.9 7.9 0 0 1 0-4h3.3a17 17 0 0 0 0 4H4.3zm.8 2h2.9c.3 1.2.8 2.4 1.3 3.4A8 8 0 0 1 5.1 16zm2.9-8H5.1a8 8 0 0 1 4.2-3.4A15.6 15.6 0 0 0 8 8zM12 19.9c-.6-.9-1.2-2.1-1.6-3.9h3.2c-.4 1.8-1 3-1.6 3.9zM14.3 14H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4zm1.4 5.4c.5-1 1-2.2 1.3-3.4h2.9a8 8 0 0 1-4.2 3.4zm2-5.4a17 17 0 0 0 0-4h3.3a7.9 7.9 0 0 1 0 4h-3.3z" />
    </svg>
  );
}

export function ArrowDownIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}

export function ExternalLinkIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
    </svg>
  );
}

const skillIconPaths: Record<string, string> = {
  sparkles:
    "M12 2l1.9 5.6L19.5 9.5 13.9 11.4 12 17l-1.9-5.6L4.5 9.5l5.6-1.9L12 2zm7 12l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6z",
  code: "M8.7 15.9 4.8 12l3.9-3.9a1 1 0 0 0-1.4-1.4L2 12l5.3 5.3a1 1 0 0 0 1.4-1.4zm6.6 0a1 1 0 0 0 1.4 1.4L22 12l-5.3-5.3a1 1 0 0 0-1.4 1.4L19.2 12l-3.9 3.9zM13.5 4.2l-4 14a1 1 0 0 0 1.9.6l4-14a1 1 0 1 0-1.9-.6z",
  server:
    "M4 3h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 10h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zm2 2v2h2v-2H6zm0 8v2h2v-2H6zm0-8h.01M6 5v2h2V5H6z",
  database:
    "M12 2C7.6 2 4 3.8 4 6v12c0 2.2 3.6 4 8 4s8-1.8 8-4V6c0-2.2-3.6-4-8-4zm0 2c3.9 0 6 1.4 6 2s-2.1 2-6 2-6-1.4-6-2 2.1-2 6-2zm6 14c0 .6-2.1 2-6 2s-6-1.4-6-2v-3.5c1.5 1 3.6 1.5 6 1.5s4.5-.5 6-1.5V18zm0-6c0 .6-2.1 2-6 2s-6-1.4-6-2V8.5C7.5 9.5 9.6 10 12 10s4.5-.5 6-1.5V12z",
  device:
    "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v14h8V4H8zm4 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
  shield:
    "M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3zm0 2.2 6 2.2v4.6c0 4-2.6 7.6-6 8.9-3.4-1.3-6-4.9-6-8.9V6.4l6-2.2z",
  wrench:
    "M21.7 18.6 14 10.9a6 6 0 0 0-7.8-7.6L9.4 6.5 6.5 9.4 3.3 6.2A6 6 0 0 0 10.9 14l7.7 7.7a1.5 1.5 0 0 0 2.1 0l1-1a1.5 1.5 0 0 0 0-2.1z",
  gauge:
    "M12 4a10 10 0 0 0-10 10 9.9 9.9 0 0 0 2.3 6.4l1.5-1.3A8 8 0 1 1 20 14h-2l3 4 3-4h-2A10 10 0 0 0 12 4zm1 5h-2v6.4l4.8 2.8 1-1.7-3.8-2.2V9z",
};

export function SkillIcon({ name, className = "h-5 w-5" }: { name: string } & IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d={skillIconPaths[name] ?? skillIconPaths.code} />
    </svg>
  );
}

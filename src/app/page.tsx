"use client";

import { useState } from "react";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

type Status = "pending" | "approved" | "editing";

export default function Home() {
  const [status, setStatus] = useState<Status>("pending");
  const [voice, setVoice] = useState<"Aggressive" | "Professional">("Professional");
  const [audience, setAudience] = useState<
    "Cash Buyers" | "Motivated Sellers" | "Private Lenders"
  >("Cash Buyers");

  const draft = `Hi John,

Just circling back on the property at 425 Oak St. We're ready to move quickly on a cash offer — no inspections, no fees, and we can close on your timeline.

Would a 10-minute call tomorrow work to walk you through the numbers?

— Pathwaize Acquisitions`;

  return (
    <div className="min-h-screen w-full text-slate-100">
      {/* Top bar */}
      <header className="sticky top-0 z-30 glass border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-indigo-500 grid place-items-center">
              <span className="text-[11px] font-black text-slate-900">PI</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">
                Pathwaize Intelligence
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                v0.1 · Jarvis Console · mock preview
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <div className="hidden sm:flex items-center gap-2">
              <span className="pulse-dot h-2 w-2 rounded-full bg-cyan-400" />
              <span className="font-mono">Orchestrator online</span>
            </div>
            <div className="hidden md:block font-mono">
              user: <span className="text-slate-200">john@pathwaize.io</span>
            </div>
            <div className="h-7 w-7 rounded-full bg-slate-700 grid place-items-center text-[11px] font-semibold">
              JD
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-12 gap-6">
        {/* HERO */}
        <section className="col-span-12 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <div className="text-[11px] font-mono tracking-[0.3em] text-cyan-400/80 uppercase">
              Dashboard
            </div>
            <h1 className="mt-1 text-3xl md:text-4xl font-semibold tracking-tight">
              Good morning, John.{" "}
              <span className="text-slate-400">
                Here&apos;s what your agents did today.
              </span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <Pill label="3 leads processed" tone="cyan" />
            <Pill label="1 awaiting approval" tone="amber" />
            <Pill label="GHL synced 2m ago" tone="slate" />
          </div>
        </section>

        {/* SECTION A: Approval Card */}
        <section className="col-span-12 lg:col-span-8">
          <SectionTitle
            tag="Section A"
            title="Human-in-the-Loop Approval"
            subtitle="The agent drafts. You decide. Nothing leaves Pathwaize without your sign-off."
          />

          <div className="relative overflow-hidden glass rounded-2xl p-6 scanline">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 grid place-items-center text-slate-900 font-bold">
                  IE
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-300/80 tracking-widest">
                    AGENT · INTEL ENGINE
                  </div>
                  <div className="text-lg font-semibold">
                    Draft follow-up email for Motivated Seller
                  </div>
                  <div className="text-sm text-slate-400">
                    Lead: <span className="text-slate-200">John Doe</span> ·
                    Pipeline:{" "}
                    <span className="text-slate-200">
                      Acquisitions › Warm
                    </span>{" "}
                    · Source: <span className="text-slate-200">GHL Webhook</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[11px] font-mono text-slate-400 uppercase">
                  Confidence
                </div>
                <div className="text-2xl font-bold text-emerald-400">95%</div>
              </div>
            </div>

            <div className="mt-4 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                style={{ width: "95%" }}
              />
            </div>

            <div className="mt-5 rounded-xl border border-white/5 bg-black/40 p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-[11px] font-mono text-slate-400 tracking-widest">
                  DRAFT · v3 · {voice.toUpperCase()} TONE ·{" "}
                  {audience.toUpperCase()}
                </div>
                <div className="flex gap-1.5">
                  <Dot color="bg-red-400" />
                  <Dot color="bg-amber-400" />
                  <Dot color="bg-emerald-400" />
                </div>
              </div>
              <pre className="whitespace-pre-wrap text-sm text-slate-200 font-sans leading-relaxed">
                {draft}
              </pre>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-mono">
              <SourceChip>📄 SOP_Seller_Followup_v4.pdf</SourceChip>
              <SourceChip>🧠 memory: prior_replies_john_doe</SourceChip>
              <SourceChip>🎙 brand_voice_examples.md</SourceChip>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setStatus("approved")}
                className="group flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold text-emerald-950 bg-gradient-to-b from-emerald-300 to-emerald-500 hover:from-emerald-200 hover:to-emerald-400 transition shadow-[0_0_30px_rgba(16,185,129,0.35)]"
              >
                <CheckIcon />
                Approve &amp; Send to GHL
              </button>
              <button
                onClick={() => setStatus("editing")}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold text-slate-100 bg-slate-700/70 hover:bg-slate-700 border border-slate-600 transition"
              >
                <EditIcon />
                Edit Draft
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] font-mono">
              <div className="text-slate-500">
                Action will trigger:{" "}
                <span className="text-slate-300">
                  GHL → contact.message.send
                </span>
              </div>
              <StatusBadge status={status} />
            </div>
          </div>

          <SectionTitle
            tag="Today"
            title="Agent Activity"
            subtitle="A live feed of every routed task and tool call."
            className="mt-10"
          />
          <div className="glass rounded-2xl divide-y divide-white/5">
            <TimelineItem
              time="09:42"
              agent="Authority Engine"
              text="Drafted 5 Facebook posts in Aggressive tone"
              tag="content"
              tagColor="bg-indigo-500/20 text-indigo-300"
            />
            <TimelineItem
              time="09:31"
              agent="Intel Engine"
              text="Retrieved SOP_Seller_Followup_v4.pdf from knowledgebase"
              tag="retrieval"
              tagColor="bg-cyan-500/20 text-cyan-300"
            />
            <TimelineItem
              time="09:28"
              agent="Orchestrator"
              text="Routed inbound lead (John Doe) → Intel Engine"
              tag="routing"
              tagColor="bg-emerald-500/20 text-emerald-300"
            />
            <TimelineItem
              time="08:55"
              agent="Authority Engine"
              text="Repurposed long-form blog → 1 email + 3 shorts"
              tag="content"
              tagColor="bg-indigo-500/20 text-indigo-300"
            />
          </div>
        </section>

        {/* SECTION B: Settings panel */}
        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <SectionTitle
            tag="Section B"
            title="Personalization"
            subtitle="Your preferences. Our locked prompts."
          />

          <div className="glass rounded-2xl p-5 space-y-5">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold tracking-wide">
                User Settings
              </div>
              <span className="text-[10px] font-mono text-slate-500">
                runtime injected
              </span>
            </div>

            <div>
              <Label>Brand Voice</Label>
              <Segmented
                value={voice}
                onChange={(v) => setVoice(v as typeof voice)}
                options={["Aggressive", "Professional"]}
              />
            </div>

            <div>
              <Label>Target Audience</Label>
              <Segmented
                value={audience}
                onChange={(v) => setAudience(v as typeof audience)}
                options={["Cash Buyers", "Motivated Sellers", "Private Lenders"]}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <MiniSetting label="Approval mode" value="Required" />
              <MiniSetting label="Default channel" value="Email" />
              <MiniSetting label="Market" value="Tampa, FL" />
              <MiniSetting label="CTA style" value="Call · Soft" />
            </div>

            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-3 flex gap-3">
              <div className="text-cyan-300 mt-0.5">
                <LockIcon />
              </div>
              <div className="text-[11px] leading-relaxed text-slate-300">
                <span className="text-cyan-300 font-semibold">
                  User preferences
                </span>{" "}
                are injected dynamically at runtime. The{" "}
                <span className="text-cyan-300 font-semibold">
                  core system prompt
                </span>{" "}
                is locked in the AWS backend — never shipped to the browser,
                never exposed via API.
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-semibold">Connected Sources</div>
              <span className="text-[10px] font-mono text-emerald-400">
                4 active
              </span>
            </div>
            <ul className="space-y-2 text-sm">
              <SourceRow name="GoHighLevel" detail="CRM · pipelines · messaging" ok />
              <SourceRow name="Supabase" detail="pgvector memory · RLS" ok />
              <SourceRow name="Google Drive" detail="SOPs · scripts · offers" ok />
              <SourceRow name="GitHub" detail="prompt & agent versioning" ok />
            </ul>
          </div>
        </aside>

        {/* SECTION C: Architecture */}
        <section className="col-span-12">
          <SectionTitle
            tag="Section C"
            title="Architecture · Where the Secret Sauce Lives"
            subtitle="The browser never sees the prompts. Skills, workflows, and orchestration logic stay locked inside AWS."
          />
          <div className="glass rounded-2xl p-6">
            <ArchitectureDiagram />
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <ArchNote
                color="border-cyan-400/40 text-cyan-300"
                title="Next.js · UI only"
                text="Renders the Jarvis console. Sends user input + preferences. Zero prompt logic shipped to the client."
              />
              <ArchNote
                color="border-fuchsia-400/40 text-fuchsia-300"
                title="AWS EC2 · Brain"
                text="LangGraph orchestrator, Intel + Authority engines, all proprietary prompts and skills. IAM-scoped, VPC-isolated."
              />
              <ArchNote
                color="border-emerald-400/40 text-emerald-300"
                title="Supabase + GHL · Memory & Execution"
                text="pgvector business memory, RLS per tenant. GHL receives only approved, signed-off actions via webhook."
              />
            </div>
          </div>
        </section>

        <footer className="col-span-12 text-center text-[11px] font-mono text-slate-500 py-6">
          Pathwaize Intelligence · mock preview · all data fictional · built to
          demonstrate the architecture, not the implementation
        </footer>
      </main>
    </div>
  );
}

/* ───────── helpers ───────── */

function SectionTitle({
  tag,
  title,
  subtitle,
  className = "",
}: {
  tag: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`mb-4 ${className}`}>
      <div className="text-[10px] font-mono tracking-[0.3em] text-cyan-400/80 uppercase">
        {tag}
      </div>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-sm text-slate-400 mt-1 max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}

function Pill({
  label,
  tone,
}: {
  label: string;
  tone: "cyan" | "amber" | "slate";
}) {
  const tones = {
    cyan: "bg-cyan-400/10 text-cyan-300 border-cyan-400/30",
    amber: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    slate: "bg-slate-400/10 text-slate-300 border-slate-400/30",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono ${tones[tone]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}

function Dot({ color }: { color: string }) {
  return <span className={`h-2.5 w-2.5 rounded-full ${color}`} />;
}

function SourceChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300">
      {children}
    </span>
  );
}

function StatusBadge({ status }: { status: Status }) {
  if (status === "approved")
    return (
      <span className="text-emerald-300 inline-flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" />
        Sent to GHL · queued
      </span>
    );
  if (status === "editing")
    return (
      <span className="text-amber-300 inline-flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
        Editing draft…
      </span>
    );
  return (
    <span className="text-slate-400 inline-flex items-center gap-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
      Awaiting approval
    </span>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-2">
      {children}
    </div>
  );
}

function Segmented({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div
      className="grid gap-1 rounded-lg bg-black/40 p-1 border border-white/5"
      style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
    >
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`text-xs font-medium py-2 rounded-md transition ${
            value === opt
              ? "bg-gradient-to-b from-cyan-400/90 to-cyan-500/90 text-slate-900 shadow"
              : "text-slate-300 hover:bg-white/5"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function MiniSetting({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/5 bg-black/30 p-2.5">
      <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
        {label}
      </div>
      <div className="text-sm text-slate-100 mt-0.5">{value}</div>
    </div>
  );
}

function SourceRow({
  name,
  detail,
  ok,
}: {
  name: string;
  detail: string;
  ok?: boolean;
}) {
  return (
    <li className="flex items-center justify-between rounded-lg border border-white/5 bg-black/20 px-3 py-2">
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-[11px] text-slate-400">{detail}</div>
      </div>
      <span
        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
          ok
            ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
            : "bg-slate-500/10 text-slate-300 border border-slate-500/30"
        }`}
      >
        {ok ? "● connected" : "○ idle"}
      </span>
    </li>
  );
}

function TimelineItem({
  time,
  agent,
  text,
  tag,
  tagColor,
}: {
  time: string;
  agent: string;
  text: string;
  tag: string;
  tagColor: string;
}) {
  return (
    <div className="flex items-center gap-4 px-5 py-3 hover:bg-white/[0.02] transition">
      <div className="text-xs font-mono text-slate-500 w-12">{time}</div>
      <div className="flex-1">
        <div className="text-xs text-cyan-300/80 font-mono">{agent}</div>
        <div className="text-sm text-slate-200">{text}</div>
      </div>
      <span className={`text-[10px] font-mono px-2 py-1 rounded-md ${tagColor}`}>
        {tag}
      </span>
    </div>
  );
}

function ArchNote({
  color,
  title,
  text,
}: {
  color: string;
  title: string;
  text: string;
}) {
  return (
    <div className={`rounded-xl border bg-black/30 p-3 ${color}`}>
      <div className="text-xs font-semibold mb-1">{title}</div>
      <div className="text-[11px] text-slate-400 leading-relaxed">{text}</div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path
        d="M5 13l4 4L19 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function EditIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        d="M12 20h9M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
    </svg>
  );
}

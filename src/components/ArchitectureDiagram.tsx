export default function ArchitectureDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 980 360"
        className="w-full h-auto min-w-[720px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="nodeUI" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="nodeCore" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="nodeData" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="nodeCRM" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.05" />
          </linearGradient>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#22d3ee" />
          </marker>
        </defs>

        {/* Background grid */}
        <rect width="980" height="360" fill="transparent" />

        {/* Node 1: Next.js UI */}
        <g>
          <rect
            x="20"
            y="120"
            width="200"
            height="120"
            rx="14"
            fill="url(#nodeUI)"
            stroke="#0ea5e9"
            strokeOpacity="0.6"
          />
          <text x="120" y="155" textAnchor="middle" fill="#e0f2fe" fontSize="15" fontWeight="700">
            Next.js
          </text>
          <text x="120" y="178" textAnchor="middle" fill="#bae6fd" fontSize="12">
            User UI · Jarvis Console
          </text>
          <text x="120" y="200" textAnchor="middle" fill="#7dd3fc" fontSize="11">
            Vercel · Edge
          </text>
          <text x="120" y="218" textAnchor="middle" fill="#64748b" fontSize="10">
            (No prompts here)
          </text>
        </g>

        {/* Arrow 1 */}
        <line
          x1="220"
          y1="180"
          x2="345"
          y2="180"
          stroke="#22d3ee"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
        <text x="282" y="170" textAnchor="middle" fill="#94a3b8" fontSize="10">
          HTTPS / JWT
        </text>

        {/* Node 2: AWS EC2 Core */}
        <g>
          <rect
            x="350"
            y="90"
            width="260"
            height="180"
            rx="14"
            fill="url(#nodeCore)"
            stroke="#a855f7"
            strokeOpacity="0.7"
          />
          <text x="480" y="125" textAnchor="middle" fill="#f3e8ff" fontSize="15" fontWeight="700">
            AWS EC2 · Python / LangGraph
          </text>
          <text x="480" y="148" textAnchor="middle" fill="#e9d5ff" fontSize="12">
            Orchestrator · Intel · Authority
          </text>
          <rect
            x="370"
            y="165"
            width="220"
            height="50"
            rx="8"
            fill="#1e1b4b"
            stroke="#a855f7"
            strokeOpacity="0.5"
            strokeDasharray="4 3"
          />
          <text x="480" y="186" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="700">
            🔒 PROMPTS · SKILLS · WORKFLOWS
          </text>
          <text x="480" y="202" textAnchor="middle" fill="#fde68a" fontSize="10">
            Proprietary · Never leaves backend
          </text>
          <text x="480" y="238" textAnchor="middle" fill="#c4b5fd" fontSize="10">
            Subagents · Tool calling · Approvals
          </text>
          <text x="480" y="254" textAnchor="middle" fill="#94a3b8" fontSize="10">
            IAM Role · VPC · Secrets Manager
          </text>
        </g>

        {/* Arrow 2 to Supabase */}
        <line
          x1="610"
          y1="155"
          x2="745"
          y2="90"
          stroke="#22d3ee"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
        <text x="660" y="110" textAnchor="middle" fill="#94a3b8" fontSize="10">
          pgvector · memory
        </text>

        {/* Node 3: Supabase */}
        <g>
          <rect
            x="740"
            y="50"
            width="220"
            height="100"
            rx="14"
            fill="url(#nodeData)"
            stroke="#22c55e"
            strokeOpacity="0.7"
          />
          <text x="850" y="85" textAnchor="middle" fill="#dcfce7" fontSize="15" fontWeight="700">
            Supabase
          </text>
          <text x="850" y="108" textAnchor="middle" fill="#bbf7d0" fontSize="12">
            pgvector · RLS · Auth
          </text>
          <text x="850" y="128" textAnchor="middle" fill="#86efac" fontSize="11">
            Business + Agent Memory
          </text>
        </g>

        {/* Arrow 3 to GHL */}
        <line
          x1="610"
          y1="220"
          x2="745"
          y2="280"
          stroke="#22d3ee"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
        <text x="660" y="265" textAnchor="middle" fill="#94a3b8" fontSize="10">
          Webhooks · API
        </text>

        {/* Node 4: GHL */}
        <g>
          <rect
            x="740"
            y="240"
            width="220"
            height="90"
            rx="14"
            fill="url(#nodeCRM)"
            stroke="#f59e0b"
            strokeOpacity="0.7"
          />
          <text x="850" y="270" textAnchor="middle" fill="#fef3c7" fontSize="15" fontWeight="700">
            GoHighLevel
          </text>
          <text x="850" y="292" textAnchor="middle" fill="#fde68a" fontSize="12">
            CRM · Pipelines · Messaging
          </text>
          <text x="850" y="312" textAnchor="middle" fill="#fcd34d" fontSize="11">
            Lead + Deal execution
          </text>
        </g>

        {/* Legend pill */}
        <g>
          <rect x="20" y="20" width="280" height="32" rx="16" fill="#0f172a" stroke="#1e293b" />
          <circle cx="40" cy="36" r="5" fill="#22d3ee" />
          <text x="55" y="40" fill="#cbd5e1" fontSize="11">
            Data flow · All sensitive logic isolated in AWS
          </text>
        </g>
      </svg>
    </div>
  );
}

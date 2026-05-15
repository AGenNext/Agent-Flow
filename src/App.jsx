import React from 'react';
import { Bot, Workflow, PlayCircle, Zap, ArrowRight } from 'lucide-react';

const agents = [
  { name: 'Research Agent', role: 'Collects and summarizes information' },
  { name: 'Planner Agent', role: 'Breaks goals into executable tasks' },
  { name: 'Executor Agent', role: 'Runs tasks and API actions' },
  { name: 'Reviewer Agent', role: 'Validates outputs and quality' },
];

const workflow = [
  'User Goal',
  'Research Agent',
  'Planner Agent',
  'Executor Agent',
  'Reviewer Agent',
  'Final Output',
];

function Card({ children }) {
  return <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">{children}</div>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3 font-semibold text-xl">
          <Workflow className="w-6 h-6" /> Agent Flow
        </div>
        <button className="px-4 py-2 rounded-xl bg-white text-slate-900 font-medium">Get Started</button>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm mb-6">
            <Zap className="w-4 h-4" /> Build AI Agent Workflows Visually
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Design, Run, and Scale Multi-Agent Workflows.
          </h1>
          <p className="text-slate-300 text-lg mt-6 max-w-xl">
            Create autonomous workflows using research, planning, execution, and review agents. Connect tools, APIs, and humans in one visual canvas.
          </p>
          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 rounded-2xl bg-white text-slate-900 font-semibold flex items-center gap-2">
              <PlayCircle className="w-5 h-5" /> Launch Builder
            </button>
            <button className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 font-semibold">
              View Demo
            </button>
          </div>
        </div>

        <Card>
          <div className="space-y-4">
            {workflow.map((step, idx) => (
              <div key={step} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  {idx === 0 ? '🎯' : idx === workflow.length - 1 ? '✅' : '🤖'}
                </div>
                <div className="font-medium">{step}</div>
                {idx < workflow.length - 1 && <ArrowRight className="w-4 h-4 text-slate-500" />}
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Core Agents</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <Card key={agent.name}>
              <Bot className="w-8 h-8 mb-4 text-cyan-300" />
              <h3 className="font-semibold text-lg">{agent.name}</h3>
              <p className="text-slate-400 mt-2 text-sm">{agent.role}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <Card>
          <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-6 text-slate-300">
            <div>Market research automation</div>
            <div>Lead generation workflows</div>
            <div>Customer support copilots</div>
            <div>Content creation pipelines</div>
            <div>Internal operations agents</div>
            <div>Custom SaaS automations</div>
          </div>
        </Card>
      </section>

      <footer className="max-w-7xl mx-auto px-6 py-10 text-slate-500 text-sm">
        © 2026 Agent Flow by AGenNext.
      </footer>
    </div>
  );
}

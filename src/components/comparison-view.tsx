import { ExternalLink, Star, X, GitCompare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface ComparableAgent {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  rating: number;
  pricing: string;
  website: string;
  logo: string;
  tags: string[];
}

interface CompareBarProps {
  agents: ComparableAgent[];
  onRemove: (id: number) => void;
  onClear: () => void;
  onOpen: () => void;
  max: number;
}

export const CompareBar = ({ agents, onRemove, onClear, onOpen, max }: CompareBarProps) => {
  if (agents.length === 0) return null;

  return (
    <div
      id="compare"
      role="region"
      aria-label="Agent comparison tray"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/15 bg-slate-950/90 backdrop-blur-md px-4 py-3"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap items-center gap-2">
          {agents.map((agent) => (
            <li key={agent.id}>
              <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1 pl-2 pr-1 text-sm text-white">
                <AgentLogo
                  name={agent.name}
                  website={agent.website}
                  logo={agent.logo}
                  className="h-5 w-5 rounded"
                  size={64}
                />
                {agent.name}
                <button
                  type="button"
                  onClick={() => onRemove(agent.id)}
                  aria-label={`Remove ${agent.name} from comparison`}
                  className="rounded-full p-1 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </span>
            </li>
          ))}
          <li className="text-xs text-white/60">
            {agents.length}/{max} selected
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={onClear}
            className="text-white/80 hover:bg-white/10 hover:text-white"
          >
            Clear all
          </Button>
          <Button
            onClick={onOpen}
            disabled={agents.length < 2}
            className="bg-white text-black hover:bg-white/90"
          >
            <GitCompare className="mr-2 h-4 w-4" aria-hidden="true" />
            Compare {agents.length >= 2 ? `(${agents.length})` : ""}
          </Button>
        </div>
      </div>
    </div>
  );
};

interface ComparisonDialogProps {
  agents: ComparableAgent[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRemove: (id: number) => void;
}

export const ComparisonDialog = ({ agents, open, onOpenChange, onRemove }: ComparisonDialogProps) => {
  const rows: { label: string; render: (agent: ComparableAgent) => React.ReactNode }[] = [
    {
      label: "Rating",
      render: (agent) => (
        <span className="inline-flex items-center gap-1">
          <Star className="h-4 w-4 fill-current text-yellow-400" aria-hidden="true" />
          {agent.rating}
          <span className="sr-only">out of 5</span>
        </span>
      ),
    },
    { label: "Pricing", render: (agent) => <span className="text-green-400">{agent.pricing}</span> },
    { label: "Category", render: (agent) => <span className="capitalize">{agent.category}</span> },
    {
      label: "Tags",
      render: (agent) => (
        <div className="flex flex-wrap gap-1">
          {agent.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-white/15 text-xs text-white">
              {tag}
            </Badge>
          ))}
        </div>
      ),
    },
    {
      label: "Key capabilities",
      render: (agent) => (
        <ul className="list-inside list-disc space-y-1 text-sm">
          {agent.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      ),
    },
    {
      label: "Overview",
      render: (agent) => <p className="text-sm text-white/70">{agent.description}</p>,
    },
    {
      label: "Website",
      render: (agent) => (
        <Button
          asChild
          size="sm"
          variant="outline"
          className="border-white/30 bg-white/10 text-white hover:bg-white/20"
        >
          <a href={agent.website} target="_blank" rel="noopener noreferrer">
            Visit
            <ExternalLink className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only"> {agent.name} website (opens in new tab)</span>
          </a>
        </Button>
      ),
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-6xl overflow-auto border-white/15 bg-slate-950 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">Side-by-side comparison</DialogTitle>
          <DialogDescription className="text-white/60">
            Compare key attributes of your selected AI agents.
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">Comparison of selected AI agents by attribute</caption>
            <thead>
              <tr>
                <th scope="col" className="w-40 p-3 text-sm font-medium text-white/60">
                  Attribute
                </th>
                {agents.map((agent) => (
                  <th key={agent.id} scope="col" className="p-3 align-bottom">
                    <div className="flex flex-col items-start gap-2">
                      <img
                        src={agent.logo}
                        alt={`${agent.name} logo`}
                        className="h-10 w-10 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.visibility = "hidden";
                        }}
                      />
                      <span className="text-base font-bold">{agent.name}</span>
                      <button
                        type="button"
                        onClick={() => onRemove(agent.id)}
                        className="text-xs text-white/50 underline hover:text-white"
                      >
                        Remove
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-white/10 align-top">
                  <th scope="row" className="p-3 text-sm font-medium text-white/60">
                    {row.label}
                  </th>
                  {agents.map((agent) => (
                    <td key={agent.id} className="p-3 text-sm">
                      {row.render(agent)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

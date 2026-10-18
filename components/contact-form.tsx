"use client";

import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    projectType: "Custom Web Application",
    description: "",
    budget: "$5,000 - $15,000",
  });
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please provide a valid work email.");
      return;
    }
    if (formData.description.trim().length < 10) {
      setErrorMessage("Please describe your project (minimum 10 characters).");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Network error. Please try again or email hello@scalvio.com",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center space-y-4">
        <CheckCircle2 className="mx-auto size-10 text-primary" />
        <h3 className="text-xl font-bold text-foreground">Inquiry Received</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Thanks, <strong>{formData.name}</strong>. An engineer will review your
          brief and reply with technical scope recommendations.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 rounded-xl border border-border bg-card p-6 sm:p-8"
    >
      {errorMessage && (
        <div
          role="alert"
          className="flex items-center gap-2 rounded-lg bg-destructive/10 p-3 text-xs text-destructive"
        >
          <AlertCircle className="size-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label htmlFor="name" className="text-xs font-medium text-foreground">
            Name *
          </label>
          <Input
            id="name"
            required
            placeholder="Alex Morgan"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="text-xs font-medium text-foreground"
          >
            Work Email *
          </label>
          <Input
            id="email"
            type="email"
            required
            placeholder="alex@company.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label
            htmlFor="company"
            className="text-xs font-medium text-foreground"
          >
            Company / Current Site
          </label>
          <Input
            id="company"
            placeholder="Optional"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="projectType"
            className="text-xs font-medium text-foreground"
          >
            Project Type
          </label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={(e) =>
              setFormData({ ...formData, projectType: e.target.value })
            }
            className="flex h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <option
              value="Custom Web Application"
              className="bg-card text-foreground"
            >
              Custom Web Application
            </option>
            <option
              value="Business Website / Landing Page"
              className="bg-card text-foreground"
            >
              Business Website / Landing Page
            </option>
            <option
              value="SaaS / MVP Development"
              className="bg-card text-foreground"
            >
              SaaS / MVP Development
            </option>
            <option
              value="Website Modernization & Speed"
              className="bg-card text-foreground"
            >
              Website Modernization & Speed
            </option>
            <option
              value="API & Backend Integration"
              className="bg-card text-foreground"
            >
              API & Backend Integration
            </option>
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="description"
          className="text-xs font-medium text-foreground"
        >
          Project Details & Goals *
        </label>
        <Textarea
          id="description"
          required
          rows={4}
          placeholder="What are you looking to build or solve? Key requirements, timelines, etc."
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <Loader2 className="size-4 animate-spin" /> Sending...
          </span>
        ) : (
          "Send Inquiry"
        )}
      </Button>
    </form>
  );
}

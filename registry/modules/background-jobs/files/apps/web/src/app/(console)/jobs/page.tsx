const jobs = [
  { name: "send_lifecycle_email", status: "queued", attempts: 0 },
  { name: "sync_billing_subscription", status: "completed", attempts: 1 },
];

export default function JobsPage() {
  return (
    <main className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Background Jobs</h1>
        <p className="text-muted-foreground">Track queued work, retries, and worker handoffs.</p>
      </div>
      <div className="grid gap-3">
        {jobs.map((job) => (
          <div key={job.name} className="rounded-lg border p-4">
            <p className="font-medium">{job.name}</p>
            <p className="text-sm text-muted-foreground">{job.status} - {job.attempts} attempts</p>
          </div>
        ))}
      </div>
    </main>
  );
}

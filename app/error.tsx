'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-2">Oops!</h2>
          <p className="text-xl text-foreground/80 mb-4">Something went wrong</p>
          <p className="text-sm text-foreground/60">
            {error.message || 'An unexpected error occurred'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:scale-105 transition-transform"
          >
            Try again
          </button>
          <a
            href="/"
            className="px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:scale-105 transition-transform inline-block"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

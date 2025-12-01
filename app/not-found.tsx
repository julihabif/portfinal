export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-2">Page Not Found</h2>
          <p className="text-foreground/60">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <a
          href="/"
          className="inline-block px-8 py-3 rounded-full bg-primary text-white font-semibold hover:scale-105 transition-transform"
        >
          Go back home
        </a>
      </div>
    </div>
  );
}

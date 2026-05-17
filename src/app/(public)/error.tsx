"use client"; // Bắt buộc phải là Client Component theo đặc tả của Next.js Error Boundary

import { ForbiddenView } from "@/shared/components/errors/forbidden-view";
import { InternalServerView } from "@/shared/components/errors/internal-server-view";
import { UnauthorizedView } from "@/shared/components/errors/unauthorized-view";
import { useEffect } from "react";

export default function GlobalErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string; statusCode?: number };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Caught by Error Boundary:", error);
  }, [error]);

  if (error.name === "UnauthorizedError" || error.statusCode === 401) {
    return <UnauthorizedView reset={reset} />;
  }

  if (error.name === "ForbiddenError" || error.statusCode === 403) {
    return <ForbiddenView reset={reset} />;
  }

  return <InternalServerView message={error.message} reset={reset} />;
}

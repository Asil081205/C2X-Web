import { useState } from "react";
import { validateEmail } from "@/utils/helpers";

interface UseNewsletterReturn {
  loading: boolean;
  success: boolean;
  error: string | null;
  subscribe: (email: string) => Promise<void>;
  reset: () => void;
}

export const useNewsletter = (): UseNewsletterReturn => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subscribe = async (email: string): Promise<void> => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const trimmedEmail = email.trim().toLowerCase();

    // Validate email
    if (!trimmedEmail) {
      setError("Please enter your email address.");
      setLoading(false);
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong. Please try again.",
        );
      }

      setSuccess(true);
      setError(null);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setError(message);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const reset = (): void => {
    setLoading(false);
    setSuccess(false);
    setError(null);
  };

  return { loading, success, error, subscribe, reset };
};

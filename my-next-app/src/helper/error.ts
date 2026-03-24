// utils/api.ts

type ApiError = {
  response?: {
    data?: {
      originalMessage?: string;
      error?: {
        message?: string;
      };
      message?: string;
    };
  };
};

export const parseApiError = (error: unknown): string => {
  if (error && typeof error === "object") {
    const err = error as ApiError;

    return (
      err.response?.data?.originalMessage ||
      err.response?.data?.error?.message ||
      err.response?.data?.message ||
      "An unknown error has occurred"
    );
  }

  return "An unknown error has occurred";
};

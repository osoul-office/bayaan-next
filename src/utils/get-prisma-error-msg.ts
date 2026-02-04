import { Prisma } from "@/generated/prisma/client";

export function getPrismaErrorMessage(error: unknown): string {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        const target =
          (error.meta?.target as string[])?.join(", ") ?? "info";
        return `A record with this ${target} already exists.`;
      case "P2025":
        return "The requested record was not found.";
      case "P2003":
        return "This operation failed because a related record is missing.";
      default:
        return `Database error (${error.code}). Please try again.`;
    }
  }

  if (error instanceof Error) return error.message;
  return "An unexpected error occurred.";
}

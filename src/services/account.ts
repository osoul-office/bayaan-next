"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Account, AccountCreateInput } from "@/types";
import { Result } from "@/lib/result";
import { paths } from "@/config/paths";
import { getPrismaErrorMessage } from "@/utils/get-prisma-error-msg";

export const getAccounts = async () => {
  const accounts = await prisma.account.findMany();
  return accounts;
};

export const create = async (
  data: AccountCreateInput,
): Promise<Result<Account>> => {
  try {
    const account = await prisma.account.create({ data });
    revalidatePath(paths.portal.accounts.getHref());
    return Result.success(account);
  } catch (error) {
    const errorMsg = getPrismaErrorMessage(error);
    return Result.failure(errorMsg);
  }
};

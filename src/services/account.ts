"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Account, AccountCreateInput } from "@/types";
import { Result } from "@/lib/result";
import { paths } from "@/config/paths";
import { getPrismaErrorMessage } from "@/utils";

export const get = async () => {
  try {
    const accounts = await prisma.account.findMany();
    return Result.success(accounts);
  } catch (error) {
    const errorMsg = getPrismaErrorMessage(error);
    return Result.failure(errorMsg);
  }
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

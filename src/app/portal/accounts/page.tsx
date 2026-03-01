import { Actions } from "@/components/ui";
import { paths } from "@/config/paths";
import { Table, type ColumnDefinition } from "@/components/ui";
import { SelectionProvider } from "@/providers";
import { getRelativeTimeAgo } from "@/utils";
import * as accountService from "@/services/account";
import { Account as AccountT } from "@/types";

interface ClientAccountT extends Omit<AccountT, "updatedAt"> {
  updatedAt: string;
}

export default async function Account({
  searchParams,
}: {
  searchParams: {
    page?: string;
    length?: string;
  };
}) {
  const page = Number(searchParams?.page) || 1;
  const length = Number(searchParams?.length) || 20;

  const accounts = await accountService.get();

  if (accounts.isFailure) {
    throw new Error(accounts.error);
  }

  const columns: ColumnDefinition<ClientAccountT>[] = [
    {
      key: "id",
      header: "ID",
    },
    {
      key: "name",
      header: "Name",
    },
    {
      key: "currentBalance",
      header: "Balance",
    },
    {
      key: "updatedAt",
      header: "Activity",
    },
  ];

  const processedAccounts = accounts.value.map((account) => ({
    ...account,
    updatedAt: getRelativeTimeAgo(account.updatedAt),
  }));

  return (
    <>
      <h1>Accounts</h1>
      <SelectionProvider>
        <Actions create={paths.portal.accounts.create.getHref()} />
        <Table columns={columns} data={processedAccounts} />
      </SelectionProvider>
    </>
  );
}

import { Actions } from "@/components/ui";
import { paths } from "@/config/paths";

export default async function Account() {
  return (
    <>
      <h1>Accounts</h1>
      <Actions create={paths.portal.accounts.create.getHref()} />
    </>
  );
}

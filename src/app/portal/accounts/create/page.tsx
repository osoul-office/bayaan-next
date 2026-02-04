"use client";

import clsx from "clsx";
import styles from "@/styles/form.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import * as accountService from "@/services/account";
import { AccountCreateInput } from "@/types";
import { Loader } from "@/components/ui";
import { paths } from "@/config/paths";

interface AccountCreateFormFields {
  name: string;
  "starting-balance": string;
  description: string;
}

export default function Create() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<AccountCreateFormFields>();

  const onSubmit: SubmitHandler<AccountCreateFormFields> = async (
    data,
  ) => {
    setIsSubmitting(true);

    const accountData: AccountCreateInput = {
      name: data.name,
      currentBalance: parseFloat(data["starting-balance"]) || 0,
      description: data.description,
    };

    const result = await accountService.create(accountData);

    if (result.isFailure) {
      toast.error(result.error, { toasterId: "portal" });
      setError("root", { message: result.error });
    }

    if (result.isSuccess) {
      toast.success(
        `Account "${result.value.name}" created successfully!`,
        { toasterId: "portal" },
      );

      router.push(paths.portal.accounts.getHref());
    }

    setIsSubmitting(false);
  };
  return (
    <>
      <h1>Create Account</h1>
      <section className={styles["form-wrapper"]}>
        <h2 className={styles["form-title"]}>Details</h2>
        <form
          id="create-account"
          className={styles["form"]}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={styles["form-field"]}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              required
              disabled={isSubmitting}
              {...register("name", {
                required: "Account name is required.",
              })}
            />
            <span className={styles["error"]}>
              {errors["name"]?.message}
            </span>
          </div>
          <div className={styles["form-field"]}>
            <label htmlFor="starting-balance">Starting Balance</label>
            <input
              type="number"
              id="starting-balance"
              defaultValue={0}
              required
              disabled={isSubmitting}
              {...register("starting-balance", {
                required: "Starting Balance is required.",
              })}
            />
            <span className={styles["error"]}>
              {errors["starting-balance"]?.message}
            </span>
          </div>
          <div className={clsx(styles["form-field"], styles["col-span"])}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              disabled={isSubmitting}
              {...register("description")}
            />
          </div>
        </form>
      </section>
      {errors.root && (
        <div className={styles["root-error"]}>{errors.root.message}</div>
      )}
      <button
        form="create-account"
        className={styles["submit-btn"]}
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Loader size="small" showWrapper={false} />
            Creating...
          </div>
        ) : (
          "Add Account"
        )}
      </button>
    </>
  );
}

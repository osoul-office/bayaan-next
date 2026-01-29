export const paths = {
  home: {
    getHref: () => "/",
  },
  portal: {
    dashboard: {
      getHref: () => "/portal/dashboard",
    },
    accounts: {
      getHref: () => "/portal/accounts",
      create: {
        getHref: () => "/portal/accounts/create",
      },
    },
    revenues: {
      getHref: () => "/portal/revenues",
    },
    expenses: {
      getHref: () => "/portal/expenses",
    },
    expenseCategories: {
      getHref: () => "/portal/expense-categories",
    },
    revenueCategories: {
      getHref: () => "/portal/revenue-categories",
    },
  },
};

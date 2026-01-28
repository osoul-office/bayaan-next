export const paths = {
  home: {
    path: "/",
    getHref: () => "/",
  },
  portal: {
    dashboard: {
      path: "/portal/dashboard",
      getHref: () => "/portal/dashboard",
    },
    account: {
      path: "/portal/accounts",
      getHref: () => "/portal/accounts",
    },
    revenue: {
      path: "/portal/revenues",
      getHref: () => "/portal/revenues",
    },
    expense: {
      path: "/portal/expenses",
      getHref: () => "/portal/expenses",
    },
    expenseCategory: {
      path: "/portal/expense-categories",
      getHref: () => "/portal/expense-categories",
    },
    revenueCategory: {
      path: "/portal/revenue-categories",
      getHref: () => "/portal/revenue-categories",
    },
  },
};

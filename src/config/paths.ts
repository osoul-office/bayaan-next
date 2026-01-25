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
      path: "/portal/account",
      getHref: () => "/portal/account",
    },
    revenue: {
      path: "/portal/revenue",
      getHref: () => "/portal/revenue",
    },
    expense: {
      path: "/portal/expense",
      getHref: () => "/portal/expense",
    },
    expenseCategory: {
      path: "/portal/expense-category",
      getHref: () => "/portal/expense-category",
    },
    revenueCategory: {
      path: "/portal/revenue-category",
      getHref: () => "/portal/revenue-category",
    },
  },
};

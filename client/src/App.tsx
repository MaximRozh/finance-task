import React, { FC } from "react";
import Layout from "antd/lib/layout/layout";
import FinanceTable from "./pages/FinanceTable";

const App: FC = () => {
  return (
    <Layout>
      <FinanceTable />
    </Layout>
  );
};

export default App;

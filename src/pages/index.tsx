import type { NextPage } from "next";
import Head from "next/head";
import KanbanBoard from "../features/kanban-board/KanbanBoard";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Cycle App</title>
          <meta name="description" content="Cycle Product Management App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <KanbanBoard />
      </div>
    </>
  );
};

export default Home;

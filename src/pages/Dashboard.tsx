import { DndContext } from "@dnd-kit/core";

const Dashboard = () => {
  return (
    <DndContext>
      <div className="flex flex-col w-full h-full items-center sm:items-start">
        <h2 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Dashboard
        </h2>
      </div>
    </DndContext>
  );
};

export default Dashboard;

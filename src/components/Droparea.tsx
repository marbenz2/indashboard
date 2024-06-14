import { useDroppable } from "@dnd-kit/core";
import { cn } from "../lib/utils";

interface DroppableProps {
  children: React.ReactNode;
  area: number;
  className?: string;
}

const Droparea = (props: DroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.area,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div
      className={cn(
        `flex ${
          isOver && "bg-green-500/40"
        } rounded-lg items-center justify-center` + props.className
      )}
      ref={setNodeRef}
      style={style}
    >
      {props.children}
    </div>
  );
};

export default Droparea;

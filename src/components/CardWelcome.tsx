import { useDraggable } from "@dnd-kit/core";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Card } from "@tremor/react";

const CardWelcome = () => {
  const { user } = useKindeAuth();
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "dragCardWelcome",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <>
      {user && (
        <Card
          className={`h-full col-span-4 row-span-1 flex items-center`}
          decoration="top"
          decorationColor="white"
          ref={setNodeRef}
          style={style}
          {...listeners}
          {...attributes}
        >
          <div className="flex flex-col">
            <h2 className="text-tremor-title">
              Hello{" "}
              <span className="text-tremor-brand-accent trem">
                {user.given_name}
              </span>{" "}
              and welcome to your dashboard
            </h2>
            <p>Here are the todays updates: ...</p>
          </div>
        </Card>
      )}
    </>
  );
};

export default CardWelcome;

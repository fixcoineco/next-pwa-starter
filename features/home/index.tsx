import { Status } from "@/bff/types/status";
import { WelcomeDialog } from "@/features/home/WelcomeDialog";

interface Props {
  status: Status;
}

export const Home: React.FC<Props> = ({ status }) => {
  return (
    <div className="my-5">
      <WelcomeDialog status={status} />
    </div>
  );
};

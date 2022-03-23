import { Status } from "@/bff/types/status";

interface Props {
  status: Status;
}

export const Home: React.FC<Props> = ({ status }) => {
  return (
    <>
      <h2>Fixcoin App</h2>
      <p>{status.status}</p>
    </>
  );
};

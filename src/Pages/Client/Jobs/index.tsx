import { useContext } from "react";
import PageTemplate from "../../Pag";
import CardJobs from "./Components/CardJobs";
import { ClientContext } from "../../../Contexts/Cliente";

export function Jobs() {
  const {jobs} = useContext(ClientContext);
  return (
    <PageTemplate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <CardJobs key={job.id} job={job} />
        ))}
      </div>
    </PageTemplate>
  );
}

import React, { useEffect, useState } from "react";
import JobListing from "./JobListing";
import Spinners from "./Spinners";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJob] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchjob = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.log("Error Fetching Data ! ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchjob();
  }, []);
  return (
    <section className="px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {Loading ? (
          <Spinners loading={Loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;

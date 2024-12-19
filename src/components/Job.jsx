import "../styles/Job.css";

const Job = ({ title, employer, date, location, description }) => {
    return (
        <section className="job_container">
            <div id="job_title_row">
                <p id="job_title">{title}</p>
                <p id="job_details">
                    <span id={!employer ? "date_only" : "full_job_details"}>{employer}</span>
                    <span id={!employer ? "date_only" : "full_job_details"}>{date}</span>
                    <span id={!employer ? "date_only" : "full_job_details"}>{location}</span>
                </p>
            </div>
            <div id="job_description">{description}</div>
        </section>
    );
};

export default Job;

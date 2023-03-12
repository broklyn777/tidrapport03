import { useState, useEffect } from 'react';

function ReportList() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setReports(data.reports));
    }, []);

    return (
        <div>
            {reports.map(report => (
                <div key={report.id}>
                    <p>{report.username}</p>
                    <p>{report.project}</p>
                    {/* ... */}
                </div>
            ))}
        </div>
    );
}

export default ReportList;

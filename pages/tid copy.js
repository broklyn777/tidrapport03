import Layout from "../components/Layout";
import { format } from "date-fns";
import path from "path";
import fs from "fs";
import { useState, useEffect } from 'react'





export default function Tidrapport({ reports }) {
    const [date, setDate] = useState(new Date());
    const [filteredReports, setFilteredReports] = useState(reports);

    function handleDateChange(e) {
        setDate(new Date(e.target.value));
    }

    useEffect(() => {
        async function fetchReports() {
            const res = await fetch("/api/reports");
            const data = await res.json();
            setFilteredReports(data);
        }
        fetchReports();
    }, [date]);

    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">
                Tidrapporter för {format(date, "dd MMMM yyyy")}
            </h1>
            <div className="flex justify-end mb-4">
                <input
                    type="date"
                    value={format(date, "yyyy-MM-dd")}
                    onChange={handleDateChange}
                    className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-48 sm:text-sm border rounded-md"
                />
            </div>
            <ul>
                {filteredReports.length > 0 ? (
                    filteredReports.map((report) => (
                        <li key={report.id}>
                            <p>Användarnamn: {report.username}</p>
                            <p>Projektinformation: {report.projectInfo}</p>
                            <p>Datum: {format(new Date(report.date), "dd MMMM yyyy")}</p>
                            <p>Tid in: {report.timeIn}</p>
                            <p>Tid ut: {report.timeOut}</p>
                            <p>Antal arbetade timmar: {report.hours}</p>
                        </li>
                    ))
                ) : (
                    <p>Inga tidrapporter för valt datum.</p>
                )}
            </ul>
        </Layout>
    );
}

export async function getStaticProps() {
    const dataFilePath = path.join(process.cwd(), "public", "data.json");
    const jsonData = fs.readFileSync(dataFilePath, "utf-8");
    const data = JSON.parse(jsonData);
    return {
        props: {
            reports: data.reports,
        },
    };
}

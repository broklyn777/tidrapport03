import Layout from "../components/Layout";
import { format } from "date-fns";
import { sv } from "date-fns/locale";
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
            <h1 className="text-gray-800 font-bold text-2xl mb-4">
                Tidrapporter för {format(date, "dd MMMM yyyy")}
            </h1>
            <div className="flex justify-end mb-4">
                <input
                    type="date"
                    value={format(date, "yyyy-MM-dd")}
                    onChange={handleDateChange}
                    className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-48 sm:text-sm border rounded-md"
                />
                <button

                    className="ml-4 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Visa
                </button>
            </div>
            <ul className="divide-y divide-gray-200">
                {filteredReports.length > 0 ? (
                    filteredReports.map((report) => (
                        <li key={report.id} className="py-4">
                            <div className="flex justify-between">
                                <h2 className="text-lg font-medium">{report.projectInfo}</h2>
                                <p className="text-gray-500 text-sm">{report.username}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-500 text-sm">{format(new Date(report.date), "dd MMMM yyyy", { locale: sv })}</p>
                                <p className="text-gray-500 text-sm">{report.timeIn} - {report.timeOut}</p>
                            </div>
                            <p className="text-gray-700">{report.description}</p>
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

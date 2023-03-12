import path from "path";
import fs from "fs";

export default function handler(req, res) {
    const dataFilePath = path.join(process.cwd(), "public", "data.json");
    const jsonData = fs.readFileSync(dataFilePath, "utf-8");
    const data = JSON.parse(jsonData);
    res.status(200).json(data.reports);
}

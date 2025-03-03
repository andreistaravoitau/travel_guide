'use server';
import axios from "axios";
import { PKIN_ID, SERP_API_URL } from "@/constants";
import fs from "fs";

const placeId = PKIN_ID;
const API_KEY = process.env.VITE_API_KEY;
const API_URL = SERP_API_URL;


export const fetchGooglePlaceData = async() => {
    try {
        // console.log("Fetching rating...", API_URL);
        // const placeData = await axios.get(API_URL, {
        //     params: {
        //         api_key: API_KEY,
        //         engine: "google_maps",
        //         place_id: placeId,
        //         hl: "en",
        //     },
        // });

        // const data = placeData.data;
        const data = JSON.parse(fs.readFileSync("placeData.json", "utf-8"));
        console.log(data);
        return data || null;
    } catch (error) {
        console.error("Error fetching rating:", error);
        return null;
    }
}
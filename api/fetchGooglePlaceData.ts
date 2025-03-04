'use server';

import axios from "axios";
import { PKIN_ID, SERP_API_URL } from "@/constants";
import fs from "fs";

const placeId = PKIN_ID;
const API_KEY = process.env.VITE_API_KEY;
const API_URL = SERP_API_URL;
const env = process.env.NODE_ENV;

export const fetchGooglePlaceData = async() => {
    try {
        let data;
        if (env === "production") {
            console.log("Fetching rating...", API_URL);
            const responce = await axios.get(API_URL, {
                params: {
                    api_key: API_KEY,
                    engine: "google_maps",
                    place_id: placeId,
                    hl: "en",
                },
            });
            data = responce.data;
        }
        else {
            data = JSON.parse(fs.readFileSync("placeData.json", "utf-8"));
        }
        return data || null;
    } catch (error) {
        console.error("Error fetching rating:", error);
        return null;
    }
}
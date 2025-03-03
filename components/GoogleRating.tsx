'use client';

import React, { useState, useEffect } from "react";
import { fetchGooglePlaceData } from "@/api/fetchGooglePlaceData";
import StarDisplay from "./StarDisplay";

const GoogleRating = () => {
    const [rating, setRating] = useState<number|null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string|null>(null);

    useEffect(() => {
        const loadRating = async () => {
            setLoading(true);
            setError(null);
            
            const ratingData = await fetchGooglePlaceData();
            if (ratingData) {   
                console.log(ratingData.place_results.rating);
                setRating(ratingData.place_results.rating);
            }
            else {
                setError("Error fetching rating");
            }
            setLoading(false);
        };
        
        loadRating();
    }, []);
    
    return (
        <div>
            {loading ? <p>Loading rating...</p> :error ? <p>{error}</p> : <StarDisplay rating={rating} />}
        </div>
    );
};

export default GoogleRating;
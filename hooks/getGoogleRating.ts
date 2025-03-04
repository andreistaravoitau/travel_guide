import { useState, useEffect } from "react";
import { fetchGooglePlaceData } from "@/api/fetchGooglePlaceData";

const GoogleRating = () => {
    const [rating, setRating] = useState<number|null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string|null>(null);

    useEffect(() => {
        const loadRating = async () => {
            try {                
                const placeData = await fetchGooglePlaceData();
                const rating = placeData?.place_results?.rating;
                if (typeof rating === "number") {   
                    setRating(rating);
                } else {
                    setError("Rating in responce is not found");
                }
            } catch (err) {
                setError("Error fetching rating");
            } finally {
                setLoading(false);
            }
        };
        
        loadRating();
    }, []);
    
    return { rating, loading, error };
};

export default GoogleRating;
'use client';

import StarDisplay from "./StarDisplay";
import getGoogleRating from "@/hooks/getGoogleRating";

const GoogleRating = () => {
    const {rating, loading, error} = getGoogleRating();

    if (loading) return <p>Loading rating...</p>;
    if (error) return <p>{error}</p>;
    
    return (
        <StarDisplay rating={rating} />
    );
};

export default GoogleRating;
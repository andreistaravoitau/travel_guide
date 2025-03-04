import {Rating} from "@mui/material";

interface StarDisplayProps {
    rating: number|null;
}

const StarDisplay: React.FC<StarDisplayProps> = ({rating}) => {
    return (
        <Rating 
            name="google-rating" 
            value={rating} 
            precision={0.1} 
            readOnly 
        />
    );
}

export default StarDisplay;
import React, {useState, useEffect} from 'react';


function Star_rating({productId, userId}) {
    const [selectedRating, setSelectedRating] = useState(0);
    const [cmt, setCmt] = useState('');
    const [starCount, setStarCount] = useState(0);

    useEffect(()=>{
        fetchStarCount();
    }, []);

    const handleRatingChange = (rating) => {
        setSelectedRating(rating);
    }

    const handleCmtChange = (e) => {
        setCmt(e.target.value);
    }

    const handleSubmitRating = () => {
        if (selectedRating === 0) {
            alert('Hay chon so sao')
            return;
        }

        const ratingData = {
            id_product: productId,
            id_user: userId,
            star: selectedRating,
            cmt: cmt,
        };
    }

     
}
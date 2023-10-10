import React from "react";
import Typography from '@mui/material/Typography';
import CarForms from "../forms/CarForms";

function Add() {
    const handleCarFormSubmit = (data) => {
        // Handle the form submission logic here
        console.log("Form submitted with data:", data);
    }

    return (
        <>
            <Typography variant="h2" component="h1">
                Add Car
            </Typography>
            <CarForm submitHandler={handleCarFormSubmit} />
        </>
    )
}

export default Add;

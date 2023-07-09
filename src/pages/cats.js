import React from "react";
import "./../styles/index.css";
import ImageGallery from "../components/galery";
import { Box, Container } from "@mui/material";
class Cats extends React.Component {
    createGalery = () => {
        const gallery1Images = [
            { src: 'imagen1.jpg', title: 'Imagen 1' },
            { src: 'imagen2.jpg', title: 'Imagen 2' }
        ];

        return <ImageGallery images={gallery1Images} title="Galería 1" />
    }
    render() {
    return (
        this.createGalery()
    );
  }
}

export default Cats;

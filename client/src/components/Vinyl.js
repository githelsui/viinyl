import React from "react";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { mergeClasses } from "@material-ui/styles";

const Vinyl = ({item}) => {
    return (
        <Card className='vinyl'>
            <CardMedia className='vinyl-image' images={item.image} title={item.name}/>
            <CardContent/>
        </Card>
    )
}

export default Vinyl;
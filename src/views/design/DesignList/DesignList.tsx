import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {IconButton, Grid, Typography, Container} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import mockData from './component/data';
import DesignListToolBar from "./component/DesignListToolBar";
import DesignCard from "./component/DesignCard";

const useStyles = makeStyles((theme: any) => ({
    root: {
        padding: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(2)
    },
    pagination: {
        marginTop: theme.spacing(3),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
}));

const DesginList = () => {
    const classes = useStyles();

    const [products] = useState(mockData);

    return (
        <Container>
        <div className={classes.root}>
            <DesignListToolBar />
            <div className={classes.content}>
                <Grid
                    container
                    spacing={3}
                >
                    {products.map(product => (
                        <Grid
                            item
                            key={product.id}
                            lg={4}
                            md={6}
                            xs={12}
                        >
                            <DesignCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <div className={classes.pagination}>
                <Typography variant="caption">1-6 of 20</Typography>
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
            </div>
        </div>
        </Container>
    );
};

export default DesginList;
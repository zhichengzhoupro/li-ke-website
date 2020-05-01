import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Container, Grid, IconButton, Typography} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DesignListToolBar from "./component/DesignListToolBar";
import DesignCard from "./component/DesignCard";
import {useStores} from "../../../store/use-stores";
import {observer} from "mobx-react";

const useStyles = makeStyles((theme: any) => ({
    container: {
        marginLeft: '17%'
    },
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

    const {DesignStore} = useStores();

    return (
        <Container className={classes.container}>
            <div className={classes.root}>
                <DesignListToolBar/>
                <div className={classes.content}>
                    <Grid
                        container
                        spacing={3}
                    >
                        {DesignStore.designList.map((product: any) => (
                            <Grid
                                item
                                key={product.id}
                                lg={4}
                                md={6}
                                xs={12}
                            >
                                <DesignCard product={product}/>
                            </Grid>
                        ))}
                    </Grid>
                </div>
                <div className={classes.pagination}>
                    <Typography variant="caption">1-6 of 20</Typography>
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                </div>
            </div>
        </Container>
    );
};

export default observer(DesginList);
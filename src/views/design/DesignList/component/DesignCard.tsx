import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';
import {observer} from "mobx-react";
import {useHistory} from "react-router";

const useStyles = makeStyles((theme:any) => ({
    root: {},
    media: {
        height: 140,
    },
    imageContainer: {
        height: 64,
        width: 64,
        margin: '0 auto',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: '5px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%'
    },
    statsItem: {
        display: 'flex',
        alignItems: 'center'
    },
    statsIcon: {
        color: theme.palette.icon,
        marginRight: theme.spacing(1)
    }
}));

const ProductCard = (props: any) => {
    const { className, product, ...rest } = props;

    const classes = useStyles();

    const history = useHistory();

    const goToDesignDetailPage = () => {
        history.push(`/design/detail/${product.id}`);
    }

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardActionArea onClick={(e) => goToDesignDetailPage()}>
                <CardMedia
                    className={classes.media}
                    image={product.imageUrl}
                    title="Contemplative Reptile"
                />

                <CardContent>
                    <Typography
                        align="center"
                        gutterBottom
                        variant="h6"
                    >
                        {product.title}
                    </Typography>
                    <Typography
                        align="center"
                        variant="body1"
                    >
                        {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

ProductCard.propTypes = {
    className: PropTypes.string,
    product: PropTypes.object.isRequired
};

export default observer(ProductCard);
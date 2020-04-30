import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';

import {SearchInput} from '../../../../components';
import {observer} from "mobx-react";

const useStyles = makeStyles((theme:any) => ({
    root: {},
    row: {
        height: '42px',
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(1)
    },
    spacer: {
        flexGrow: 1
    },
    importButton: {
        marginRight: theme.spacing(1)
    },
    exportButton: {
        marginRight: theme.spacing(1)
    },
    searchInput: {
        marginRight: theme.spacing(1)
    }
}));

const DesignListToolBar = (props: any) => {
    const { className, ...rest } = props;

    const classes = useStyles();

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <div className={classes.row}>
                <span className={classes.spacer} />


            </div>
            <div className={classes.row}>
                <SearchInput
                    className={classes.searchInput}

                />
            </div>
        </div>
    );
};

DesignListToolBar.propTypes = {
    className: PropTypes.string
};

export default observer(DesignListToolBar);
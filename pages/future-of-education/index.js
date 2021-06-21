import Head from 'next/head'
import * as React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Navigation from '../../components/Menu/Navigation'
import Background from '../../components/HelpComponents/Background'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#2b2b2b',
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        zIndex: '-1',
    },
    main: {
        zIndex: 999,
    },
    gridLabelMain: {
        paddingLeft: 16,
        cursor: 'default',
        zIndex: 999,
    },
    gridLabelSecondary: {
        paddingLeft: 16,
        paddingRight: 16,
        cursor: 'default',
        paddingTop: 16,
        zIndex: 999,
    },
    gridLabelSecondarytwo: {
        paddingLeft: 16,
        paddingRight: 16,
        cursor: 'default',
        paddingTop: 2,
    },
    labelSecondarytwo: {
        zIndex: 999,
        fontSize: 20,
        color: theme.main.palette.header.text,
    },
    labelMain: {
        fontWeight: 'bold',
        color: theme.main.palette.header.text,
        fontSize: 48,
        zIndex: 999,
    },
    labelSecondary: {
        color: theme.main.palette.header.text,
        fontSize: 20,
        zIndex: 999,
    },
    gridDivider: {
        marginTop: '70vh',
        marginBottom: '100px',
        marginLeft: '10px',
        marginRight: '10px',
        width: 'auto',
    },
    divider: {
        zIndex: 999,
        height: 2,
        // width: 'auto',
        // marginLeft: '10px',
        // marginRight: '10px',
        backgroundColor: theme.main.palette.content.text,
    },
    gridroot: {
        width: '100vw',
        minHeight: '100vh',
    },
}));



export default function FutureOfEducation() {
    const classes = useStyles();
    const theme = useTheme();

    const wallpapers = () => {
        let count = Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1))) + Math.ceil(1)
        return "/wallpapers/hp" + count.toString() + ".jpg"
    }

    return (
        <>
            <Head>
                <title>
                    Ξ Будущее образования
                </title>
            </Head>
            <div className={classes.root}>
                <Background src={wallpapers()} />
                <Grid
                    className={classes.gridroot}
                    container
                    direction="column"
                    alignItems="center"
                    justify="space-between">
                    <Grid item container justify="flex-start" direction="column" alignItems="center">
                        <Navigation />
                    </Grid>
                    <Grid item container direction="column" alignItems="center" className={classes.gridLabelMain}>
                        <Typography className={classes.labelMain}> Будущее образования </Typography>
                        <Typography className={classes.labelSecondary}> А здесь мы расскажем о некоторых концепциях, которые мы хотели бы реализовать чуть позже, основываясь на цифровом образовании.</Typography>
                    </Grid>
                    <Grid item container>

                    </Grid>
                </Grid>
            </div>
        </>
    );
}
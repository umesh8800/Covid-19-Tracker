import React from 'react';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';



import { Card,CardContent,Typography,Grid} from '@material-ui/core';

function Cards({data:{confirmed, recovered, deaths,lastUpdate}}) {
    console.log(confirmed)
    if (!confirmed){
        return "Loading ..."
    }
    // console.log (props)
    return (
        <> <div>
            <h1 style={{position:"absolute", top:"8%",left:'44%'}}> C🦠VID - 19 </h1>
        </div>
        
    
        <Card className={styles.container} style={{padding:"50px",marginTop:"12rem"}}> 
        

            <Grid container spacing={3} justify='center'>
                <Grid  className={(styles.card,styles.infected)}></Grid>
                <CardContent>
                    <Typography className="name" color='textSecondary' gutterBottom> Infected</Typography>
                    <Typography className='hr' variant='h5'>
                        <CountUp 
                        start={0}
                        end={confirmed.value}
                        duration={1.5}
                        separator=","
                        />
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate) .toDateString() }</Typography>
                    <Typography variant='body2'>Number of active cases of covid-19</Typography>
                </CardContent>
            </Grid>
            

            <Grid container spacing={3} justify='center'>
            <Grid className={cx(styles.card,styles.recovered)}></Grid>
                <CardContent>
                    <Typography className="name" color='textSecondary' gutterBottom> Recovered</Typography>
                    <Typography variant='h5'>
                        <CountUp 
                        start={0}
                        end={recovered.value}
                        duration={1.5}
                        separator=","
                        />
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate) .toDateString() }</Typography>
                    <Typography variant='body2'>Number of active cases of covid-19</Typography>
                </CardContent>
            </Grid>


            <Grid container spacing={3} justify='center'>
            <Grid className={cx(styles.card,styles.deaths)}></Grid>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom> Deaths </Typography>
                    <Typography variant='h5'>
                        <CountUp 
                        start={0}
                        end={deaths.value}
                        duration={1.5}
                        separator=","
                        />
                    </Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate) .toDateString() }</Typography>
                    <Typography variant='body2'>Number of active cases of covid-19</Typography>
                </CardContent>
            </Grid>
            
    
        </Card>
        </>
    )
}

export default Cards

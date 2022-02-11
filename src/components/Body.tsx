import { Button, Card, CardActions, CardContent, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState}from 'react'
import axios from 'axios'

 const BodyComponent = () => {
     const card_ = Array.from({ length: 10 }, (_, i) => i + 1)
     let lat = '13.779820829768585'
     let long = '100.54464812602707'
     const  [results, setResults] = useState([])
     useEffect(() => {
         axios.get(`/json?query=coffee+shop&location=35.792491,-78.653009&radius=2000®ion=us&type=cafe,bakery&key=AIzaSyA6lxj2XLZ1d-czpM1IVWpkPdbqVSHBUaw`)
            .then(res => {
                console.log(res.data.results)
                setResults(res.data.results)
            })
            .catch(err => console.log(err))
        }, [])
   
  return (
      <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
              {results.length ? results.map((value,i) => (
                  <Grid key={i} item>
                      <Card sx={{ minWidth: 500 }}>
                          <CardContent>
                              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                  Word of the Day
                              </Typography>
                              <Typography variant="h5" component="div">
                                
                              </Typography>
                              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                  adjective
                              </Typography>
                              <Typography variant="body2">
                                  well meaning and kindly.
                                  <br />
                                  {'"a benevolent smile"'}
                              </Typography>
                          </CardContent>
                          <CardActions>
                              <Button size="small">Learn More</Button>
                          </CardActions>
                      </Card>
                  </Grid>
              )):<></>}
          </Grid>
      </Grid>
  )
}
export default BodyComponent
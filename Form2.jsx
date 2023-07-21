import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { Form } from 'react-router-dom'

const Form2 = () => {
    // State variables for form fields
    const [Nameofrequirement, setNameofrequirement] = React.useState('');
    const [requirement, setRequirement] = React.useState('');
    const [Noofhours, setNoofhours] = React.useState('');
    const [areaofrequirement, setAreaofrequirement] = React.useState('');
    const [category, setCategory] = React.useState('');

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data here or submit it to the backend
        console.log({
            Nameofrequirement,
            requirement,
            Noofhours,
            areaofrequirement,
            category,
        });
        // Reset form fields
        setNameofrequirement('');
        setRequirement('');
        setNoofhours('');
        setAreaofrequirement('');
        setCategory('');
    };

    return (
        <div className='text-center mt-4 '>
            <Typography variant='h4'>
                Requirement Form
            </Typography>
            <br />

            <form onSubmit={handleSubmit}>
                <Grid  >
                    <Grid item xs={6} >
                        <TextField
                        variant="standard"
                            label="Name of requirement"
                            sx={{ minWidth: 380 }}
                            value={Nameofrequirement}
                            onChange={(e) => setNameofrequirement(e.target.value)}
                            required
                        />
                    </Grid>
                    <br />
                    <Grid item xs={6}>
                        <FormControl sx={{ minWidth: 380 }} variant="standard"  required>
                            <InputLabel>Area of requirement</InputLabel>
                            <Select
                                value={areaofrequirement}
                                onChange={(e) => setAreaofrequirement(e.target.value)}
                                required
                                sx={{ minWidth: 300 }}
                            >
                                <MenuItem value="FSD">FSD</MenuItem>
                                <MenuItem value="ML-AI">ML-AI</MenuItem>
                                <MenuItem value="DSA">DSA</MenuItem>
                                <MenuItem value="RPA">RPA</MenuItem>
                                <MenuItem value="ST">ST</MenuItem>
                                <MenuItem value="CSA">CSA</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <br />
                    <Grid item xs={6}>
                        <TextField
                        variant="standard"
                            label="Where the requirement came"
                            sx={{ minWidth: 380 }}
                            value={requirement}
                            onChange={(e) => setRequirement(e.target.value)}
                            required
                        />
                    </Grid>
                    <br />
                    <Grid item xs={6}>
                        <FormControl sx={{ minWidth: 380 }} variant="standard"  required>
                            <InputLabel>Category of requirement</InputLabel>
                            <Select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            >
                                <MenuItem value="Retail">Retail</MenuItem>
                                <MenuItem value="Academic">Academic</MenuItem>
                                <MenuItem value="Corporate">Corporate</MenuItem>
                                <MenuItem value="Government">Government</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <br />

                    <Grid item xs={12}>
                        <TextField
                        variant="standard"
                            label="No.of hours of training"
                            sx={{ minWidth: 380 }}
                            value={Noofhours}
                            onChange={(e) => setNoofhours(e.target.value)}
                            required
                            
                        />
                    </Grid>
                    <br />


                    <br />

                    

                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                           Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>




        </div>
    )
}

export default Form2
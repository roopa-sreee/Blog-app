import React, { useState } from 'react'
import { Box, Typography, TextField, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Register = () => {
  const navigate = useNavigate()
  
  // state
  const [inputs,setInputs] = useState({
    name:"",
    email:'',
    password:'',
  })

  //onchangeevent
  const onChangeInput = e => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const {data} = await axios.post('/api/v1/user/register',{
        username:inputs.name,
        email:inputs.email,
        password:inputs.password
      })
      if (data.success){
        toast.success('User Registered Successfully')
        navigate('/login')
      }
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box 
          maxWidth={450} 
          display={'flex'} 
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          margin={'auto'}
          marginTop={5}
          boxShadow = '10px 10px 20px #ccc'
          padding={3}
          borderRadius={5}
        >
          <Typography
            variant='h4'
            sx={{textTransform:"uppercase", color:'green'}}
            padding={3}
            textAlign={'center'}
            
          >
            Register
          </Typography>
          <TextField  
            placeholder='Name'
            name='name'
            value={inputs.name}
            onChange={onChangeInput}
            margin='normal'
            type='text'
            required
          />
          <TextField 
            placeholder='Email'
            name='email'
            value={inputs.email}
            onChange={onChangeInput}
            margin='normal'
            type={'email'}
            required
          />
          <TextField 
            placeholder='password'
            name='password'
            value={inputs.password}
            onChange={onChangeInput}
            margin='normal'
            type='password'
            required
          />
          <Button
            type='submit'
            sx={{borderRadius: 3, marginTop: 3}}
            color='success'     
            variant='contained'     
          >
            Submit
          </Button>
          <Button
            type='submit'
            sx={{borderRadius: 3, marginTop: 3}}
            color='primary'   
            onClick={() => navigate('/login')}       
          >
            Already Registerd?   Login
          </Button>
        </Box>
      </form>      
    </>
  )
}

export default Register



















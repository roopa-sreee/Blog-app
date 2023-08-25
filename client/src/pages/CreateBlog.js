import React, { useState } from 'react'
import { Box, InputLabel, TextField, Typography,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const CreateBlog = () => {
    const id = localStorage.getItem('userId')
    const navigate = useNavigate()
    const [inputs,setInputs] = useState({
        title:'',
        description:'',
        image:''
    })

    //onChange event 
    const onChangeInput = e => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const onClickCreateBlog =async(e) => {
        e.preventDefault();
        try{
            const { data } = await axios.post('/api/v1/blog/create-blog',{
                title:inputs.title,
                description:inputs.description,
                image:inputs.image,
                user:id
            })

            if (data?.success){
                alert("Blog Created Successfully")
                navigate('/my-blogs')
            }

        }catch(error){
            console.log(error)
        }
    }
  return (
    <>
      <form onSubmit={onClickCreateBlog}>
        <Box 
            border={3} 
            borderRadius={20} 
            padding={3} 
            margin={'auto'} 
            boxShadow={'10px 10px 20px #ccc'}
            width={'60%'}
            display={'flex'}
            flexDirection={'column'}    
            marginTop={15}        
        >
            <Typography 
              variant='h4' 
              textAlign={'center'}
              fontWeight={'bold'}
              padding={3}
              color={'green'}
            >
            create New Blog
            </Typography>
            <InputLabel sx={{ml:1, mb:1, mt:2, fontSize:'24px', fontWeight:'bold'}} >Title</InputLabel>
            <TextField name='title' value={inputs.title} onChange={onChangeInput} margin='normal' variant='outlined' required />
            <InputLabel sx={{ml:1, mb:1, mt:2, fontSize:'24px', fontWeight:'bold'}} >Description</InputLabel>
            <TextField name='description' value={inputs.description} onChange={onChangeInput} margin='normal' variant='outlined' required />
            <InputLabel sx={{ml:1, mb:1, mt:2, fontSize:'24px', fontWeight:'bold'}} >ImageUrl</InputLabel>
            <TextField name='image' value={inputs.image} onChange={onChangeInput} margin='normal' variant='outlined' required />
            <Button type='submit' color='success' variant='contained' >
                CreateBlog
            </Button>
        </Box>
      </form>
    </>
  )
}

export default CreateBlog

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast";

export default function BlogCard({title,description,image, time, username,id, isUser}) {
  
  const navigate = useNavigate()
  // onClick edit 
  const edit = () => {
    navigate(`/blog-details/${id}`);
  }
  const deleteFunction = async() =>{
    try{
      const { data } = await axios.delete(`/api/v1/blog/delete-blog/${id}`);
      if (data?.success){
         toast.success("Blog Deleted")
        navigate('/my-blogs')
      }
    }
    catch(error){
      console.log(error)
    }    
  }

  return (
    <Card sx={{ width:'35%', margin:'auto', mt:2,padding:2,boxShadow:'5px 5px 10px #ccc', ':hover':{
        boxShadow:"10px 10px 10px #ccc",
    } }}>

      {isUser && (
        <Box display={'flex'}>
          <IconButton onClick ={edit} sx={{marginLeft:'auto'}}>
            <ModeEditIcon />
          </IconButton>
          <IconButton onClick={deleteFunction}>
             <DeleteIcon />
          </IconButton>
        </Box>
      )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {username}
          </Avatar>
        }
        title={title}
        subheader={time}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant='h6' color={'warning'}>
           Title:{title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description : {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
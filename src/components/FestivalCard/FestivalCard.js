import { Link } from 'react-router-dom';
import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AttractionsRoundedIcon from '@mui/icons-material/AttractionsRounded';
import { Container} from '@mui/system';
import './FestivalCard.css'


 function TitlebarImageList({_id, name, image, type, startDate, endDate}) {
  <div>
      <Link to='/festival/add'><h2>Create an Upcoming Festival</h2></Link>
    </div>
  return (
    <Container sx={{width: '20vw'}}>
    <ImageList sx={{width: '35vw', height: '35vh', mb: 1}}>
        <ImageListItem key={_id}>
          <img 
            src={image}
            srcSet={image}
            alt={''}
            loading="lazy"
          />
          <ImageListItemBar sx={{bgcolor: '#DCCCBC'}}
            title={<Link className='card-link' to={`/festival/${_id}`}>{name}</Link>}
            subtitle={type}
            actionIcon={
              <IconButton
                sx={{ color: '#FFFFFF' }}
              >
                <AttractionsRoundedIcon />
              </IconButton>
            }
          />
        </ImageListItem>
    </ImageList>
    </Container>
 
  );
}

export default TitlebarImageList;
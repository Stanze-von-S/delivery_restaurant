import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// кастомный бэйдж через метод {style} из MUI-styles
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 10,
    top: 14,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '13px 10px',
    borderRadius: '20px'
  },
}));

export default function CartView({ product }) {

  const [count, setCount] = React.useState(1);

  return (

    <Card sx={{ display: 'flex', margin: '10px', borderRadius: '10px' }}>
      
      <StyledBadge badgeContent={count} color="secondary">
        <CardMedia
          component="img"
          sx={{ width: 150, margin: '10px', borderRadius: '10px' }}
          image={product.picture}
          alt="Live from space album cover"
        />
      </StyledBadge>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>

        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {product.name}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" component="div">
            Цена: {product.price}
          </Typography>
        </CardContent>

        <ButtonGroup sx={{ paddingBottom: '10px', paddingLeft: '20px' }} >
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>

          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>

      </Box>

    </Card>
  );
}
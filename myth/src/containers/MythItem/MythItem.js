import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import styledMythItem from '../MytItemDetail/MythItemDetail.css';
import _ from 'lodash';

const MythItem = (props) => {
  const showData = () => {
    return (
      <Card className={styledMythItem.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.name}
            height="150"
            image={props.imagePath}
            title={props.name}
          />
        </CardActionArea>
        <CardActions className={styledMythItem.footer}>
        {props.name}
        </CardActions>
      </Card>
    );
  };

  return <div>{showData()}</div>;
};
export default MythItem;

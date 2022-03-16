// first type 'rfce' then press ENTER. a basic skeleton of a react component will appear which includes the IMPORT and also gets it ready to be EXPORTABLE as shown around the end
// rfce = REACT FUNCTIONAL COMPONENT with an EXPORT

import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, ImageList, Avatar} from '@mui/material';



function Todo(props) {
  return (
    // we replaced <div> to use MUI's <List>, <ListItem> and <ListItemText> tags instead
    // this will show all tasks(secondary) under its own headline(primary)
    <List className="todo__list">
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <ImageList />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.text} secondary="Deadline..." />
        </ListItem>
    </List>
  )
}

export default Todo;
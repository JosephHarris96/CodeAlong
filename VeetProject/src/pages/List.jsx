import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List"; // Correct import statement
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";
import EditIcon from "@mui/icons-material/Edit";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";

function CarsList() {
  const cars = [
    {
      _id: 1,
      name: 'Ferrari',
      bhp: 1234,
      avatar_url: "https://www.supercars.net/blog/wp-content/uploads/2022/02/Ferrari-SF90-Stradale-1.jpg",
    },
    {
      _id: 2,
      name: 'Bugatti',
      bhp: 666,
      avatar_url: "data:image/jpeg;base64,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"
    }
  ];
  return (
    <List>
      {cars.map(({ name, bhp, avatar_url, _id }, i) => (
        <ListItem key={i}>
          <ListItemAvatar>
            <Avatar alt="" src={avatar_url}></Avatar>
          </ListItemAvatar>
          <ListItemText>
            {name} (BHP: {bhp})
          </ListItemText>
          <IconButton
            aria-label="update"
            to={`/update/${_id}`}
            component={Link}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => console.log(`Delete ${_id}`)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}
  




      /* {cars.map((car) => (
        <ListItem key={car._id}>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={car.name}
            secondary={`BHP: ${car.bhp}`}
          />
          <Avatar alt={car.name} src={car.avatar_url} />
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  )
// } */

export default CarsList;

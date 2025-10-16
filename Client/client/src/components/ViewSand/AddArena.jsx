import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Modal, Button, TextField } from '@mui/material';

const AddArena = () => {
    const [modal, setModal] = useState(false);
    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newImg, setNewImg] = useState("");

    const handleOpenMod = () => {
        setModal(true);
    }
    const handleCloseMod = () => {
        setModal(false);
    }
    const handleNewImg = (e) => {
        setNewImg(e.target.value);
    }
    const handleNewDescription = (e) => {
        setNewDescription(e.target.value);
    }
    const handleNewName = (e) => {
        setNewName(e.target.value);
    }

    const handleNewArena = async (e) => {
        e.preventDefault
        const newArena = {
            arena_name: newName,
            arena_description: newDescription,
            arena_image_url: newImg,
        };
        try {
            const responeee = await fetch(`http://localhost:8080/arenas`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newArena)
            });
            

            if (responeee.ok) {
                alert("se creo con exito");
            }
            setNewDescription("");
            setNewName("");
            setNewImg("");
            
        } catch (error) {
            console.error("Error:", error);
            alert("error");
        }
         
    }
    


    return (
        <>
            <div>
                <Card sx={{ maxWidth: { xs: "100%", sm: 345 }, border: '1px solid #E3E0C3', backgroundColor: '#212121', textAlign: 'center', m: 1 }}>
                    {/* <CardActionArea> */}
                    <CardMedia
                        component="img"
                        height="250"
                        image="https://placehold.co/200x200?text=Nueva Arena"
                        alt="green iguana"
                    />
                    <CardContent sx={{ height: 128 }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#E3E0C3", fontFamily: "Anton" }}>
                            name
                        </Typography>

                        <Button
                            variant="outlined"
                            sx={{ mt: 1, borderColor: "#E3E0C3", color: "#E3E0C3", fontFamily: "Anton" }}
                            onClick={handleOpenMod}
                        >
                            Agregar Arena
                        </Button>
                    
                    </CardContent>

                </Card>
            </div>
    
            <Modal open={modal} onClose={handleCloseMod}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2
                    }}
                >
                    <TextField
                        label="Imagen"
                        name="image_url"
                        value={newImg}
                        onChange={handleNewImg}
                        fullWidth
                    />
                    <TextField
                        label="Nombre"
                        name="name"
                        value={newName}
                        onChange={handleNewName}
                        fullWidth
                    />
                    <TextField
                        label="Descripción"
                        name="description"
                        value={newDescription}
                        onChange={handleNewDescription}
                        fullWidth
                        multiline
                    />

                    <Button variant="contained" onClick={handleNewArena}  >
                        Guardar
                    </Button>
                </Box>
            </Modal>
        </>
    );
}

export default AddArena;
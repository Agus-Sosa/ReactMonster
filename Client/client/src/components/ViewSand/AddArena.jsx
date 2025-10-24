import React, { useState, useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Modal, Button, TextField } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';


const AddArena = ({ fetchArenas }) => {
    const whiteTextField = {
  input: { color: 'white' },
  label: { color: 'white' },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: 'white' },
    '&:hover fieldset': { borderColor: '#E3E0C3' },
    '&.Mui-focused fieldset': { borderColor: '#E3E0C3' },
  },
};

    const { user, token } = useContext(AuthContext);
    
    // constant that is assigned the user's role and depending on his or her role, the component is rendered or not
    // constante que se le asigna el rol de el usuario y dependiendo su rol renderiza o no el componente
    const isAdmin = user?.role === 'admin' || user?.role === 'superadmin';
    if (!isAdmin) {
        return null;
    }
    

    const [modal, setModal] = useState(false);
    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newImg, setNewImg] = useState("");

    //functions to handle the modal
    //funciones para manejar el modal 
    const handleOpenMod = () => {
        setModal(true);
    }
    const handleCloseMod = () => {
        setModal(false);
        setNewDescription("");
        setNewName("");
        setNewImg("");
    }
    //functions to handle state
    //funciones para manejar los estados
    const handleNewImg = (e) => {
        setNewImg(e.target.value);
    }
    const handleNewDescription = (e) => {
        setNewDescription(e.target.value);
    }
    const handleNewName = (e) => {
        setNewName(e.target.value);
    }
    //management of the new sand that was loaded, validating the data and sending it to the back
    //manejo de la nueva arena que fue cargada,validando los datos y enviandolos al back
    const handleNewArena = async (e) => {
        e.preventDefault()
        const newArena = {
            arena_name: newName.trim(),
            arena_description: newDescription.trim(),
            arena_image_url: newImg.trim(),
        };
        if (!newArena.arena_name || !newArena.arena_description || !newArena.arena_image_url) {
            toast.error("Se debe completar todos los campos antes de subir la arena.");
        return;
        }
        try {
            const responeee = await fetch(`http://localhost:8080/arenas`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "authorization":`bearer ${token}`
                },
                body: JSON.stringify(newArena)
            });
            

            if (responeee.ok) {
                toast.success('Arena creada correctamente.');
                }
                setNewDescription("");
                setNewName("");
                setNewImg("");
                handleCloseMod();
                fetchArenas();
        } catch (error) {
            toast.error('error al crear la Arena.');
        }
         
    }
    


    return (
        <>
            {/* exclusive card to create sand */}
            {/* carta exlusiva para crear arena */}
            <div>
                <Card sx={{
                    width: { xs: "100%", sm: 300, md: 345 },
                    height: { xs: 400, sm: 450 },
                    maxWidth: { xs: "100%", sm: 345 },
                    border: '1px solid #E3E0C3',
                    backgroundColor: '#212121',
                    textAlign: 'center',
                    m: 1
                }}>
                    {/* <CardActionArea> */}
                    <CardMedia
                        component="img"
                        height="250"
                        image="https://placehold.co/200x200?text= Create Arena"
                        alt="Create ARENA"
                    />
                    <CardContent sx={{ height: 128 }}>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#E3E0C3" }}>
                            Nombre Arena
                        </Typography>

                        <Button
                            variant="outlined"
                            sx={{ mt: 1, borderColor: "#E3E0C3", color: "#E3E0C3" }}
                            onClick={handleOpenMod}
                        >
                            Agregar Arena
                        </Button>
                    
                    </CardContent>

                </Card>
            </div>
            {/* The modal that appears when you click on add sand is a form that must be filled out with the information about the new sand. */}
            {/* modal que se habre al dar click en agregar arena, es un formulario que se debe rellenar con la informacion de la nueva arena */}
            <Modal open={modal} onClose={handleCloseMod}>
               
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "#212121",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        color: '#E3E0C3'
        
                    }}
                >
                    <h2>Crear Arena</h2>
                    <TextField
                        label="Imagen"
                        name="image_url"
                        value={newImg}
                        onChange={handleNewImg}
                        fullWidth
                        variant="outlined"
                        sx={whiteTextField}
                    />
                    <TextField
                        label="Nombre"
                        name="name"
                        value={newName}
                        onChange={handleNewName}
                        fullWidth
                        variant="outlined"
                        sx={whiteTextField}
                    />
                    <TextField
                        label="Descripción"
                        name="description"
                        value={newDescription}
                        onChange={handleNewDescription}
                        fullWidth
                        variant="outlined"
                        sx={whiteTextField}
                    />

                    <Button variant="contained" sx={{backgroundColor:"#8E1616"}} onClick={handleNewArena}  >
                        Guardar
                    </Button>
                    <Button variant="contained" sx={{backgroundColor:"#E3E0C3", color:"black"}} onClick={handleCloseMod}  >
                        Cancelar
                    </Button>
                </Box>
            </Modal>
        </>
    );
}

export default AddArena;
import React from 'react'

const DesactivateUserButton = ({isDeleted, idUser}) => {
  

    const handleDesactivate = async()=> {
        try {
            const res = await fetch(`http://localhost:8080/users/desactivate/${isDeleted.id}`, {
                    headers: { "Content-Type": "application/json" },
                    method:"PUT",
            })

            if(!res.ok) {
                console.log("Error al desactivar el usuario", res);

            }
            

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
        </>
  )
}

export default DesactivateUserButton
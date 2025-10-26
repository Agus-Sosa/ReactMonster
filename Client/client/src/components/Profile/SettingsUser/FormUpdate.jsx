import { Box } from '@mui/material'
import React from 'react'

const FormUpdate = ({onUpdate, inputFields}) => {
  
  
  
    return (
        <>
            {
                onUpdate ? (
                    <>
                        <Box component={"form"}>

                        </Box>
                    </>
                ) : (
                        <Box>

                        </Box>
                )
        }
        </>
)
}

export default FormUpdate
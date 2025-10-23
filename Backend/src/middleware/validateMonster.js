export const validateNewMonster = (req, res, next) => { 
    const { monster_role, monster_name, monster_description } = req.body;
    if (!monster_role || !monster_name || !monster_description) {
        return res.status(400).json({status:"error", message:"Faltan datos obligatorios"})
    }


    next();
}
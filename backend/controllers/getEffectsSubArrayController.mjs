import {getEffectsSubArray} from '../services/db_service.mjs';

const getEffectsSubArrayController = async (req, res) => {
        let i = req.body.ind;
    let l = req.body.len;
    console.log("recieved : " + i+" "+l);
    let subA = await getEffectsSubArray(i,l);
    console.log("000001" + subA);
    res.status(200).json(subA);

}




export {getEffectsSubArrayController}
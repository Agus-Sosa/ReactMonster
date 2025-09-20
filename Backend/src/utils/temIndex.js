import { tempArenaData } from "./tempArenasData.js";
import { tempMonsterData } from "./tempMonsterData.js";
import { tempNewsData } from "./tempNewsData.js";
import { tempUserData } from "./tempUserData.js"

export const tempDataIndex =async()=> {
    await tempUserData(); // aca se agregan las funciones que generan datos automaticamente
    await tempNewsData();
    await tempMonsterData(10);
    await tempArenaData();
}
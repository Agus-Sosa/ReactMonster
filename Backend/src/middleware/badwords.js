/* disclaimer para el tp, las malas palabras puestas aca son para evitar que se usen dentro del foro */
export function haveBadWord(texto) {
  const badWord = ['puta','hijodeputa','hijo de puta','mogolico','la concha de tu madre','pene','verga','pija','chupa pija','pelotudo','concha','vagina','macaco',
    'trolo','retrasado','br macaco','porno','imbecil','polla','nigga','niga','nigg4'
  ]
  const lower = texto.toLowerCase();
  return badWord.some(p => lower.includes(p.toLowerCase()));
  /*devuelve true si se encuentra una de esas palabras */
}
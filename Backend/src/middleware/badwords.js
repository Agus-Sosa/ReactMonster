
export function haveBadWord(texto) {
  const badWord = ['puta','hijodeputa','hijo de puta','mogolico','la concha de tu madre','pene','verga','pija','chupa pija','pelotudo','concha','vagina','macaco',
    'trolo','retrasado','br macaco','porno','imbecil','polla','nigga'
  ]
  const lower = texto.toLowerCase();
  return badWord.some(p => lower.includes(p.toLowerCase()));
}
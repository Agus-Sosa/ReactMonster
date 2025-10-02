/* Disclaimer for the TP, the bad words posted here are to prevent them from being used within the forum. */
function haveBadWord(texto) {
  const badWord = ['puta','hijodeputa','hijo de puta','mogolico','la concha de tu madre','pene','verga','pija','chupa pija','pelotudo','concha','vagina','macaco',
    'trolo','retrasado','br macaco','porno','imbecil','polla','nigga','niga','nigg4','hdp','mononeuronal,giga,ptm,lpm'
  ]
  const lower = texto.toLowerCase();
  return badWord.some(p => lower.includes(p.toLowerCase()));
  /*returns true if one of those words is found */
}
export default haveBadWord;
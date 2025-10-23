function timeAgo(isoString) {
  if (!isoString) return "";

  const date = new Date(isoString);
  if (isNaN(date)) return isoString; 

  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  if (seconds < 60) return `hace ${seconds} segundos`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `hace ${minutes} minutos`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `hace ${hours} horas`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `hace ${days} días`;

  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `hace ${weeks} semanas`;

  const months = Math.floor(days / 30);
  if (months < 12) return `hace ${months} meses`;

  const years = Math.floor(days / 365);
  return `hace ${years} años`;
}
export default timeAgo;
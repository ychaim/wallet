export function getFormattedDate(date_string){
  var date = new Date(date_string);
  return ((date.getDate())+"").padStart(2, '0') + "." + ((date.getMonth() + 1)+"").padStart(2, '0') + "." + date.getFullYear() + " " +
  (date.getHours()+"").padStart(2, '0') + ":" + (date.getMinutes()+"").padStart(2, '0');
}

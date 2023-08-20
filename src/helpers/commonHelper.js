export default function dateFormat(date){
    const getDate = date.split("T")
    let formattedDate = getDate[0].split("-")
    formattedDate = formattedDate[1] +"/"+ formattedDate[2] +"/"+ formattedDate[0]
    return formattedDate
}
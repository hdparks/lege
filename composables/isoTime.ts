import dayjs from "dayjs";

export function getIsoTime(){
  return dayjs().toISOString()
}

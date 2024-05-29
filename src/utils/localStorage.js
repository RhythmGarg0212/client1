export const Key_Access_Token="access_token";
export const count_User="countUser";
export const TeacherSubject="subject";
export const TeacherSem="sem";
export const StudentSem="sub";
export const StudentMIS="mis";
export const pollId="pollId";
export const teacherEmail="teacherEmail";
export const studentEmail="studentEmail";
export function getItem(key){
    return localStorage.getItem(key);
}
export function setItem(key,value){
    localStorage.setItem(key,value);
}
export function deleteUser(key){
    localStorage.removeItem(key)
}
// export function countUser(key,value){
//     return localStorage.setItem(key,value)
// }
// export function getCountUser(key){
//     return localStorage.getItem(key)
// }
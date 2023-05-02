export interface Subject {
    actual_year         : string,
    career_id           : number, 
    career_name         : string,
    duration            : string, 
    inscription_id      : number,
    materia_id          : number, 
    materia_name        : string, 
    professor           : string
    professor_id        : number 
    professor_last_name : string,
    student_id          : number
}

export interface SubjectExtended {
    actual_year         : string,
    career_id           : number, 
    career_name         : string,
    duration            : string, 
    inscription_id      : number,
    materia_id          : number, 
    materia_name        : string, 
    professor           : string
    professor_id        : number 
    professor_last_name : string,
    student_id          : number,
    classes_quantity    : number,
    total_classes       : number         
}
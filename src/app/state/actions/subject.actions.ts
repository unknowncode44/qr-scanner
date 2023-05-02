import { createAction, props }                          from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate }   from '@ngrx/entity';
import { SubjectExtended } from 'src/app/models/subject.model';

// los estudiantes solo podrian ver sus materias:
export const loadSubjects   = createAction('[Subject/API] Load Subjects'  , props<{ sbj: SubjectExtended[]}>());
export const addSubjects    = createAction('[Subject/API] Add Subjects'   , props<{ sbj: SubjectExtended[] }>())

// TODO: SI EL ADMIN VA A CREAR O INSCRIBIR A MAS MATERIAS, DEBEMOS CREAR LAS ACCIONES 
// TODO: SET, ADD, SET ONE, UPSERT, ADD MORE, UPSERT MORE, ETC 
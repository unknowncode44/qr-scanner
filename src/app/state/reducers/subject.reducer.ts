import { EntityAdapter, EntityState, createEntityAdapter }      from '@ngrx/entity'
import { createReducer, on } from '@ngrx/store';
import { SubjectExtended } from 'src/app/models/subject.model';
import * as SbjActions from '../actions/subject.actions'

export interface SubjectState extends EntityState<SubjectExtended> {
    selectedSubject: string | null
};

export function selectSubjectId(s: SubjectExtended): string {
    return s.materia_id.toString()
};

export function sortSubjectByName(s: SubjectExtended, t: SubjectExtended): number {
    return s.materia_name.localeCompare(t.materia_name)
};

export const subjectAdapter: EntityAdapter<SubjectExtended> = createEntityAdapter<SubjectExtended>({
    selectId    : selectSubjectId,
    sortComparer: sortSubjectByName,
});

export const subjectInitialState: SubjectState = subjectAdapter.getInitialState({
    selectedSubject: null
});

// reducer
export const subjectReducer = createReducer(
    subjectInitialState,
    on(SbjActions.loadSubjects, (state, { sbj }) => { return subjectAdapter.setAll(  sbj, state ) }),
    on(SbjActions.addSubjects,  (state, { sbj }) => { return subjectAdapter.addMany( sbj, state ) }),
)

export const getSelectedSbjId = (state: SubjectState) => state.selectedSubject

const {selectIds, selectEntities, selectAll, selectTotal} = subjectAdapter.getSelectors();

export const selectSubjectIds       = selectIds;
export const selectSubjectEntities  = selectEntities;
export const selectAllSubjects      = selectAll;
export const selectSubjectsTotal    = selectTotal;
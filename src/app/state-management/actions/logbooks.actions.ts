import { createAction, props } from "@ngrx/store";
import { Logbook } from "shared/sdk";
import { LogbookFilters } from "state-management/models";

export const fetchLogbooksAction = createAction("[Logbook] Fetch Logbooks");
export const fetchLogbooksCompleteAction = createAction(
  "[Logbook] Fetch Logbooks Complete",
  props<{ logbooks: Logbook[] }>()
);
export const fetchLogbooksFailedAction = createAction(
  "[Logbook] Fetch Logbooks Failed"
);

export const fetchLogbookAction = createAction(
  "[Logbook] Fetch Logbook",
  props<{ name: string }>()
);
export const fetchLogbookCompleteAction = createAction(
  "[Logbook] Fetch Logbook Complete",
  props<{ logbook: Logbook }>()
);
export const fetchLogbookFailedAction = createAction(
  "[Logbook] Fetch Logbook Failed"
);

export const fetchCountAction = createAction(
  "[Logbook] Fetch Count",
  props<{ name: string }>()
);
export const fetchCountCompleteAction = createAction(
  "[Logbook] Fetch Count Complete",
  props<{ count: number }>()
);
export const fetchCountFailedAction = createAction(
  "[Logbook] Fetch Count Failed"
);

export const prefillFiltersAction = createAction(
  "[Logbook] Prefill Filters",
  props<{ values: Partial<LogbookFilters> }>()
);

export const setTextFilterAction = createAction(
  "[Logbook] Set Text Filter",
  props<{ textSearch: string }>()
);

export const setDisplayFiltersAction = createAction(
  "[Logbook] Set Display Filters",
  props<{
    showBotMessages: boolean;
    showImages: boolean;
    showUserMessages: boolean;
  }>()
);

export const changePageAction = createAction(
  "[Logbook] Change Page",
  props<{ page: number; limit: number }>()
);

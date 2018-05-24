import { Action } from '@ngrx/store';
import { DatasetFilters } from 'state-management/models';
import { Dataset, AccessGroup, Datablock } from 'shared/sdk/models';
import { ViewMode, FacetCounts } from '../state/datasets.store';

export const SEARCH_COMPLETE =              '[Dataset] Search Complete';
export const SEARCH_FAILED =                '[Dataset] Search Failed';

export const SEARCH_ID =                    '[Dataset] Search ID';
export const SEARCH_ID_COMPLETE =           '[Dataset] Search ID Complete';
export const SEARCH_ID_FAILED =             '[Dataset] Search ID Failed';

export const FILTER_UPDATE =                '[Dataset] Filter Update';
export const FILTER_UPDATE_COMPLETE =       '[Dataset] Filter Update Complete';
export const FILTER_VALUE_UPDATE =          '[Dataset] Filter Update';
export const FILTER_FAILED =                '[Dataset] Filter Failed';

export const DATABLOCKS =                   '[Dataset] Datablocks Update';
export const DATABLOCKS_COMPLETE =          '[Dataset] Datablocks Update Complete';
export const DATABLOCKS_FAILED =            '[Dataset] Datablocks Failed';

export const DATABLOCK_DELETE =             '[Dataset] Datablock Delete';
export const DATABLOCK_DELETE_COMPLETE =    '[Dataset] Datablock Delete Complete';
export const DATABLOCK_DELETE_FAILED =      '[Dataset] Datablock Delete Failed';

export const ADD_GROUPS =                   '[User] Add Groups';
export const ADD_GROUPS_COMPLETE =          '[User] Add Groups Complete';
export const ADD_GROUPS_FAILED =            '[User] Add Groups Failed';

export const RESET_STATUS =                 '[Dataset] Status Reset';
export const RESET_STATUS_COMPLETE =        '[Dataset] Status Reset Complete';

export const LOAD =                         '[Dataset] Load';
export const COUNT_COMPLETE =               '[Dataset] Complete';
export const SELECT_CURRENT =               '[Dataset] Current set selected';
export const SELECTED_UPDATE =              '[Dataset] Selected Datasets Update';
export const SELECTED_DATABLOCKS_COMPLETE = '[Dataset] Selected Datablocks update complete';
export const CURRENT_BLOCKS_COMPLETE =      '[Dataset] Current set datablocks update complete';
export const TOTAL_UPDATE =                 '[Dataset] Total Datasets Update';
// export const FILTER_UPDATE_COMPLETE = '[Dataset]  Filter Update Complete';

export const SELECT_DATASET =               '[Dataset] Select Dataset';
export const DESELECT_DATASET =             '[Dataset] Deselect Dataset';
export const CLEAR_SELECTION =              '[Dataset] Clear Selection';

export const EXPORT_TO_CSV =                '[Dataset] Export to CSV';
export const SET_VIEW_MODE =                '[Dataset] Set View Mode';

export const FETCH_DATASETS =               '[Dataset] Fetch Datasets';
export const FETCH_DATASETS_COMPLETE =      '[Dataset] Fetch Datasets Complete';
export const FETCH_DATASETS_FAILED =        '[Dataset] Fetch Datasets Failed';

export const FETCH_FACET_COUNTS =           '[Dataset] Fetch Facet Counts';
export const FETCH_FACET_COUNTS_COMPLETE =  '[Dataset] Fetch Facet Counts Complete';
export const FETCH_FACET_COUNTS_FAILED =    '[Dataset] Fetch Facet Counts Failed';

export const CHANGE_PAGE =                  '[Dataset] Change Page';
export const SORT_BY_COLUMN =               '[Dataset] Sort by Column';
export const SET_SEARCH_TERMS =             '[Dataset] Set Search Terms';

export const ADD_LOCATION_FILTER =          '[Dataset] Add Location Filter';
export const REMOVE_LOCATION_FILTER =       '[Dataset] Remove Location Filter';

export const ADD_GROUP_FILTER =             '[Dataset] Add Group Filter';
export const REMOVE_GROUP_FILTER =          '[Dataset] Remove Group Filter';

export const ADD_KEYWORD_FILTER =           '[Dataset] Add Keyword Filter';
export const REMOVE_KEYWORD_FILTER =        '[Dataset] Remove Keyword Filter';

export const SET_TYPE_FILTER =              '[Dataset] Set Type Filter';
export const SET_TEXT_FILTER =              '[Dataset] Set Text Filter';
export const SET_DATE_RANGE =               '[Dataset] Set Date Range Filter';

export const CLEAR_FACETS =                 '[Dataset] Clear Facets';

export class SearchCompleteAction implements Action {
    readonly type = SEARCH_COMPLETE;
    constructor(public payload: {}[]) {}
}

export class SearchFailedAction implements Action {
    readonly type = SEARCH_FAILED;
    constructor(public payload: any) {}
}

export class UpdateFilterAction implements Action {
    readonly type = FILTER_UPDATE;
    constructor(public payload: any) {}
}

export class UpdateFilterCompleteAction implements Action {
    readonly type = FILTER_UPDATE_COMPLETE;
    constructor(public payload: any) {}
}

export class FilterFailedAction implements Action {
    readonly type = FILTER_FAILED;
    constructor(public payload: any) {}
}

export class FilterValueAction implements Action {
    readonly type = FILTER_VALUE_UPDATE;
    constructor(public payload?: any) {}
}

export class SearchIDAction implements Action {
    readonly type = SEARCH_ID;
    constructor(public payload: string) {}
}

export class SearchIDCompleteAction implements Action {
    readonly type = SEARCH_ID_COMPLETE;
    constructor(public payload: {}) {}
}

export class SearchIDFailedAction implements Action {
    readonly type = SEARCH_ID_FAILED;
    constructor(public payload: any) {}
}

export class DatablocksAction implements Action {
    readonly type = DATABLOCKS;
    constructor(public payload: string) {}
}

export class DatablocksCompleteAction implements Action {
    readonly type = DATABLOCKS_COMPLETE;
}

export class DatablocksFailedAction implements Action {
    readonly type = DATABLOCKS_FAILED;
    constructor(public payload: any) {}
}

export class DatablockDeleteAction implements Action {
    readonly type = DATABLOCK_DELETE;
    constructor(public payload: Datablock) {}
}

export class DatablockDeleteCompleteAction implements Action {
    readonly type = DATABLOCK_DELETE_COMPLETE;
}

export class DatablockDeleteFailedAction implements Action {
    readonly type = DATABLOCK_DELETE_FAILED;
}

export class AddGroupsAction implements Action {
    readonly type = ADD_GROUPS;
    constructor(public payload: string) {}
}

export class AddGroupsCompleteAction implements Action {
    readonly type = ADD_GROUPS_COMPLETE;
    constructor(public payload: AccessGroup[]) {}
}

export class AddGroupsFailedAction implements Action {
    readonly type = ADD_GROUPS_FAILED;
    constructor(public payload: any) {}
}

export class UpdateSelectedAction implements Action {
    readonly type = SELECTED_UPDATE;
    constructor(public payload: any) {}
}

export class UpdateSelectedDatablocksAction implements Action {
    readonly type = SELECTED_DATABLOCKS_COMPLETE;
    constructor(public payload: any) {}
}
export class CurrentSetAction implements Action {
    readonly type = SELECT_CURRENT;
    constructor(public payload: Dataset) {}
}

export class UpdateCurrentBlocksAction implements Action {
    readonly type = CURRENT_BLOCKS_COMPLETE;
    constructor(public payload: Dataset) {}
}

export class ResetStatusAction implements Action {
    readonly type = RESET_STATUS;
    constructor(public payload: any) {}
}

export class ResetStatusCompleteAction implements Action {
    readonly type = RESET_STATUS_COMPLETE;
    constructor(public payload: any) {}
}

export class TotalSetsAction implements Action {
    readonly type = TOTAL_UPDATE;
    constructor(public payload: number) {}
}

export class SelectDatasetAction implements Action {
    readonly type = SELECT_DATASET;
    constructor(readonly dataset: Dataset) {}
}

export class DeselectDatasetAction implements Action {
    readonly type = DESELECT_DATASET;
    constructor(readonly dataset: Dataset) {}
}

export class ClearSelectionAction implements Action {
    readonly type = CLEAR_SELECTION;
}

export class ExportToCsvAction implements Action {
    readonly type = EXPORT_TO_CSV;
}

export class ChangePageAction implements Action {
    readonly type = CHANGE_PAGE;
    constructor(readonly page: number, readonly limit: number) {}
}

export class SortByColumnAction implements Action {
    readonly type = SORT_BY_COLUMN;
    constructor(readonly column: string, readonly direction: string) {}
}

export class SetViewModeAction implements Action {
    readonly type = SET_VIEW_MODE;
    constructor(readonly mode: ViewMode) {}
}

export class SetSearchTermsAction implements Action {
    readonly type = SET_SEARCH_TERMS;
    constructor(readonly terms: string) {}
}

export class AddLocationFilterAction implements Action {
    readonly type = ADD_LOCATION_FILTER;
    constructor(readonly location: string) {}
}

export class RemoveLocationFilterAction implements Action {
    readonly type = REMOVE_LOCATION_FILTER;
    constructor(readonly location: string) {}
}

export class AddGroupFilterAction implements Action {
    readonly type = ADD_GROUP_FILTER;
    constructor(readonly group: string) {}
}

export class RemoveGroupFilterAction implements Action {
    readonly type = REMOVE_GROUP_FILTER;
    constructor(readonly group: string) {}
}

export class AddKeywordFilterAction implements Action {
    readonly type = ADD_KEYWORD_FILTER;
    constructor(readonly keyword: string) {}
}

export class RemoveKeywordFilterAction implements Action {
    readonly type = REMOVE_KEYWORD_FILTER;
    constructor(readonly keyword: string) {}
}

export class SetTypeFilterAction implements Action {
    readonly type = SET_TYPE_FILTER;
    constructor(readonly datasetType: string) {}
}

export class SetTextFilterAction implements Action {
    readonly type = SET_TEXT_FILTER;
    constructor(readonly text: string) {}
}

export class SetDateRangeFilterAction implements Action {
    readonly type = SET_DATE_RANGE;
    constructor(readonly begin: Date, readonly end: Date) {}
}

export class ClearFacetsAction implements Action {
    readonly type = CLEAR_FACETS;
}

export class FetchDatasetsAction implements Action {
    readonly type = FETCH_DATASETS;
}

export class FetchDatasetsCompleteAction implements Action {
    readonly type = FETCH_DATASETS_COMPLETE;
    constructor(readonly datasets: Dataset[]) {}
}
export class FetchDatasetsFailedAction implements Action {
    readonly type = FETCH_DATASETS_FAILED;
}

export class FetchFacetCountsAction implements Action {
    readonly type = FETCH_FACET_COUNTS;
}

export class FetchFacetCountsCompleteAction implements Action {
    readonly type = FETCH_FACET_COUNTS_COMPLETE;
    constructor(readonly facetCounts: FacetCounts, readonly allCounts: number) {}
}
export class FetchFacetCountsFailedAction implements Action {
    readonly type = FETCH_FACET_COUNTS_FAILED;
}

export type Actions =
    SearchCompleteAction | SearchFailedAction |
    UpdateFilterAction | UpdateFilterCompleteAction | FilterFailedAction |
    FilterValueAction | SearchIDAction | SearchIDCompleteAction |
    SearchIDFailedAction | DatablocksAction | DatablocksCompleteAction | UpdateCurrentBlocksAction |
    DatablockDeleteAction | DatablockDeleteCompleteAction | DatablockDeleteFailedAction |
    DatablocksAction | AddGroupsAction | AddGroupsCompleteAction | UpdateSelectedDatablocksAction |
    AddGroupsFailedAction | UpdateSelectedAction | TotalSetsAction | ResetStatusAction | ResetStatusCompleteAction |
    SelectDatasetAction | DeselectDatasetAction |
    ExportToCsvAction | ChangePageAction | SortByColumnAction | SetViewModeAction |
    
    // New filtering actions
    SetSearchTermsAction | ClearFacetsAction;
    
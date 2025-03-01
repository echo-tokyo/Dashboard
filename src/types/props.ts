import { Test } from './api'

type TSortField = 'name' | 'type' | 'siteName' | 'status' | null
type TSetSortByField = (field: 'name' | 'type' | 'siteName' | 'status') => void
type TSortOrder = 'asc' | 'desc' | null
type TField = 'name' | 'type' | 'siteName' | 'status'

export interface IPropsInput {
  setHandleChange: (value: string) => void
  handleChange: string
  testsCount: number
}

export interface IPropsNoResults {
  handleChangeReset: () => void
}

export interface IPropsSort {
  setSortByField: TSetSortByField
  sortField: TSortField
  sortOrder: TSortOrder
}

export interface usePropsFilter {
  handleChange: string
  tests: Test[]
}

export interface UsePropsFilter {
  filteredData: Test[]
}

export interface IGetClassIcon {
  sortField: TSortField
  field: TField
  sortOrder: TSortOrder
}

export interface ISortRightItemProps {
  field: TField
  sortField: TSortField
  sortOrder: TSortOrder
  setSortByField: TSetSortByField
}

export interface IPropsButton {
  styles: 'finalize' | 'results'
}